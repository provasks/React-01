import React, { Component } from 'react'
import Link from 'gatsby-link'

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import { MuiThemeProvider } from 'material-ui/styles';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';

import Employee from '../components/employee';
import util from '../helper/util';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/styles.scss';


class HomePage extends Component {
  constructor() {
    super();
    this.util = util;
    this.state = {
      direction: 1,
      field: 'id',
      employees: []
    };
  }
  employeeData = util.getEmployees();
  // employees = util.getEmployees();
  // debugger;
  employees = util.filter(this.employeeData, "");
  // filterEmployees = (text) => {
  //   return myArray.map(a => ({ ...a }));
  // }

  handleSortField = (event, index, field) => {
    this.setState({ field });
    util.sort(this.employees, field, this.state.direction);
  }
  handleSortDirection = (event, index, direction) => {
    this.setState({ direction });
    util.sort(this.employees, this.state.field, direction);
  }
  handleFilter = (e) => {
    let keycode = e.keyCode || evt.which;
    if (keycode == 13) { //if Enter button pressed
      // this.employees.length = 0;
      this.employees = this.util.filter(this.employeeData, e.target.value);
      // this.render();
    }
  }

  render() {
    return (
      <main className="page">
        {/* <h1>Home Page</h1> */}

        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <div id="provas">
            <div className="row">
              {/* sort field */}
              <SelectField style={{ width: '100px', marginRight: '10px' }}
                floatingLabelText="Sort field"
                value={this.state.field}
                onChange={this.handleSortField}>
                <MenuItem value={'id'} primaryText="ID" />
                <MenuItem value={'firstName'} primaryText="Name" />
              </SelectField>
              {/* sort direction */}
              <SelectField style={{ width: '140px', marginRight: '10px' }}
                floatingLabelText="Direction"
                value={this.state.direction}
                onChange={this.handleSortDirection}>
                <MenuItem value={1} primaryText="Ascending" />
                <MenuItem value={2} primaryText="Descending" />
              </SelectField>
              <TextField style={{ top: '-15px' }}
                hintText="1" onKeyUp={this.handleFilter}
                floatingLabelText="Filter by Id or Name <Enter>"
              // floatingLabelFixed={true}
              />
              <p>Records: {this.employees.length}</p>
            </div>
            <div className="row gutter-10">
              {this.employees.map(function (employee) {
                return <Employee props={employee} key={employee.id}  />
              })}

            </div>
          </div>
        </MuiThemeProvider>
      </main>
    );
  }
}

module.exports = HomePage;
