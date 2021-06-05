import React, { Fragment } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import {Header} from "./components/Header/Header";
import {LoginButton} from "./components/LoginButton/LoginButton";
import {ItemList} from "./components/ItemList/ItemList";
import {AbmItem} from "./components/AbmItem/AbmItem"
import {ItemDetail} from "./components/ItemDetail/ItemDetail"
import { CartContextProvider } from "./components/Context/Context";



function App() {
  return (
    
    <CartContextProvider>

    <BrowserRouter>
    
      <Header></Header>
      <Switch>  
        <Route exact path="/" component={ItemList} />
        <Route path="/login" component={LoginButton} />
        <Route path="/abmitem" component={AbmItem} />
        <Route path="/itemdetail/:id" component={ItemDetail} />

      
      </Switch>  

    </BrowserRouter>
    
    </CartContextProvider>




  );
}

export default App;
