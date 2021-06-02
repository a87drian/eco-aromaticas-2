import React, {useEffect, useState} from 'react'
import { getFirestore } from '../Firebase'
import { Item } from '../Item/Item'

export const ItemList = ()  => {

    const [items, setItems] = useState('');

    useEffect(() => {
        const db = getFirestore();
        const itemcollection = db.collection("items");
        itemcollection.get().then(
            (querySnapshot) => {
                
                const data = querySnapshot.docs.map(doc => ({id:doc.id, ...doc.data()}));
                setItems(data);
                console.log(data)
                console.log(items)
                
            }
        ) 

    }, [])

    return (
        <div className="row justify-content-center">

                
                    {items ? ( 

                        items.map(element => (

                           <Item                             
                            id={element.id}
                            name={element.name}
                            price={element.price}
                            category={element.category}
                            image={element.image}   
                            stock={element.stock}                   
                            />

                        ))
                        
                    ) : 
                    
                    (
  
                        <div>

                            <h2>Buscando Productos</h2>

                            <iframe frameBorder={0} scrolling="no" src="https://lottiefiles.com/iframe/63229-mini-tricube-spinner-1"></iframe>

                        </div>
                    )}
                    
                    

            </div>
            
            
        
    )
}
