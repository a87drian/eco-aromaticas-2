import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

export const Item = (props) => {
    
    return (
      <div className="card" style={{ width: '18rem' }}>
          <Link to={{pathname: `/itemdetail/${props.id}`, state: {test: "test"}}}>
            <img src={props.image} className="card-img-top image" alt="..."/>
            <div className="overlay">
              <div className="text">Comprar</div>
            </div>
         </Link>
            <div className="card-body">
              <h5 className="card-title">{ props.name }</h5>
              <p className="card-text">{ props.category }</p>
              <p className="card-text">$ { props.price }</p>
              <p className="card-text">Stock: { props.stock }</p>
              
              {/* <a href="#" className="btn btn-primary">Añadir al carrito</a> */}
            </div>
            </div>

        
        
    )
}


