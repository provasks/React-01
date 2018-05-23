import React, { Component } from 'react'
import Link from 'gatsby-link'

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import { MuiThemeProvider } from 'material-ui/styles';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';

import Employee from '../components/employee';
import utility from '../helper/util';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/styles.scss';


class HomePage extends Component {
  constructor() {
    super();
    const config = {
      total: 100,           //Total numbers of Employee
      pageSize: 6        //Records per page
      // currentPage: 1
    }
    this.util = new utility(config);
    this.oldFilterText = "";
    // this.employees = [];

    this.state = {
      direction: 1,
      field: 'id',
      employees: [],
      filterText: "",
      currentPage: 0,
      pageCount: 1
    };
    this.detectScrollBottom(this);
  }

  componentWillMount() {
    this.loadEmployeeData(this.state);
  }

  appendEmployees = (employees) => {
    if (employees && employees.length) {
      this.setState({ 'employees': [...this.state.employees, ...employees] });
    }
  }

  detectScrollBottom = (self) => {
    window.addEventListener('scroll', function (e) {
      if (window.innerHeight + this.window.scrollY >= this.document.body.offsetHeight) {
        self.viewMore();
        // console.log(window.innerHeight + this.window.scrollY, this.document.body.offsetHeight)
      }
    })
  }

  loadEmployeeData = () => {
    this.appendEmployees(this.util.getEmployeesData(this.state))
  }

  handleSortField = (event, index, field) => {
    this.state.employees = [];
    this.state.currentPage = 0;
    this.setState({ field: field }, this.loadEmployeeData);
  }

  handleSortDirection = (event, index, direction) => {
    this.state.employees = [];
    this.state.currentPage = 0;
    this.setState({ direction: direction }, this.loadEmployeeData)
  }

  handleFilter = (e) => {
    let keycode = e.keyCode || evt.which;
    if (keycode == 13 && (this.oldFilterText !== e.target.value)) { //if text changed
      this.state.employees = [];
      this.state.currentPage = 0;
      this.setState({ filterText: e.target.value }, this.loadEmployeeData);
      this.oldFilterText = e.target.value;
    }
  }

  viewMore = () => {
    if (this.state.currentPage < this.state.pageCount) {
      this.appendEmployees(this.util.getMore(this.state));
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
              <div className="col-sm-12 col-md-6">
                <SelectField
                  style={{ width: '100px', marginRight: '10px' }}
                  floatingLabelStyle={{ color: 'rgb(48, 48, 48)' }}
                  floatingLabelText="Sort field"
                  value={this.state.field}
                  onChange={this.handleSortField}>
                  <MenuItem value={'id'} primaryText="ID" />
                  <MenuItem value={'firstName'} primaryText="Name" />
                </SelectField>
                {/* sort direction */}
                <SelectField
                  style={{ width: '156px', marginRight: '10px' }}
                  floatingLabelStyle={{ color: 'rgb(48, 48, 48)' }}
                  floatingLabelText="Direction"
                  value={this.state.direction}
                  onChange={this.handleSortDirection}>
                  <MenuItem value={1} primaryText="Ascending" />
                  <MenuItem value={2} primaryText="Descending" />
                </SelectField>
              </div>
              <div className="col-sm-12 col-md-6">
                <TextField
                  floatingLabelStyle={{ color: 'rgb(48, 48, 48)' }}
                  hintText="1" onKeyUp={this.handleFilter}
                  floatingLabelText="Filter by Id or Name <Enter>"
                // floatingLabelFixed={true}
                ></TextField>
              </div>
            </div>
            <div className="row gutter-10" ref={this.appendEmployees}>
              {this.state.employees.map(function (employee) {
                return <Employee props={employee} key={employee.id} />
              })}
            </div>
            {/* <button onClick={this.showMore} style={{ float: 'right' }}>More</button> */}
          </div>
        </MuiThemeProvider>
      </main>
    );
  }
}

module.exports = HomePage;