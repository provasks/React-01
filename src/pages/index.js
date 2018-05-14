import React from 'react'
import Link from 'gatsby-link'
// import { Card } from 'material-ui/Card';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import { MuiThemeProvider } from 'material-ui/styles';
import Employee from '../components/employee';
import util from '../helper/util'

// console.log(util.getEmployees());
const HomePage = function () {
  let employees = util.getEmployees();
  console.log(employees);
  return (
    <main className="page">
      <h1>Home Page</h1>
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div style={{ width: '100%', margin: '0 auto' }}>
          {employees.map(function (employee) {
            return <Employee props={employee} key={employee.id}/>;
          })}
        </div>
      </MuiThemeProvider>
    </main>
  )
}

export default HomePage
