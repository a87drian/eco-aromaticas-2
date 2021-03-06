import React , { useState, useEffect} from 'react'

export const CartContext = React.createContext([])

export const CartContextProvider = props => {

    const [user, setUser] = useState('');
    const [products, setProducts] = useState([]);
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);
    
  
    function addProduct(id,product, price, quantity)  {
        if(products.length === 0) {

            setProducts([...products, {'nombre':product, 'quantity':quantity, 'price':price }]);
        }
        else  {
            const index = products.findIndex(p => p.nombre === product)
            if(index != -1) {
                const newProducts = products;
                const p = products[index];
                newProducts.splice(index,1);
                p.quantity += quantity;
                newProducts.push(p);
                setProducts(newProducts);

            }else {
                setProducts([...products, {'id':id,'nombre':product, 'quantity':quantity, 'price':price }]);

            }
        }
    };
    const productsCount = () => {
        return products.reduce((acc,p) => (acc += p.quantity), 0);
    };
    const delProduct = (id) => {
        products.splice(
            products.findIndex((p) => p.id === id), 1
         );
    }
    const getGrandTotal = () => {
        return products.reduce((acc, p) => (acc += p.price * p.quantity),0)
    }


    const userSet = (user) => {
        setUser(user);
        console.log(user);
    }

    

    return (
            <CartContext.Provider value = {[items, setItems,setUser,user, products, productsCount, addProduct, delProduct, getGrandTotal]}>
                {props.children}
            </CartContext.Provider>

    );
}
