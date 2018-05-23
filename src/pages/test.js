import React from 'react';
import LazyLoad from 'react-lazyload'
import Employee from '../components/employee';


const employees = [{ "id": 1, "firstName": "Monserrate", "lastName": "Waelchi", "phone": "(048) 993-0561 x4799", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/haruintesettden/128.jpg", "jobTitle": "Human Directives Director", "company": "Collins, Bailey and Halvorson", "email": "Monserrate.Waelchi61@gmail.com" }, { "id": 2, "firstName": "Allan", "lastName": "Corwin", "phone": "304-167-4012", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/shojberg/128.jpg", "jobTitle": "Corporate Division Associate", "company": "Considine - Lind", "email": "Allan.Corwin73@hotmail.com" }, { "id": 3, "firstName": "Don", "lastName": "Brekke", "phone": "774-048-7582 x666", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/oktayelipek/128.jpg", "jobTitle": "Product Program Analyst", "company": "Hermiston Inc", "email": "Don.Brekke56@yahoo.com" }, { "id": 4, "firstName": "Rahul", "lastName": "Pfeffer", "phone": "211-754-7171 x06595", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/petrangr/128.jpg", "jobTitle": "Corporate Group Administrator", "company": "Prohaska Inc", "email": "Rahul_Pfeffer@gmail.com" }, { "id": 5, "firstName": "Ford", "lastName": "Rolfson", "phone": "736-593-9753", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/begreative/128.jpg", "jobTitle": "Legacy Marketing Supervisor", "company": "Larkin - Jacobson", "email": "Ford_Rolfson99@hotmail.com" }]
const Test = () => (
  <div>
    {employees.map(function (employee) {
      return <LazyLoad height={200}>
        <Employee props={employee} key={employee.id} />
      </LazyLoad>
    })}
  </div>
);

export default Test