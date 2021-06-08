import React, {useContext}from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import basket from "./cart.png"
import {CartContext} from "../Context/Context"
import { SearchButton } from '../SearchButton/SearchButton';
import { getFirebase } from '../Firebase';



export const Header = () => {
    const [items, setItems, setUser,user, products, productsCount, addProduct, delProduct, getGrandTotal]
     = useContext(CartContext);
     
     const logout = async () => {
        console.log("logout")
        await getFirebase().auth().signOut().then(() => {
            setUser('')
        }
        );
    }


     const mouse = () => {
       console.log(user.email)
     }
    return (
      

        <nav className={"navbar navbar-expand-lg navbar-dark bg-dark"}>
        <Link to={'/'}>  
          <a className={"navbar-brand"} onMouseEnter={mouse} href="/">Eco Aromáticas</a>
        </Link>
         <SearchButton />
         {
         user.email ? (
            
              <button type="button" className="btn btn-primary float-right" onClick={logout}>{user.email} Log Out</button>              
            

         ) : (
                       
              <Link to={'/login'}>
                <button type="button" className="btn btn-primary float-right">Log In</button>              
              </Link>

         )}
          <Link to={'/cart'}>
            <span className='cart'>
              <img src={basket} />
              <p>{productsCount()}</p>
            </span>
            </Link>
          
        </nav>
      
    )
}
