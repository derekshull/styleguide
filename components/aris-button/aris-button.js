class arisButton extends HTMLElement {

	static get observedAttributes() {
    	return ['disabled'];
  	}

	// A getter/setter for a disabled property.
  	get disabled() {
    	return this.hasAttribute('disabled');
  	}

  	set disabled(val) {
    	// Reflect the value of the disabled property as an HTML attribute.
		if (val) {
      		this.setAttribute('disabled', '');
    	} 
    	else {
      		this.removeAttribute('disabled');
    	}
  	}

	constructor() {
		super();

		this.addEventListener('click', e => {
      		if (this.disabled) {
        		return;
      		}
    	});
	} 
	createdCallback() {
		this.createShadowRoot().innerHTML = `
			<!-- inject-style src="./processing/aris-button/aris-button.css" -->
			<button>
				<content></content>
			</button>
		`;
	}

	attachedCallback() {
		if (window.WebComponents && WebComponents.ShadowCSS) {
	        WebComponents.ShadowCSS.shimStyling(this.shadowRoot, 'aris-button');
	    }

	    var btn = this.shadowRoot.querySelector('button');

	    if (this.disabled) {
	      	btn.setAttribute('tabindex', '-1');
	      	btn.setAttribute('aria-disabled', 'true');
	    } 
	    else {
	      	btn.setAttribute('tabindex', '0');
	      	btn.setAttribute('aria-disabled', 'false');
	    }
	}
}

var myArisButton = document.registerElement("aris-button", arisButton);
//customElements.define("aris-button", arisButton);