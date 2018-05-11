import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom';

import Header from '../components/header'
import SideBar from '../components/side-bar';
import './index.scss'


class Layout extends Component {
  constructor({ children, data }) {
    super();
    this.children = children;
    this.data = data;
    this.state = {
      title: this.data.site.siteMetadata.title,
      open: false,
      company: this.data.site.siteMetadata.company
    }
  }
  onClick = (value) => {
    this.sideBar.handleToggle();
  }
  render() {
    return (
      <div>
        <Helmet
          title={this.state.company}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <div className="container">
          <Header props={this.state} handleToggle={this.onClick.bind(this, this.state.open)} />
          <SideBar props={this.state} ref={instance => { this.sideBar = instance; }}  />
          {this.children()}
        </div>
      </div>
    )
  }
}

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
