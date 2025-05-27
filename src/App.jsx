import React from "react";
import "./App.css";
import Navbar from "./navbar/Nav";
import Home from "./HOME/Home"; 
import Men from "./HOME/Men";
import Women from "./HOME/Women";
import Kid from "./HOME/Kid";
import Beauty from "./HOME/Beauty";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Products from "./Products/Products";

import Login from "./log/login";
import Cart from "./log/cart";

import Mens from "./HOME/Mens";
import Men2 from "./HOME/men2"

import Footer from "./log/Footer";

import Levis from "./HOME/Levis";
import Levis1 from "./HOME/Levis1";

import Puma from "./HOME/Puma";
import Puma1 from "./HOME/Puma1";

import Crocs from "./HOME/Crocs";
import Crocs1 from "./HOME/Crocs1";

import Tomy from "./HOME/Tomy";
import Tomy1 from "./HOME/Tomy1";

import Sketcher from "./HOME/Sketcher";
import Sketcher1 from "./HOME/Sketcher1";

import Nike from "./HOME/Nike";
import Nike1 from "./HOME/Nike1";

import Ufc from "./HOME/Ufc";
import Ufc1 from "./HOME/Ufc1";

import Kurti from "./HOME/Kurti";
import Kurti1 from "./HOME/Kurti1";

import Tops from "./HOME/Tops";
import Tops1 from "./HOME/Tops1";

import Dress from "./HOME/Dress";
import Dress1 from "./HOME/Dress1";

import Sarees from "./HOME/Sarees";
import Sarees1 from "./HOME/Sarees1";



import ProtectedRoute from "./log/protect";  
import AddtoCart from "./log/Add";
import TShirt from "./HOME/Tshirt.jsx/TShirt";
import Shirt from "./HOME/Shirts/Shirt";
import Profile from "./log/Profile";
import Tshirt1 from "./HOME/Tshirt.jsx/Tshirt1";
import Checkout from "./log/Checkout";
import Sports1 from "./HOME/Sports/Sports1";
import SportsShoe from "./HOME/Sports/Sports";
import Shirt1 from "./HOME/Shirts/Shirt1";
import Jean from "./HOME/Jeans/Jean";
import Jean1 from "./HOME/Jeans/Jean1";
import Kurtas from "./HOME/Kurtas/Kurtas";
import Kurtas1 from "./HOME/Kurtas/Kurtas1";

const App = () => {
 const isAuthenticated = !!localStorage.getItem("user");
  return ( 
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/dash" element={ <ProtectedRoute isAuthenticated={isAuthenticated}><Home /></ProtectedRoute> } />
          <Route path="/" element={<Home/>}/>
          <Route path="/Home" element={<Home />} /> 
          <Route path="/Men" element={<Men></Men>}></Route> 
          <Route path="/Women" element={<Women />}></Route>
          <Route path="/Kid" element={<Kid></Kid>} />
          <Route path="Beauty" element={<Beauty />} />
          <Route path="/Products" element={<Products/>} />
          <Route path="/Products/:id" element={<Cart/>} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/men/:id" element={<Men2 />} />
          <Route path="/levis" element={<Levis/>}/>
          <Route path="/levis/:id" element={<Levis1 />} />
          <Route path="/puma" element={<Puma/>}/>
          <Route path="/puma/:id" element={<Puma1/>}/>
          <Route path="/crocs" element={<Crocs/>}/>
          <Route path="/crocs/:id" element={<Crocs1/>}/>
          <Route path="/tomy" element={<Tomy/>}/>
          <Route path="/tomy/:id" element={<Tomy1/>}/>
          <Route path="/sketcher" element={<Sketcher/>}/>
          <Route path="/sketcher/:id" element={<Sketcher1/>}/>
          <Route path="nike" element={<Nike/>}/>
          <Route path="/nike/:id" element={<Nike1/>}/>
          <Route path="/ufc" element={<Ufc/>}/>
          <Route path="/ufc/:id" element={<Ufc1/>}/>

          <Route path="/kurti" element={<Kurti/>}/>
          <Route path="/kurti/:id" element={<Kurti1/>}/>

          <Route path="tops" element={<Tops/>}/> 
          <Route path="/tops/:id" element={<Tops1/>}/>

          <Route path="dress" element={<Dress/>}/> 
          <Route path="/dress/:id" element={<Dress1/>}/>

          <Route path="sarees" element={<Sarees/>}/>
          <Route path="/sarees/:id" element={<Sarees1/>}/>

           <Route path="/tshirt" element={<TShirt/>}/>
            <Route path="/tshirt/:id" element={<Tshirt1/>}/>

           <Route path="/shoe" element={<SportsShoe/>}/>
           <Route path="/shoe/:id" element={<Sports1/>}/>

           <Route path="/shirt" element={<Shirt/>}/>
            <Route path="/shirt/:id" element={<Shirt1/>}/>


           <Route path="/jean" element={<Jean/>}/>
            <Route path="/jean/:id" element={<Jean1/>}/>

            <Route path="/kurtas" element={<Kurtas/>}/>
             <Route path="/kurtas/:id" element={<Kurtas1/>}/>
            
          

          <Route path="/Login" element={<Login/>} />

          <Route path="/AddtoCart" element={<AddtoCart/>}/>
          <Route path="/Profile" element={<Profile/>}/>

          <Route path="/checkout" element={<Checkout/>}/>

          <Route path="/Footer" element={<Footer/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
