'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arisButton = function (_HTMLElement) {
  _inherits(arisButton, _HTMLElement);

  _createClass(arisButton, [{
    key: 'disabled',


    // A getter/setter for a disabled property.
    get: function get() {
      return this.hasAttribute('disabled');
    },
    set: function set(val) {
      // Reflect the value of the disabled property as an HTML attribute.
      if (val) {
        this.setAttribute('disabled', '');
      } else {
        this.removeAttribute('disabled');
      }
    }
  }], [{
    key: 'observedAttributes',
    get: function get() {
      return ['disabled'];
    }
  }]);

  function arisButton() {
    _classCallCheck(this, arisButton);

    var _this = _possibleConstructorReturn(this, (arisButton.__proto__ || Object.getPrototypeOf(arisButton)).call(this));

    _this.addEventListener('click', function (e) {
      if (_this.disabled) {
        return;
      }
    });
    return _this;
  }

  _createClass(arisButton, [{
    key: 'createdCallback',
    value: function createdCallback() {
      this.createShadowRoot().innerHTML = '\n\t\t\t<style>\nbutton {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */\n  overflow: visible;\n  text-transform: none;\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n\nbutton[disabled] {\n  cursor: default;\n  outline: none; }\n\nbutton::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\n:host {\n  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  border-radius: 10px;\n  background: #fff;\n  contain: content;\n  cursor: pointer;\n  display: inline-block;\n  padding: 6px 14px;\n  -webkit-transition: box-shadow 0.1s;\n  transition: box-shadow 0.1s;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none; }\n\n/*Basic button properties*/\nbutton {\n  border: 0px;\n  border-radius: 10px;\n  color: white;\n  cursor: pointer;\n  font-size: 14px; }\n  button:focus {\n    outline-color: #fff;\n    outline-style: dashed;\n    outline-width: 1px; }\n\n/*PRIMARY BUTTON STYLES*/\n:host([primary]) {\n  background: #b7121f;\n  border: 4px solid #F49199;\n  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n\n:host([primary]) button {\n  background: #b7121f; }\n\n@media screen and (min-width: 768px) {\n  /* Only do hover on desktop since mobile devices don\'t support hover.*/\n  :host([primary]:hover) {\n    box-shadow: 0 16px 28px 0 rgba(0, 0, 0, 0.22), 0 25px 55px 0 rgba(0, 0, 0, 0.21); } }\n\n:host([primary]:active) {\n  box-shadow: none; }\n\n:host([primary][disabled]) {\n  background: #EF5E6A;\n  border: 4px solid #EF5E6A;\n  box-shadow: none;\n  pointer-events: none;\n  cursor: not-allowed; }\n\n:host([primary][disabled]) button {\n  background: #EF5E6A;\n  outline: none;\n  cursor: not-allowed;\n  color: rgba(255, 255, 255, 0.7);\n  pointer-events: none; }\n\n/*SECONDARY BUTTON STYLES */\n:host([secondary]) {\n  background: #2196F3;\n  border: 4px solid #2196F3;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12); }\n\n:host([secondary]) button {\n  background: #2196F3; }\n\n@media screen and (min-width: 768px) {\n  /* Only do hover on desktop since mobile devices don\'t support hover.*/\n  :host([secondary]:hover) {\n    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); } }\n\n:host([secondary]:active) {\n  box-shadow: none; }\n\n:host([secondary][disabled]) {\n  background: #90CAF9;\n  border: 4px solid #90CAF9;\n  box-shadow: none;\n  pointer-events: none;\n  cursor: not-allowed; }\n\n:host([secondary][disabled]) button {\n  background: #90CAF9;\n  outline: none;\n  cursor: not-allowed;\n  color: rgba(255, 255, 255, 0.7);\n  pointer-events: none; }\n\n/*BIG SECONDARY BUTTON STYLES */\n:host([secondary][big]) {\n  background: #2196F3;\n  border: 4px solid #2196F3;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  padding: 14px 14px; }\n\n:host([secondary][big]) button {\n  background: #2196F3;\n  font-size: 18px; }\n\n@media screen and (min-width: 768px) {\n  /* Only do hover on desktop since mobile devices don\'t support hover.*/\n  :host([secondary][big]:hover) {\n    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); } }\n\n:host([secondary][big]:active) {\n  box-shadow: none; }\n\n:host([secondary][big][disabled]) {\n  background: #90CAF9;\n  border: 4px solid #90CAF9;\n  box-shadow: none;\n  pointer-events: none;\n  cursor: not-allowed; }\n\n:host([secondary][big][disabled]) button {\n  background: #90CAF9;\n  outline: none;\n  cursor: not-allowed;\n  color: rgba(255, 255, 255, 0.7);\n  pointer-events: none; }\n\n</style>\n\t\t\t<button>\n\t\t\t\t<content></content>\n\t\t\t</button>\n\t\t';
    }
  }, {
    key: 'attachedCallback',
    value: function attachedCallback() {
      if (window.WebComponents && WebComponents.ShadowCSS) {
        WebComponents.ShadowCSS.shimStyling(this.shadowRoot, 'aris-button');
      }

      var btn = this.shadowRoot.querySelector('button');

      if (this.disabled) {
        btn.setAttribute('tabindex', '-1');
        btn.setAttribute('aria-disabled', 'true');
      } else {
        btn.setAttribute('tabindex', '0');
        btn.setAttribute('aria-disabled', 'false');
      }
    }
  }]);

  return arisButton;
}(HTMLElement);

