import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Header from "./components/Header";
import Search from "./components/Search";
import EmployeeCard from "./components/EmployeeCard";
import employees from "./employees.json";

class App extends Component {
  state = {
    employees
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


  render() {
    return (
      <Wrapper>
        <Title>Employee List</Title>
        <Search />

        <button onClick={this.sortName}>Sort Name</button>

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
