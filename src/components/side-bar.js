import React from 'react'
import Link from 'gatsby-link'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';


export default class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    handleToggle = () => this.setState({ open: !this.state.open });
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <div>
                    <RaisedButton label="Toggle Drawer" onClick={this.handleToggle}/>
                    <Drawer open={this.state.open} >
                        <Link to="/">
                            <MenuItem onClick={this.handleToggle}>Home</MenuItem>
                        </Link>
                        <Link to="/about-us">
                            <MenuItem onClick={this.handleToggle}>About us</MenuItem>
                        </Link>
                    </Drawer>
                </div>
            </MuiThemeProvider>
        );
    }
}