import React from "react";
import { Link } from "react-router-dom";

let NavBar=()=>{
  return(
    <>
    <nav className="navbar navbar-dark bg-dark navbar-expand-sm ">
       <div className="container">
        <Link to={'/'} className="navbar-brand">
        <i className="fa fa-mobile text-danger"/> contact <span className="text-danger">manager</span>
        </Link>
        
       </div>
    </nav>
    </>
  )
}
export default NavBar;