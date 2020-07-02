import React, { Component } from "react";
import "./Header.css";
import Logo from "../../../img/logo.png"


export default class Header extends Component {
  
  render() {
    return (
      <div class=" container jumbotron bg-transparent">
        <h1 class="text-center" id="header">
          {" "}
          <img
            src={Logo}
            alt="Cinque Terre"
            width="130"
            height="110"
           
            
          />
        
          CHENGANTHANGAL TRUST{" "}
        </h1>
        
        <p class="text-center" id="sub_head">
          Love is unconditional
        </p>
      </div>
    );
  }
}
