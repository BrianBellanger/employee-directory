import React from "react";
import "./style.css";

function Header(props) {
  return (
    <div className="row border">{props.children}
        <div className="col-2">
            <strong>Pic</strong>
        </div>
        <div className="col-2">
            <strong>Name</strong>
        </div>
        <div className="col-2">
            <strong>Number</strong>
        </div>
        <div className="col-2">
            <strong>Email</strong>
        </div>
        <div className="col-2">
            <strong>DOB</strong>
        </div>
        <div className="col-2">
            <strong>Del</strong>
        </div>
    </div>
  )
}

export default Header;