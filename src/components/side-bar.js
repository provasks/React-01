import React from 'react'
import Link from 'gatsby-link'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class SideBar extends React.Component {
    constructor({ props }) {
        super();
        this.state = props;
    }

    handleToggle = () => {
        // this.setState({temp:true})
        this.setState({ open: !this.state.open });
    }
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <Drawer open={this.state.open} >
                    <Link to="/">
                        <MenuItem onClick={this.handleToggle}>Home</MenuItem>
                    </Link>
                    <Link to="/about-us">
                        <MenuItem onClick={this.handleToggle}>About us</MenuItem>
                    </Link>
                </Drawer>
            </MuiThemeProvider>
        );
    }
}