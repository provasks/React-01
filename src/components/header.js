
import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

const Header = () => ({
  render: function () {
    this.state = {open:false}
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <AppBar title="MyApp" onLeftIconButtonClick={this.handleClick}>
          <div className="clear"></div>
        </AppBar>
      </MuiThemeProvider>
    );
  },
  handleClick: function (event) {
    this.setState({ open: !this.state.open });
  }
});

module.exports = Header;

// const Header = ({company}) => (
//   <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
//     <AppBar title={company} showMenuIconButton={true} onMenuIconButtonTouchTap={ this.handleClick} />
//   </MuiThemeProvider>
// )
// export default Header