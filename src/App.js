import React, { Fragment } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import {Header} from "./components/Header/Header";
import {LoginButton} from "./components/LoginButton/LoginButton";
import {ItemList} from "./components/ItemList/ItemList";
import {AbmItem} from "./components/AbmItem/AbmItem"



function App() {
  return (
    <BrowserRouter>
    
      <Header></Header>
      <Switch>  
        <Route exact path="/" component={ItemList} />
        <Route path="/login" component={LoginButton} />
        <Route path="/abmitem" component={AbmItem} />

      
      </Switch>  

    </BrowserRouter>




  );
}

export default App;
