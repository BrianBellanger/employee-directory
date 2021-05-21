import "./style.css";


import React from 'react'

export default function Search({handleInputChange}) {
  return (
    <div className="row border">
        <div className="col-12">
          <form className="form">
            <input
             // value={this.state.searchName}
              name="searchName"
              onChange={handleInputChange}
              type="text"
              placeholder="Search Name"
            />
            {/* <button onClick={this.handleFormSubmit}>Submit</button> */}
          </form>
        </div>
      </div>
  )
}

