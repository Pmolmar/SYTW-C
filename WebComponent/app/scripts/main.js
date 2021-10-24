class MyTag extends HTMLElement{

    static get observedAttributes() {
        return ['style'];
    }
    
    constructor () {
        super();
        var shadow = this.attachShadow({mode: 'open'});
        var div = document.createElement('div')
        var p = document.createElement('p')
        p.innerText= "hola"
        div.appendChild(p)
       
        shadow.appendChild(div)
    }

    connectedCallback() {
        console.log("Conectado")
    }
    disconnectedCallback() {
        console.log('Desconectado');
    }
    
    adoptedCallback() {
        console.log('Adoptado');
    }

    attributeChangedCallback() {
        console.log('Cambio');
    }
}

customElements.define('my-tag', MyTag);

const add = document.querySelector('.add');
const update = document.querySelector('.update');
const remove = document.querySelector('.remove');

let myTag

add.onclick = () => {
    myTag = document.createElement('my-tag');
    document.body.appendChild(myTag);
}

update.onclick = () => {
    myTag.setAttribute('style', 'color: red')
}

remove.onclick = () => {
    document.body.removeChild(myTag)
}