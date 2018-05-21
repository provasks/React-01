import React from 'react';
import LazyLoad from 'react-lazyload'
import Employee from '../components/employee'

const Test = () => (
  <div>
    <LazyLoad height={200}>
      {this.state.employees.map(function (employee) {
        return <Employee props={employee} key={employee.id} />
      })}
    </LazyLoad>
  </div>
);

export default Test