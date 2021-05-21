import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
// import Header from "./components/Header";
import Search from "./components/Search/search";
import EmployeeCard from "./components/EmployeeCard";
import employees from "./employees.json";

class App extends Component {
  state = {
    employees,
    searchName: ""
  };

  removeEmployee = id => {
    const employees = this.state.employees.filter(employee => employee.id !== id);
    this.setState({ employees });
  };

   compare = (a, b) => {
    //  console.log("compare", a);
    // Use toUpperCase() to ignore character casing
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
  
    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  }

  sortName = () => {
      // console.log("Click!", this.state.employees);
      let newstate = this.state.employees.sort(this.compare);
      this.setState({employees: newstate})

  };

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log("value:::", value);

    this.setState({
      [name]: value
    });
    let newstate = this.state.employees.sort(this.compare);
    this.setState({employees: newstate})
    console.log(newstate);
    //????filter through this.state.employees (name) with the value
    //????return only if match
    //setState employee
  };


  render() {
    return (
      <Wrapper>
        <Title>Employee List</Title>
        <Search handleInputChange={this.handleInputChange}/>
        <div className="row border">
        <div className="col-2">
            <strong>Pic</strong>
        </div>
        <div className="col-2">
            <strong><button onClick={this.sortName}>Name</button></strong>
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

        {this.state.employees.map(employee => (
          <EmployeeCard
            removeEmployee={this.removeEmployee}
            id={employee.id}
            key={employee.id}
            name={employee.name}
            image={employee.image}
            number={employee.number}
            email={employee.email}
            dob={employee.dob}
          />
        ))}

      </Wrapper>
    );
  }
}

export default App;
