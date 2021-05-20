import React, { Component } from "react";
import "./style.css";


class Search extends Component {

  state = {
    searchName: ""
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({
      searchName: ""
    });
  };


  render() {
    return (
      <div className="row border">
        <div className="col-12">
          <form className="form">
            <input
              value={this.state.searchName}
              name="searchName"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Search Name"
            />
            <button onClick={this.handleFormSubmit}>Submit</button>
          </form>
        </div>
      </div>
    );
  }

}

export default Search;