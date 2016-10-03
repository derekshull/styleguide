class SCView extends HTMLElement {

	createdCallback () {
		this._spinnerTimeout = undefined;
		this._view = null;
		this._isRemote = (this.getAttribute('remote') !== null);
	}

	get route () {
		return this.getAttribute('route') || null;
	}

	_hideSpinner () {
		this.classList.remove('pending');
	}

	_showSpinner () {
		this.classList.add('pending');
	}

	_loadView (data) {
		// Wait for half a second then show the spinner.
		const spinnerTimeout = setTimeout(_ => this._showSpinner(), 500);

		//this._view = new DocumentFragment();
		this._view = document.createElement('div');

		const xhr = new XMLHttpRequest();

		xhr.onload = evt => {
			const newDoc = evt.target.response;
			const currentView = document.querySelector('sc-view.visible');
			const newView = newDoc.querySelector('sc-view.visible');

			// Copy in the child nodes from the parent.
			while(newView.firstChild) {
				this._view.appendChild(newView.firstChild);
			};

			// Add the fragment to the page.
			currentView.innerHTML = this._view.innerHTML;
			

			// Clear the timeout and remove the spinner if needed.
			clearTimeout(spinnerTimeout);
			this._hideSpinner();
		};
		xhr.open('GET', `${data[0]}`);
		xhr.responseType = 'document';
		xhr.send();
	}

	in (data) {
		if (this._isRemote && !this._view) {
			this._loadView(data);
		}

		return new Promise((resolve, reject) => {
			const onTransitionEnd = () => {
				this.removeEventListener('transitionend', onTransitionEnd);
				resolve();
			};

			this.classList.add('visible');
			this.addEventListener('transitionend', onTransitionEnd);
		});
	}

	out () {
		return new Promise((resolve, reject) => {
			const onTransitionEnd = () => {
				this.removeEventListener('transitionend', onTransitionEnd);
				resolve();
			};

			this.classList.remove('visible');
			this.addEventListener('transitionend', onTransitionEnd);
		});
	}

	update () {
		return Promise.resolve();
	}
}

document.registerElement('sc-view', SCView);
//customElements.define("sc-view", SCView);


class SCRouter extends HTMLElement {

  _onChanged () {
	const path = window.location.pathname;
	const routes = Array.from(this._routes.keys());
	const route = routes.find(r => r.test(path));
	const data = route.exec(path);

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
	let outViewPromise = Promise.resolve();

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
	return outViewPromise
	  .then(_ => {
		this._currentView = this._newView;
		this._isTransitioningBetweenViews = false;
		return this._newView.in(data);
	  });
  }

  go (url) {
	window.history.pushState(null, null, url);
	return this._onChanged();
  }

  addRoute (route, view) {
	if (this._routes.has(route))
	  return console.warn(`Route already exists: ${route}`);

	this._routes.set(route, view);
  }

  _addRoutes () {
	let views = Array.from(document.querySelectorAll('sc-view'));
	views.forEach(view => {
	  if (!view.route)
		return;

	  this.addRoute(new RegExp(view.route, 'i'), view);
	}, this);
  }

  _removeRoute (route) {
	this._routes.delete(route);
  }

  _clearRoutes () {
	this._routes.clear();
  }

  createdCallback () {
	this._onChanged = this._onChanged.bind(this);
	this._routes = new Map();
  }

  attachedCallback () {
	window.addEventListener('popstate', this._onChanged);
	this._clearRoutes();
	this._addRoutes();
	this._onChanged();
  }

  detachedCallback () {
	window.removeEventListener('popstate', this._onChanged);
  }
}

document.registerElement('sc-router', SCRouter);
//customElements.define("sc-router", SCRouter);