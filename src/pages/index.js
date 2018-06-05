import React, { Component } from 'react'
import Link from 'gatsby-link'
import fetch from 'isomorphic-fetch'

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import { MuiThemeProvider } from 'material-ui/styles';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';

import Employee from '../components/employee';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/styles.scss';



class HomePage extends Component {
  constructor() {
    super();
    this.lastFilterText = "";
    this.config = {
      pageSize: 6,            //Records per page
      direction: 1,           //1 for Ascending, 2 for Descending
      field: 'id',            //sort field
      filterText: "",
      currentPage: 1,
      pageCount: 0
    }
    this.state = {
      employees: []
    };
    this.detectScrollBottom(this);
  }

  

  componentWillMount() {
    this.loadEmployeeData(this);
  }

  appendEmployees = (employees) => {
    if (employees && employees.length) {
      this.setState({ 'employees': [...this.state.employees, ...employees] });
    }
    else {
      this.setState({ 'employees': this.state.employees });
    }
  }

  detectScrollBottom = (self) => {
    window.addEventListener('scroll', function (e) {
      if (window.innerHeight + (window.scrollY || window.pageYOffset || document.documentElement.scrollTop) >= this.document.body.offsetHeight) {
        self.viewMore();
      }
    })
  }

  loadEmployeeData = (self) => {
    let esc = encodeURIComponent
    let url = `http://localhost:3000/employees/${this.config.currentPage}/${this.config.pageSize}/${esc(this.config.field)}/${this.config.direction}/${esc(this.config.filterText)}`

    fetch(url)
      .then(data => data.text())
      .then((resp) => {
        resp = JSON.parse(resp).response;
        self.config.pageCount = resp.pageCount;
        self.appendEmployees(resp.employees);
      }).catch(function (error) {
        let msg = `${error.message}\nPlease check the Backend server`
        throw new Error(msg)
      })
  }

  handleSortField = (event, index, field) => {
    this.state.employees = [];
    this.config.currentPage = 1;
    this.config.field = field;
    this.loadEmployeeData(this);
  }

  handleSortDirection = (event, index, direction) => {
    this.state.employees = [];
    this.config.currentPage = 1;
    this.config.direction = direction;
    this.loadEmployeeData(this);
  }

  handleFilter = (e) => {
    let keycode = e.keyCode || evt.which;
    if (keycode == 13 && (this.lastFilterText !== e.target.value)) { //if text changed
      this.state.employees = [];
      this.config.currentPage = 1;
      this.config.filterText = e.target.value;
      this.loadEmployeeData(this);
      this.lastFilterText = e.target.value;
    }
  }

  viewMore = () => {
    if (this.config.currentPage < this.config.pageCount) {
      this.config.currentPage++;
      this.loadEmployeeData(this);
    }
  }
  render() {
    return (
      <main className="page">
        {/* <h1>Home Page</h1> */}

        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <div id="home">
            <div className="row">
              {/* sort field */}
              <div className="col-sm-12 col-md-6">
                <SelectField
                  style={{ width: '100px', marginRight: '10px' }}
                  floatingLabelStyle={{ color: 'rgb(48, 48, 48)' }}
                  floatingLabelText="Sort field"
                  value={this.config.field}
                  onChange={this.handleSortField}>
                  <MenuItem value={'id'} primaryText="ID" />
                  <MenuItem value={'firstName'} primaryText="Name" />
                </SelectField>
                {/* sort direction */}
                <SelectField
                  style={{ width: '156px', marginRight: '10px' }}
                  floatingLabelStyle={{ color: 'rgb(48, 48, 48)' }}
                  floatingLabelText="Direction"
                  value={this.config.direction}
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
            <div className="row">
              {this.state.employees.length == 0 && (
                <div className="messege">No employees found.</div>
              )}
              {this.config.pageCount != 0 && (this.config.pageCount == this.config.currentPage) && (
                <div className="messege">No more employees found.</div>
              )}
            </div>
          </div>
        </MuiThemeProvider>
      </main>
    );
  }
}

module.exports = HomePage;