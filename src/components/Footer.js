import React from "react";
import "./App.css";

function Footer(){
    var currentYear=new Date().getFullYear();
    return <div className="footer"><p>copyright © {currentYear} </p> </div>
}

export default Footer;