import React from 'react'
// import Link from 'gatsby-link'
import Logo from './logo';

const Header = ({ company }) => (
  <div className="header">
    <div className="logo">
      <Logo></Logo>
    </div>
    <div className="company">{company}</div>
  </div>
)
export default Header
