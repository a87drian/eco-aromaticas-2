import React, {useState, useEffect, useContext} from 'react'
import { getFirestore } from '../Firebase'
import {CartContext} from "../Context/Context"
import {ItemCount} from "../ItemCount/ItemCount"


export const ItemDetail = (props) => {
    //const [userSet, getUser] = useContext(CartContext);
     const [puserSet, getUser,roducts, productsCount, addProducts, delProduct, getGrandTotal] = useContext(CartContext);
    const [item,setItem] = useState(false);
    const [count, setCount] = useState(0);

    let id = props.match.params.id;
    
    useEffect(() => {
        const db = getFirestore();
        const fitem = db.collection("items").doc(id);

        fitem.get().then((doc)=>{
            if(doc.exists){
                const data = {id:doc.id,...doc.data()}
                setItem(data)
                console.log(item.id);
            

            }
        }).catch((error) => {
            console.log("Error =>" + error);
        })
    }, [])
    const giveMount = (c) => {
        setCount(c);

    }
    
    return (
     <div className="row justify-content-center ">
         <ItemCount
            func={giveMount}
            name={item.name}
            price={item.price}
            image={item.image}
            category={item.category}
            stock={item.stock}
            />

        <button className="btn  btn-primary" onClick={() => addProducts(item.name,count)}>Meter al carrito</button>
     </div>

            
    )
}

