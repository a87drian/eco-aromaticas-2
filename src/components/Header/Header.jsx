import React from 'react';
import { SearchButton } from '../SearchButton/SearchButton';
import './Header.css';
import { Link } from "react-router-dom";

export const Header = () => {

    return (
      <div className="container-fluid">

        <nav className={"navbar navbar-expand-lg navbar-dark bg-dark"}>
          <a className={"navbar-brand"} href="/">Eco Aromáticas</a>
          

          <SearchButton />
          <Link to={'/login'}>
            <div className="col-md-12 bg-light text-right">
              <button type="button" className="btn btn-primary float-right">Log In</button>
            </div>
            
           </Link>
          

        </nav>
      </div>
    )
}
