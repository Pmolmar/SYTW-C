class MyEvent extends HTMLElement {
  
    constructor() {
    super();

    var peticion;

    fetch("http://demo8162483.mockable.io/")
      .then((response) => response.json())
      .then((data) => {
        peticion = data;

        var shadow = this.attachShadow({ mode: "open" });
        var div = document.createElement("div");
        div.id = "tarjeta"
        div.innerHTML+= `
        <style>
        button {
          background: #1E88E5;
          color: white;
          padding: 0.5rem;
          border-radius: 12px;
          width: 25%;
          
        }

        div {
            width: 30rem;
          border-radius: 12px;
          background-color: lightcyan;
          margin: 2rem;
          padding-left: 0.2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        p {
            align-self: flex-start;
            margin-left: 0.2rem;
        }

        div div{
            width: 90%;
          background-color: lightgreen;
          margin: 0.5rem;
        }

        img {
            padding: 1rem;
            border-radius: 20px;
        }

        #nombre{
            font-size: 2rem;
            margin: 0.3rem;
        }
        #evento{
            margin: 0.3rem;
            font-size: 1.2rem;
        }
        </style>
        `;

        var info = document.createElement("div");
        info.id = "info";
        info.style = "display:none"

        var desc = document.createElement("p");
        desc.innerHTML = "Descripcion: " + peticion.desc;

        var duracion = document.createElement("p");
        duracion.innerHTML = "Duracion: " + peticion.duracion;

        var evento = document.createElement("p");
        evento.innerHTML = peticion.evento;
        evento.id = "evento"

        var fecha = document.createElement("p");
        fecha.innerHTML = peticion.fecha;

        var img = document.createElement("img");
        img.src = peticion.img;

        var nombre = document.createElement("p");
        nombre.innerHTML = peticion.nombre;
        nombre.id = "nombre"

        var boton = document.createElement("button");
        boton.innerHTML = "Mas info +";
        boton.addEventListener("click", () => {
          if (info.childElementCount > 0) {
            info.style = "display:none"
            info.replaceChildren();
          } else {
            info.appendChild(desc);
            info.appendChild(duracion);
            info.appendChild(img);
            info.style = "display:flex"

          }
        });

        div.appendChild(nombre);
        div.appendChild(evento);
        div.appendChild(fecha);
        div.appendChild(boton);
        div.appendChild(info);

        shadow.appendChild(div);

        
        
      });

  
  }
}

customElements.define("my-event", MyEvent);

const addE = document.querySelector('.addE');
const removeE = document.querySelector('.removeE');

addE.onclick = () => {
    document.body.appendChild(document.createElement('my-event'));
}

removeE.onclick = () => {
    let l = document.getElementsByTagName("my-event").length
    document.body.removeChild(document.getElementsByTagName("my-event")[l-1])
}
