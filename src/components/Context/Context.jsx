import React , { useState, useEffect} from 'react'

export const CartContext = React.createContext([])

const CartContextProvider = props => {

    const [user, setUser] = useState([]);

    return (
        
        // <CartContext.Provider value={[products, productsCount, addProduct, delProduct, getGrandTotal]}>
            <CartContext.Provider>
        
                {props.children}
            </CartContext.Provider>

    );

}
