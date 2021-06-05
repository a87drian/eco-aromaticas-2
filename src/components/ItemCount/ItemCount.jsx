import React, { useState, useEffect } from "react"; //importo useeffect también

export const ItemCount = (props) => {
  const [contador, setContador] = useState(0);

  //Esto es lo que va a pasar cada vez que cambie el valor de contador
  useEffect(() => {
      console.log(props.stock)
    if (contador < 0) {
      setContador(0);
    } else {
      if (contador > props.stock) {
        setContador(Number(props.stock));
      }
    }
    props.func(contador);
  }, [contador]);

  return (
        <div className="row justify-content-center">

            <div className="card "style={{ width: '18rem' }}>
                
                    <img src={props.image} className="card-img-top" alt="..."/>
                
                    <div className="card-body">
                    <h5 className="card-title">{ props.name }</h5>
                    <p className="card-text">{ props.category }</p>
                    <p className="card-text">$ { props.price }</p>
                    <p className="card-text">Stock: { props.stock }</p>
                    <button className="btn btn-secondary" onClick={() => setContador(contador - 1)}>-</button>
                    {contador}
                    <button className="btn btn-secondary" min={0} onClick={() => setContador(contador + 1)}>+</button>
                    

                    {/* <a href="#" className="btn btn-primary">Añadir al carrito</a> */}
                    
                    </div>
                </div>
        </div>  

  )

}


        /*
            <div>
      <hr />
      <h4>{props.name}</h4>
      <h4>Precio: {props.price}</h4>
      <button min={0} onClick={() => setContador(contador + 1)}>
        +
      </button>
      {contador}
      <button onClick={() => setContador(contador - 1)}>-</button>
    </div>
  ); */