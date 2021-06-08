import React, {useContext, useEffect, useState} from "react";
import { CartContext } from "../Context/Context";
import { getFirestore } from '../Firebase/'

export  function Cart() {
  
      const [items, setItems, setUser,user, products, productsCount, addProduct, delProduct, getGrandTotal]
     = useContext(CartContext);
  
  const [OrderId, setOrderId] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  
  const handleClick = (e) => {
    e.preventDefault()
    const db = getFirestore();
    const order = db.collection("order");
    const newOrder = {
      buyer: {
        name,
        email,
        phone
      },
      products
  
    };
    order.add(newOrder).then(({id}) => {
      setOrderId(id);
    } ).catch(err =>{
      console.log("error" + err);
    });
  } 

  useEffect(()=>{
    console.log(products)
  })

  return (
      <div className="container-fluid">

        <div className="row justify-content-center">
            <h1>
                Bienvenidos al Cart
            </h1>
        </div>
            
            {products.map((p) => (
              
                <div className="row justify-content-center">
                  <div className="row justify-content-center">
                    <h4>Item: {p.nombre}</h4>

                  </div>
                  <div className="row justify-content-center">
                    <h5>Cantidad: {p.quantity}</h5>

                  </div>

                </div> 
                
            ))
            }
        <div className="row justify-content-center">
                
            <form onSubmit={handleClick}>
                <div className="mb-3">
                    <label htmlFor="InputName" className="form-label">Nombre</label> 
                    <input  type="text" className="form-control" id="InputName" onBlur={(e) => setName(e.target.value)} />
                
                </div>       
                <div className="mb-3">
                    <label htmlFor="InputPhone" className="form-label">Telefono</label>
                    <input type="text" className="form-control" id="InputPhone"  onBlur={(e) => setPhone(e.target.value)}/>

                </div>
                <div className="mb-3">
                    <label htmlFor="InputEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" 
                    id="InputEmail" onBlur={(e) => setEmail(e.target.value)} 
                    value={user.email}
                    />

                </div>
                
                <button className="btn btn-warning">Comprar</button>
            </form>
        </div>
    </div>
  )


}
