import React, {useContext}from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import basket from "./cart.png"
import {CartContext} from "../Context/Context"



export const Header = () => {
   const [userSet, getUser,products, productsCount, addProduct, delProduct, getGrandTotal] = useContext(CartContext);

    return (
      

        <nav className={"navbar navbar-expand-lg navbar-dark bg-dark"}>
          <a className={"navbar-brand"} href="/">Eco Aromáticas</a>
         
          <Link to={'/login'}>
            <button type="button" className="btn btn-primary float-right">Log In</button>              
          </Link>
          <Link to={'/cart'}>
            <span className='cart'>
              <img src={basket} />
              <p>{productsCount()}</p>
            </span>
            </Link>
          
        </nav>
      
    )
}
