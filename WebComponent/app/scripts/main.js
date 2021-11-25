class MyTag extends HTMLElement{

    static get observedAttributes() {
        return ['style'];
    }
    
    constructor () {
        super();
        var shadow = this.attachShadow({mode: 'open'});
        var div = document.createElement('div')
        var p = document.createElement('p')
        p.innerText= "Elemento ciclo vida CONSOLA"
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

add.onclick = () => {
    document.body.appendChild(document.createElement('my-tag'));
}

update.onclick = () => {
    let l = document.getElementsByTagName("my-tag").length
    document.getElementsByTagName("my-tag")[l-1].setAttribute('style', 'color: red')
}

remove.onclick = () => {
    let l = document.getElementsByTagName("my-tag").length
    document.body.removeChild(document.getElementsByTagName("my-tag")[l-1])

}