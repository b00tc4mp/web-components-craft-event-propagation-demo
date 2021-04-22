class SwitchElement extends HTMLElement {
    constructor() {
        super()

        this.style.display = 'block'
        this.style.border = '1px solid black'
        this.style.width = '50px'
        this.style.height = '50px'
        this.style.backgroundColor = 'black'
        this.style.margin = '10px'

        this.addEventListener('click', function(event) {
            this.style.backgroundColor = (this.on = this.style.backgroundColor === 'black')? 'yellow' : 'black'
        })
    }
}

customElements.define('switch-element', SwitchElement)

class ControlsElement extends HTMLElement {
    constructor() {
        super()

        this.onSwitchClick = null

        this.style.display = 'inline-block'
        this.style.border = '1px solid black'
        this.style.padding = '10px'
    }

    connectedCallback() {
        this.innerHTML = '<switch-element id="switch-1"></switch-element><switch-element id="switch-2"></switch-element>'

        this.querySelector('#switch-1').addEventListener('click', function(event) {
            this.onSwitchClick(event)
        }.bind(this))

        this.querySelector('#switch-2').addEventListener('click', function(event) {
            this.onSwitchClick(event)
        }.bind(this))
    }
}

customElements.define('controls-element', ControlsElement)

class WallElement extends HTMLElement {
    constructor() {
        super()

        this.onControlSwitchClick = null

        this.style.display = 'flex'
        this.style.justifyContent = 'center'
        this.style.alignItems = 'center'
        this.style.boxSizing = 'border-box'
        this.style.border = '1px solid black'
        this.style.padding = '10px'
        this.style.margin = '10px'
    }

    connectedCallback() {
        this.innerHTML = '<controls-element></controls-element>'

        this.querySelector('controls-element').onSwitchClick = function(event) {
             this.onControlSwitchClick(event)   
        }.bind(this)
    }
}

customElements.define('wall-element', WallElement)