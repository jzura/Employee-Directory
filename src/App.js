import React from 'react';
import Col from './components/Col';
import Container from './components/Container';
import EmployeeTable from './components/EmployeeTable';
import Footer from './components/Footer';
import Header from './components/Header';
import Row from './components/Row';
import SearchForm from './components/SearchForm';
import employees from './utils/employees.json';   //Employee Data


// Main App Function

class App extends React.Component {

  state = {
    employees,
    searchedName: "",
  };

  // Function to compare two strings
  compareTwoStrings(string1, string2) {
    if (string1 === string2) {
      return 0;
    }
    else if (string1 < string2) {
      return -1;
    }
    else {
      return 1;
    }
  }

 // Function will sort employees based on which column is selected
  handleEmployeeSort = event => {
    event.preventDefault();
    const employeesToSort = this.state.employees;
    let compareFunction;
    const sortCriteria = event.target.innerText;
    switch (sortCriteria) {
      case "Name":
        compareFunction = (e1, e2) => this.compareTwoStrings(e1.name, e2.name);
        break;
      case "Department":
        compareFunction = (e1, e2) => this.compareTwoStrings(e1.department, e2.department);
        break;
      case "Email ID":
        compareFunction = (e1, e2) => this.compareTwoStrings(e1.email, e2.email);
        break;
      case "Employee ID":
        compareFunction = (e1, e2) => (parseInt(e1.id) - parseInt(e2.id));
        break;
      default:
        console.log("Not Supported");
    }
    employeesToSort.sort(compareFunction);
    this.setState({ employees: employeesToSort });
  }

  // handler to handle the search box input change
  handleInputChange = event => {
    this.setState({ searchedName: event.target.value });
  };

  // handlers the data returned based of what employee is search for 
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.searchedName && this.state.searchedName.trim().length) {
      const filteredEmployee = employees
        .filter(employee => employee.name.includes(this.state.searchedName));
      this.setState({ employees: filteredEmployee });
    }
    else {
      this.setState({ employees: employees });
    }
  };

  render() {
    return (<div>
      <Header />
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <SearchForm
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
              employees={employees.map(employee => { return { name: employee.name, id: employee.id } })}
            />
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <EmployeeTable
              employees={this.state.employees}
              handleEmployeeSort={this.handleEmployeeSort}
              colNames={Object.keys(employees[0])}
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>);
  }
}

export default App;

