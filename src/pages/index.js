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
    this.allEmployees = [];
    this.employees = [];
    this.state = {
      direction: 1,
      field: 'id',
      employees: []
    };
    this.loadEmployeeData();
  }
  updateState=(divElement)=>{
    if(divElement){
      this.setState({'employees': this.employees});
    }
  }
  loadEmployeeData = () => {
    this.allEmployees = util.getEmployees();
    this.employees = this.util.filter(this.allEmployees, "");
  }

  handleSortField = (event, index, field) => {
    this.setState({ field });
    util.sort(this.state.employees, field, this.state.direction);
  }
  handleSortDirection = (event, index, direction) => {
    this.setState({ direction });
    util.sort(this.state.employees, this.state.field, direction);
  }
  handleFilter = (e) => {
    let keycode = e.keyCode || evt.which;
    if (keycode == 13) { //if Enter button pressed
      this.employees = this.util.filter(this.allEmployees, e.target.value);
      this.updateState(true);
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
                <SelectField style={{ width: '100px', marginRight: '10px' }}
                  floatingLabelText="Sort field"
                  value={this.state.field}
                  onChange={this.handleSortField}>
                  <MenuItem value={'id'} primaryText="ID" />
                  <MenuItem value={'firstName'} primaryText="Name" />
                </SelectField>
                {/* sort direction */}
                <SelectField style={{width: '156px', marginRight: '10px' }}
                  floatingLabelText="Direction"
                  value={this.state.direction}
                  onChange={this.handleSortDirection}>
                  <MenuItem value={1} primaryText="Ascending" />
                  <MenuItem value={2} primaryText="Descending" />
                </SelectField>
              </div>
              <div className="col-sm-12 col-md-6">
                <TextField
                  hintText="1" onKeyUp={this.handleFilter}
                  floatingLabelText="Filter by Id or Name <Enter>"
                // floatingLabelFixed={true}
                />
                {/* <div>Records: {this.employees.length}</div> */}
              </div>
            </div>
            <div className="row gutter-10" ref={this.updateState}>
              {this.state.employees.map(function (employee) {
                return <Employee props={employee} key={employee.id} />
              })}

            </div>
          </div>
        </MuiThemeProvider>
      </main>
    );
  }
}

module.exports = HomePage;