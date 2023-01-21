import React from "react"
import { Link } from 'gatsby'

function EspecieComponent({ name, titulo, body }) {
    return (
        <div>
            <p>{titulo}</p>
            <p>Nombre: {name}</p>
            <p>Contenido: {body}</p>
        </div>
    )
}

export default EspecieComponent;