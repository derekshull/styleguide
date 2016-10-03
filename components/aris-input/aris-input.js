class arisInput extends HTMLElement {

	static get observedAttributes() {
    	return ['disabled', 'placeholder'];
  	}

	// A getter/setter for a disabled property.
  	get disabled() {
    	return this.hasAttribute('disabled');
  	}
  	set disabled(val) {
		if (val) {
      		this.setAttribute('disabled', '');
    	} 
    	else {
      		this.removeAttribute('disabled');
    	}
  	}

  	// A getter/setter for a placeholder property.
  	get placeholder() {
    	return this.hasAttribute('placeholder');
  	}
  	set placeholder(val) {
		if (val) {
      		this.setAttribute('placeholder', '');
    	} 
    	else {
      		this.removeAttribute('placeholder');
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
			<!-- inject-style src="./processing/aris-input/aris-input.css" -->
			<div class="group">
				<input type="text" required>
	      		<span class="highlight"></span>
	      		<span class="bar"></span>
	      		<label></label>
      		</div>
		`;

		let input = this.shadowRoot.querySelector('input');
		let rootThis = this;

		input.addEventListener('keyup', function(event) {
			rootThis.value = event.target.value;
		    if (event.target.validity.valid) {
		        input.classList.add("valid");
		        input.classList.remove("invalid");
		    } else {
		        input.classList.add("invalid");
		        input.classList.remove("valid");
		    }
		}, false);
	}

	attachedCallback() {

		if (window.WebComponents && WebComponents.ShadowCSS) {
	        WebComponents.ShadowCSS.shimStyling(this.shadowRoot, 'aris-input');
	    }

	    let input = this.shadowRoot.querySelector('input');
	    let label = this.shadowRoot.querySelector('label');

	    if (this.disabled) {
	      	input.setAttribute('tabindex', '-1');
	      	input.setAttribute('aria-disabled', 'true');
	    } 
	    else {
	      	input.setAttribute('tabindex', '0');
	      	input.setAttribute('aria-disabled', 'false');
	    }

	    if (this.placeholder) {
	    	label.innerHTML = this.getAttribute("placeholder");
	    }
	}
}

var myArisButton = document.registerElement("aris-input", arisInput);
//customElements.define("aris-button", arisButton);