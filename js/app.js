'use strict';

//FASTCLICK LISTENER

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function () {
		FastClick.attach(document.body);
	}, false);
}

//Side-nav JS

var App = function App() {
	_classCallCheck(this, App);

	var router = document.querySelector('sc-router');
	var links = Array.from(document.querySelectorAll('a'));

	function onClick(evt) {
		evt.preventDefault();
		router.go(evt.target.href);
	}

	links.forEach(function (link) {
		link.addEventListener('click', onClick);
	});
};

(function (_) {
	return new App();
})();

var Detabinator = function () {
	function Detabinator(element) {
		_classCallCheck(this, Detabinator);

		if (!element) {
			throw new Error('Missing required argument. new Detabinator needs an element reference');
		}
		this._inert = false;
		this._focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex], [contenteditable]';
		this._focusableElements = Array.from(element.querySelectorAll(this._focusableElementsString));
	}

	_createClass(Detabinator, [{
		key: 'inert',
		get: function get() {
			return this._inert;
		},
		set: function set(isInert) {
			if (this._inert === isInert) {
				return;
			}

			this._inert = isInert;

			this._focusableElements.forEach(function (child) {
				if (isInert) {
					// If the child has an explict tabindex save it
					if (child.hasAttribute('tabindex')) {
						child.__savedTabindex = child.tabIndex;
					}
					// Set ALL focusable children to tabindex -1
					child.setAttribute('tabindex', -1);
				} else {
					// If the child has a saved tabindex, restore it
					// Because the value could be 0, explicitly check that it's not false
					if (child.__savedTabindex === 0 || child.__savedTabindex) {
						return child.setAttribute('tabindex', child.__savedTabindex);
					} else {
						// Remove tabindex from ANY REMAINING children
						child.removeAttribute('tabindex');
					}
				}
			});
		}
	}]);

	return Detabinator;
}();

var SideNav = function () {
	function SideNav() {
		_classCallCheck(this, SideNav);

		this.showButtonEl = document.querySelector('.js-menu-show');
		this.hideButtonEl = document.querySelector('.js-menu-hide');
		this.sideNavEl = document.querySelector('.js-side-nav');
		this.sideNavContainerEl = document.querySelector('.js-side-nav-container');
		this.sideNavLinkEl = document.querySelectorAll('.js-side-nav__link');
		// Control whether the container's children can be focused
		// Set initial state to inert since the drawer is offscreen
		this.detabinator = new Detabinator(this.sideNavContainerEl);
		this.detabinator.inert = true;

		this.showSideNav = this.showSideNav.bind(this);
		this.hideSideNav = this.hideSideNav.bind(this);
		this.blockClicks = this.blockClicks.bind(this);
		this.onTouchStart = this.onTouchStart.bind(this);
		this.onTouchMove = this.onTouchMove.bind(this);
		this.onTouchEnd = this.onTouchEnd.bind(this);
		this.onTransitionEnd = this.onTransitionEnd.bind(this);
		this.update = this.update.bind(this);

		this.startX = 0;
		this.currentX = 0;
		this.touchingSideNav = false;

		this.supportsPassive = undefined;
		this.addEventListeners();
	}

	// apply passive event listening if it's supported


	_createClass(SideNav, [{
		key: 'applyPassive',
		value: function applyPassive() {
			if (this.supportsPassive !== undefined) {
				return this.supportsPassive ? { passive: true } : false;
			}
			// feature detect
			var isSupported = false;
			try {
				document.addEventListener('test', null, { get passive() {
						isSupported = true;
					} });
			} catch (e) {}
			this.supportsPassive = isSupported;
			return this.applyPassive();
		}
	}, {
		key: 'addEventListeners',
		value: function addEventListeners() {
			this.showButtonEl.addEventListener('click', this.showSideNav);
			this.hideButtonEl.addEventListener('click', this.hideSideNav);
			this.sideNavEl.addEventListener('click', this.hideSideNav);
			this.sideNavContainerEl.addEventListener('click', this.blockClicks);
			for (var i = 0; i < this.sideNavLinkEl.length; i++) {
				this.sideNavLinkEl[i].addEventListener('click', this.hideSideNav);
			}

			this.sideNavEl.addEventListener('touchstart', this.onTouchStart, this.applyPassive());
			this.sideNavEl.addEventListener('touchmove', this.onTouchMove, this.applyPassive());
			this.sideNavEl.addEventListener('touchend', this.onTouchEnd);
		}
	}, {
		key: 'onTouchStart',
		value: function onTouchStart(evt) {
			if (!this.sideNavEl.classList.contains('side-nav--visible')) return;

			this.startX = evt.touches[0].pageX;
			this.currentX = this.startX;

			this.touchingSideNav = true;
			requestAnimationFrame(this.update);
		}
	}, {
		key: 'onTouchMove',
		value: function onTouchMove(evt) {
			if (!this.touchingSideNav) return;

			this.currentX = evt.touches[0].pageX;
			var translateX = Math.min(0, this.currentX - this.startX);

			if (translateX < 0) {
				evt.preventDefault();
			}
		}
	}, {
		key: 'onTouchEnd',
		value: function onTouchEnd(evt) {
			if (!this.touchingSideNav) return;

			this.touchingSideNav = false;

			var translateX = Math.min(0, this.currentX - this.startX);
			this.sideNavContainerEl.style.transform = '';

			if (translateX < 0) {
				this.hideSideNav();
			}
		}
	}, {
		key: 'update',
		value: function update() {
			if (!this.touchingSideNav) return;

			requestAnimationFrame(this.update);

			var translateX = Math.min(0, this.currentX - this.startX);
			this.sideNavContainerEl.style.transform = 'translateX(' + translateX + 'px)';
		}
	}, {
		key: 'blockClicks',
		value: function blockClicks(evt) {
			evt.stopPropagation();
		}
	}, {
		key: 'onTransitionEnd',
		value: function onTransitionEnd(evt) {
			this.sideNavEl.classList.remove('side-nav--animatable');
			this.sideNavEl.removeEventListener('transitionend', this.onTransitionEnd);
		}
	}, {
		key: 'showSideNav',
		value: function showSideNav() {
			this.sideNavEl.classList.add('side-nav--animatable');
			this.sideNavEl.classList.add('side-nav--visible');
			this.detabinator.inert = false;
			this.sideNavEl.addEventListener('transitionend', this.onTransitionEnd);
		}
	}, {
		key: 'hideSideNav',
		value: function hideSideNav() {
			this.sideNavEl.classList.add('side-nav--animatable');
			this.sideNavEl.classList.remove('side-nav--visible');
			this.detabinator.inert = true;
			this.sideNavEl.addEventListener('transitionend', this.onTransitionEnd);
		}
	}]);

	return SideNav;
}();

new SideNav();