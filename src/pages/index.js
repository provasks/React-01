import React, { Component } from 'react'
import Link from 'gatsby-link'

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import { MuiThemeProvider } from 'material-ui/styles';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import Employee from '../components/employee';
import util from '../helper/util'


class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      direction: 1,
      field: 'id'
    };
  }
  employees = util.getEmployees();
  sort = (field, direction) => {
    this.employees.sort(function (a, b) {
      let x = a[field];
      let y = b[field];
      return (direction == 1) ?
        (x < y ? -1 : x > y ? 1 : 0) :
        (x < y ? 1 : x > y ? -1 : 0)
    });
    util.jerk();
  }
  handleSortField = (event, index, field) => {
    this.setState({ field });
    this.sort(field, this.state.direction);
  }
  handleSortDirection = (event, index, direction) => {
    this.setState({ direction });
    this.sort(this.state.field, direction);
  }

  render() {
    return (
      <main className="page">
        {/* <h1>Home Page</h1> */}

        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <div >
            {/* sort field */}
            <SelectField style={{ width: '180px' }}
              floatingLabelText="Sort field"
              value={this.state.field}
              onChange={this.handleSortField}>
              <MenuItem value={'id'} primaryText="ID" />
              <MenuItem value={'firstName'} primaryText="Name" />
            </SelectField>
            {/* sort direction */}
            <SelectField style={{ width: '180px' }}
              floatingLabelText="Direction"
              value={this.state.direction}
              onChange={this.handleSortDirection}>
              <MenuItem value={1} primaryText="Ascending" />
              <MenuItem value={2} primaryText="Descending" />
            </SelectField>
            {this.employees.map(function (employee) {
              return <Employee props={employee} key={employee.id} />;
            })}
          </div>
        </MuiThemeProvider>
      </main>
    );
  }
}

module.exports = HomePage;
