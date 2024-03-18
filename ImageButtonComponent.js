class ImageButton extends HTMLButtonElement
{
    constructor()
    {
        super();
    }
}
customElements.define("imaged-button", ImageButton, {"extends":"button"});