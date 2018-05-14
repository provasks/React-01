
import React, { Component } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Employee extends Component {
    constructor({ props }) {
        super();
        this.state = props;
    }
    render() {
        return (
            <Card>
                <CardHeader
                    title="URL Avatar"
                    subtitle="Subtitle"
                    avatar={this.state.avatar} />
                <CardMedia overlay={<CardTitle title={this.state.firstName} subtitle="Overlay subtitle" />}>
                    <img src={this.state.avatar} alt="" />
                </CardMedia>
                <CardTitle title={this.state.firstName} subtitle="Card subtitle" />
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                    <FlatButton label="Action1" />
                    <FlatButton label="Action2" />
                </CardActions>
            </Card>

        );
    }
}
module.exports = Employee;
