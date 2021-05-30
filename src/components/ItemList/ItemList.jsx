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
        <div class="container-fluid">
            <div className="row">
                <div className="col"></div>
                
                    {items ? ( 

                        items.map(element => (
                            
                           <Item                             
                            id={element.id}
                            nombre={element.nombre}
                            precio={element.precio}
                            categoria={element.categoria}
                            image={element.image}                            
                            />
                    
                        ))
                        
                    ) : 
                    
                    (
                        <div className="col">
                        <h2>Buscando Productos</h2>
                        <iframe frameBorder={0} scrolling="no" src="https://lottiefiles.com/iframe/63229-mini-tricube-spinner-1"></iframe>
                        </div>
                    )}
                    
                    

                <div className="col"></div>
            </div>
            
            
        </div>
    )
}
