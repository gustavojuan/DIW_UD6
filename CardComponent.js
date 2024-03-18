class CardComponent extends HTMLElement {

    static observedAttributes = ['title','b']
    
  constructor() {
    super();

    
    this.shadow = this.attachShadow({ mode: "closed" });
    const containerDiv = document.createElement("div");
    containerDiv.className = "card-container";
    

    const titleElement = document.createElement("span");
    titleElement.className = "card-title";
    titleElement.id= this.titleAttributeName;

    const bodyElement = document.createElement("span");
    bodyElement.className = "card-body";
    bodyElement.id= this.bodyAttributeName;

    containerDiv.appendChild(titleElement);
    containerDiv.appendChild(bodyElement);

    this.shadow.appendChild(containerDiv);
  }


  attributeChangedCallback(name, oldValue, newValue )
  {
    debugger
    if(name != this.titleAttributeName && name != this.bodyAttributeName){
        return;
    }

    if(name == this.titleAttributeName){        
        const titleElement = this.shadow.getElementById(this.titleAttributeName)
        titleElement.innerHTML = newValue;
    }

    if(name == this.bodyAttributeName){
        const bodyElement = this.shadow.getElementById(this.bodyAttributeName)
        bodyElement.innerHTML = newValue;
    }

  }


  get titleAttributeName()
  {
    return 'title';
  }

  get bodyAttributeName()
  {
    return 'body';
  }

  get title(){
    return this.getAttribute(this.titleAttributeName || '');
  }


  get body(){
    return this.getAttribute(this.bodyAttributeName || '');
  }


}

customElements.define("card-component", CardComponent);
