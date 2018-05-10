import React from 'react'
// import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom';

import Header from '../components/header'
import SideBar from '../components/side-bar';
import './index.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div className="container">
      <Header company={data.site.siteMetadata.company} />
      <SideBar open={false} />
      {children()}
    </div>
  </div>
)

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        company
      }
    }
  }
`