var myArisButton = document.registerElement("aris-button", arisButton);

var SCView = function (_HTMLElement2) {
  _inherits(SCView, _HTMLElement2);

  function SCView() {
    _classCallCheck(this, SCView);

    return _possibleConstructorReturn(this, (SCView.__proto__ || Object.getPrototypeOf(SCView)).apply(this, arguments));
  }

  _createClass(SCView, [{
    key: 'createdCallback',
    value: function createdCallback() {
      this._spinnerTimeout = undefined;
      this._view = null;
      this._isRemote = this.getAttribute('remote') !== null;
    }
  }, {
    key: '_hideSpinner',
    value: function _hideSpinner() {
      this.classList.remove('pending');
    }
  }, {
    key: '_showSpinner',
    value: function _showSpinner() {
      this.classList.add('pending');
    }
  }, {
    key: '_loadView',
    value: function _loadView(data) {
      var _this3 = this;

      // Wait for half a second then show the spinner.
      var spinnerTimeout = setTimeout(function (_) {
        return _this3._showSpinner();
      }, 500);

      //this._view = new DocumentFragment();
      this._view = document.createElement('div');

      var xhr = new XMLHttpRequest();

      xhr.onload = function (evt) {
        var newDoc = evt.target.response;
        var newView = newDoc.querySelector('sc-view.visible');

        // Copy in the child nodes from the parent.
        while (newView.firstChild) {
          _this3._view.appendChild(newView.firstChild);
        }

        // Add the fragment to the page.
        _this3.appendChild(_this3._view);

        // Clear the timeout and remove the spinner if needed.
        clearTimeout(spinnerTimeout);
        _this3._hideSpinner();
      };
      xhr.responseType = 'document';
      xhr.open('GET', '' + data[0]);
      xhr.send();
    }
  }, {
    key: 'in',
    value: function _in(data) {
      var _this4 = this;

      if (this._isRemote && !this._view) {
        this._loadView(data);
      }

      return new Promise(function (resolve, reject) {
        var onTransitionEnd = function onTransitionEnd() {
          _this4.removeEventListener('transitionend', onTransitionEnd);
          resolve();
        };

        _this4.classList.add('visible');
        _this4.addEventListener('transitionend', onTransitionEnd);
      });
    }
  }, {
    key: 'out',
    value: function out() {
      var _this5 = this;

      return new Promise(function (resolve, reject) {
        var onTransitionEnd = function onTransitionEnd() {
          _this5.removeEventListener('transitionend', onTransitionEnd);
          resolve();
        };

        _this5.classList.remove('visible');
        _this5.addEventListener('transitionend', onTransitionEnd);
      });
    }
  }, {
    key: 'update',
    value: function update() {
      return Promise.resolve();
    }
  }, {
    key: 'route',
    get: function get() {
      return this.getAttribute('route') || null;
    }
  }]);

  return SCView;
}(HTMLElement);

