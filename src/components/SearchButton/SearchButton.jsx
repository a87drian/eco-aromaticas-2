import React, {useState,useEffect,useContext} from 'react';
import {CartContext} from "../Context/Context"
import './SearchButton.css'


export  const SearchButton = () => {
    const [items, setItems, setUser,getUser, products, productsCount, 
        addProduct, delProduct, getGrandTotal]
     = useContext(CartContext);

    const [filter, setFilter] = useState('')
    
    

    useEffect(() => {
        const oldItems = items;
        const filteredItems = Object.values(items).filter(items => items.name.toLowerCase().includes(filter.toLowerCase()))
        setItems(filteredItems)


    }, [filter])
    return (
                     
        <input value={[filter]} 
        className="form-control mr-sm-2 search" 
        onChange={(e) => setFilter(e.target.value)}
        type="search" 
        placeholder="Search" 
        aria-label="Search"
        />

                
            
        
    )
}

