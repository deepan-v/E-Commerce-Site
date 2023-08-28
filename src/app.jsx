import { Component } from "react";
import Deepan from "./navbar";
import Shoppingcart from "./shoppingCart";
import Form from "./form.";
import Customers from "./eCommerce";
import Dashboard from "./dashboard";
import {Route,Switch} from "react-router"
import {BrowserRouter} from "react-router-dom"
import { Routes } from "react-router-dom";
import Nopage from "./no page found";


function App(){
   
     return   <BrowserRouter>
             <Deepan/>
            
                <Routes>   
            <Route path="/" exact Component={Form}/>
            <Route path="Dashboard" exact Component={Dashboard}/>
            <Route path="Customers" exact Component={Customers}/>
            <Route path="cart" exact Component={Shoppingcart}/>
            <Route path="*" exact Component={Nopage}/>

            </Routes>
            
             
        </BrowserRouter>
        
}

export default App