document.registerElement('sc-view', SCView);

var SCRouter = function (_HTMLElement3) {
  _inherits(SCRouter, _HTMLElement3);

  function SCRouter() {
    _classCallCheck(this, SCRouter);

    return _possibleConstructorReturn(this, (SCRouter.__proto__ || Object.getPrototypeOf(SCRouter)).apply(this, arguments));
  }

  _createClass(SCRouter, [{
    key: '_onChanged',
    value: function _onChanged() {
      var _this7 = this;

      var path = window.location.pathname;
      console.log("path: "+path);
      var routes = Array.from(this._routes.keys());
      console.log("routes: "+routes);
      var route = routes.find(function (r) {
        return r.test(path);
      });
      console.log("route: "+route);
      var data = route.exec(path);

      if (!route) {
        return;
      }

      // Store the new view.
      this._newView = this._routes.get(route);

      // We don't want to create more promises for the outgoing view animation,
      // because then we get a lot of hanging Promises, so we add a boolean gate
      // here to stop if there's already a transition running.
      if (this._isTransitioningBetweenViews) {
        return Promise.resolve();
      }
      this._isTransitioningBetweenViews = true;

      // Assume that there's no outgoing animation required.
      var outViewPromise = Promise.resolve();

      // If there is a current view...
      if (this._currentView) {
        // ...and it's the one we already have, just update it.
        if (this._currentView === this._newView) {
          // No transitions, so remove the boolean gate.
          this._isTransitioningBetweenViews = false;

          return this._currentView.update(data);
        }

        // Otherwise animate it out, and take the Promise made by the view as an
        // indicator that the view is done.
        outViewPromise = this._currentView.out(data);
      }

      // Whenever the outgoing animation is done (which may be immediately if
      // there isn't one), update the references to the current view, allow
      // outgoing animations to proceed.
      return outViewPromise.then(function (_) {
        _this7._currentView = _this7._newView;
        _this7._isTransitioningBetweenViews = false;
        return _this7._newView.in(data);
      });
    }
  }, {
    key: 'go',
    value: function go(url) {
      window.history.pushState(null, null, url);
      return this._onChanged();
    }
  }, {
    key: 'addRoute',
    value: function addRoute(route, view) {
      if (this._routes.has(route)) return console.warn('Route already exists: ' + route);

      this._routes.set(route, view);
    }
  }, {
    key: '_addRoutes',
    value: function _addRoutes() {
      var _this8 = this;

      var views = Array.from(document.querySelectorAll('sc-view'));
      views.forEach(function (view) {
        if (!view.route) return;

        _this8.addRoute(new RegExp(view.route, 'i'), view);
      }, this);
    }
  }, {
    key: '_removeRoute',
    value: function _removeRoute(route) {
      this._routes.delete(route);
    }
  }, {
    key: '_clearRoutes',
    value: function _clearRoutes() {
      this._routes.clear();
    }
  }, {
    key: 'createdCallback',
    value: function createdCallback() {
      this._onChanged = this._onChanged.bind(this);
      this._routes = new Map();
    }
  }, {
    key: 'attachedCallback',
    value: function attachedCallback() {
      window.addEventListener('popstate', this._onChanged);
      this._clearRoutes();
      this._addRoutes();
      this._onChanged();
    }
  }, {
    key: 'detachedCallback',
    value: function detachedCallback() {
      window.removeEventListener('popstate', this._onChanged);
    }
  }]);

  return SCRouter;
}(HTMLElement);

document.registerElement('sc-router', SCRouter);