import React from "react"
import { Link } from 'gatsby'

function AutorComponent({ name }) {
    return (
        <div>
            <p><b>Autor:</b> {name} </p>
            <p><b>Fecha:</b> 2022-2023 </p>
            <p><Link to="https://github.com/Pmolmar">Github</Link> </p>
            <img src="https://avatars.githubusercontent.com/u/45513418?v=4"></img>
        </div>
    )
}

export default AutorComponent;