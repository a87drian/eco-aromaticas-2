import React from 'react'

export const Item = (props) => {
    console.log('hola' + props)
    return (
        
        <div class="card">
          <img src={props.image} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">{props.nombre}</h5>
            <p class="card-text">{props.precio}</p>
            <p class="card-text">{props.stock}</p>
            <p class="card-text">{props.precio}</p>
            <a href="#" class="btn btn-primary">Añadir al carrito</a>
          </div>
        </div>
        
    )
}


