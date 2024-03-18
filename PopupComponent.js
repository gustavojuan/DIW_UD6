class PopupComponent extends HTMLElement
{
    constructor()
    {
        super();
    }

    connectedCallback()
    {
        console.log('Custom Element added to page.')
    }

    disconnectedCallback()
    {
        console.log('Custom Element removed to page.')

    }
    adoptedCallback()
    {
        console.log('Custom Element moved to  new page.')   
    }

    attributeChangedCallback(name, oldValue, newValue)
    {
        console.log("Attribute ${name} has charged.");
    }
}

customElements.define('element-popup', PopupComponent);