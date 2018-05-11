
import React, { Component } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

class Header extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <AppBar title={this.props.props.company} onLeftIconButtonClick={this.props.handleToggle}>
          <div className="clear"></div>
        </AppBar>
      </MuiThemeProvider>
    );
  }
}
module.exports = Header;
