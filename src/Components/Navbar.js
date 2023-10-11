import React from "react";


const Navbar=()=>{
    return(
        //keep same name of your component for 1st div
        <div className="navbar">
            <h1>Vidyashree Bankad</h1>
            <div className="menu">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Skills</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
                
            </div>
        </div>
    )
}
export default Navbar;