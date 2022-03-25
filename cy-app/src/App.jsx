import React from "react";

import View from './components/viewDays/viewtransactions';
import Buy from './components/buy';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Home from './components/home';
import './App.css'

function App() {
  return (
    <div ClassName="App">

      <Navbar/> 
       <Home/> 
       <Buy/> 
       <View/>
       <Footer/>

    </div>
  )
}


export default App;


