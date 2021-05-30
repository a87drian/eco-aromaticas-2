import React from 'react';
import { SearchButton } from '../SearchButton/SearchButton';
import './Header.css';
import { Link } from "react-router-dom";



export const Header = () => {

    return (
      <div class="container">

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">Eco Aromáticas</a>
          <SearchButton />
          <Link to={'/login'}>
            <button type="button" class="btn btn-primary">Log In</button>
           </Link>

        </nav>
      </div>
    )
}
