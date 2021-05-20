import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
      <div className="row border">
        <div className="col-2">
            <div className="img-container"><img alt={props.name} src={props.image} /></div>
        </div>
        <div className="col-2">
            {props.name}
        </div>
        <div className="col-2">
            {props.number}
        </div>
        <div className="col-2">
            {props.email}
        </div>
        <div className="col-2">
            {props.dob}
        </div>
        <div className="col-2">
            <span onClick={() => props.removeFriend(props.id)} className="remove">X</span>
        </div>
      </div>
  )
}

export default EmployeeCard;
