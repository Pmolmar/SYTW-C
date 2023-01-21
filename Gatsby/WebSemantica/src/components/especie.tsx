import React from "react"
import { Link } from 'gatsby'

function GameComponent({ name, genre, imageUrl, year, company }) {
    return (
        <div>
            <img src={imageUrl}></img>
            <div>
                <p>Nombre: {name}</p>
                <p>Genero: {genre}</p>
                <p>Año de salida: {year}</p>
                <p>Desarrollaroda: {company}</p>
            </div>
        </div>
    )
}

export default GameComponent;