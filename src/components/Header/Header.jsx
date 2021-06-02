import React from 'react';
import { SearchButton } from '../SearchButton/SearchButton';
import './Header.css';
import { Link } from "react-router-dom";

export const Header = () => {

    return (
      <div className="container">

        <nav className={"navbar navbar-expand-lg navbar-dark bg-dark"}>
          <a className={"navbar-brand"} href="/">Eco Aromáticas</a>
          <SearchButton />
          <Link to={'/login'}>
            <button type="button" className="btn btn-primary">Log In</button>
           </Link>

        </nav>
      </div>
    )
}
