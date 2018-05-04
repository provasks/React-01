import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import logo from '../images/logo.png';

const Header = ({ project }) => (
  <div>
    <img src={logo} alt="Sapient Logo" />
    {/* <div>{project}</div> */}
  </div>
)
export default Header
