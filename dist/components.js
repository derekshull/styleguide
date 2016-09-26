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

var todoInput = function (_HTMLElement2) {
  _inherits(todoInput, _HTMLElement2);

  function todoInput() {
    _classCallCheck(this, todoInput);

    return _possibleConstructorReturn(this, (todoInput.__proto__ || Object.getPrototypeOf(todoInput)).call(this));
  }

  _createClass(todoInput, [{
    key: 'createdCallback',
    value: function createdCallback() {
      var _this3 = this;

      this.createShadowRoot().innerHTML = '\n      \t\t<style>\ninput {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */\n  line-height: normal; }\n\nhtml input[type="button"],\ninput[type="reset"],\ninput[type="submit"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n\nhtml input[disabled] {\n  cursor: default; }\n\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\ninput[type="checkbox"],\ninput[type="radio"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\ninput[type="number"]::-webkit-inner-spin-button,\ninput[type="number"]::-webkit-outer-spin-button {\n  height: auto; }\n\ninput[type="search"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  box-sizing: content-box;\n  /* 2 */ }\n\ninput[type="search"]::-webkit-search-cancel-button,\ninput[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n</style>\n      \t\t<p>\n\t\t\t\t<input type="text" id="todoText" autofocus> <aris-button secondary>Send</aris-button>\n\t\t\t</p>\n    \t';
      var input = this.shadowRoot.querySelector('input');
      var btn = this.shadowRoot.querySelector('aris-button');
      btn.addEventListener('click', function () {
        return _this3.updateList(input);
      });
    }
  }, {
    key: 'attachedCallback',
    value: function attachedCallback() {
      if (window.WebComponents && WebComponents.ShadowCSS) {
        WebComponents.ShadowCSS.shimStyling(this.shadowRoot, 'todo-input');
      }
    }
  }, {
    key: 'updateList',
    value: function updateList(input) {
      document.querySelector("todo-list").setAttribute("json", '[{"id": 0, "name": "' + input.value + '"}]');
      input.value = "";
    }
  }]);

  return todoInput;
}(HTMLElement);

var myTodoInput = document.registerElement("todo-input", todoInput);

var todoList = function (_HTMLElement3) {
  _inherits(todoList, _HTMLElement3);

  function todoList() {
    _classCallCheck(this, todoList);

    return _possibleConstructorReturn(this, (todoList.__proto__ || Object.getPrototypeOf(todoList)).call(this));
  }

  _createClass(todoList, [{
    key: 'createdCallback',
    value: function createdCallback() {
      this.innerHTML = '\n\t\t\t<p>\n\t\t\t\tThe List:\n\t\t\t\t<div id="todoListItems"></div>\n\t\t\t</p>\n\t\t';
    }
  }, {
    key: 'attachedCallback',
    value: function attachedCallback() {
      if (window.WebComponents && WebComponents.ShadowCSS) {
        WebComponents.ShadowCSS.shimStyling(this.shadowRoot, 'todo-list');
      }
    }
  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(json, oldValue, newValue) {
      var items = JSON.parse(newValue);

      if (!oldValue) {
        for (var i in items) {
          this.querySelector('#todoListItems').innerHTML += '\n\t\t\t\t\t<div class="todoItem">\n\t\t\t\t\t\t' + items[i].name + '\n\t\t\t\t\t\t<button class="complete">Complete</button>\n\t\t\t\t\t\t<button class="remove">Remove</button>\n\t\t\t\t\t</div>\n\t\t\t\t';
        }
      } else {
        var todoListItems = this.querySelector('#todoListItems');
        for (var i in items) {
          var theKid = document.createElement("div");
          theKid.innerHTML = '\n\t\t\t\t\t<div class="todoItem">\n\t\t\t\t\t\t' + items[i].name + '\n\t\t\t\t\t\t<button class="complete">Complete</button>\n\t\t\t\t\t\t<button class="remove">Remove</button>\n\t\t\t\t\t</div>\n\t\t\t\t';
          todoListItems.insertBefore(theKid, todoListItems.firstChild);
        }
      }
    }
  }]);

  return todoList;
}(HTMLElement);

var myTodoList = document.registerElement("todo-list", todoList);