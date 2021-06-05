import React , { useState, useEffect} from 'react'

export const CartContext = React.createContext([])

export const CartContextProvider = props => {

    const [user, setUser] = useState([]);

    const userSet = (user) => {
        setUser(user);
        console.log(user);
    }
    const getUser =() => {
        return user
    }

    return (
        
        // <CartContext.Provider value={[products, productsCount, addProduct, delProduct, getGrandTotal]}>
            <CartContext.Provider value = {[setUser,getUser]}>
        
                {props.children}
            </CartContext.Provider>

    );

}
