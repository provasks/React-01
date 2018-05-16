
import React, { Component } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
// import LazyLoad from 'react-lazy-load';
import LazyLoad from 'react-lazyload';

class Employee extends Component {
    constructor({ props }) {
        super();
        this.state = props;
    }
    render() {
        return (
            <LazyLoad height={250} >
                <Card style={{ marginBottom: '5px' }}>
                    <CardHeader
                        title={this.state.firstName}
                        subtitle={`ID: ${this.state.id}`}
                        avatar={this.state.avatar} />
                    <CardMedia overlay={<CardTitle title={`${this.state.firstName} ${this.state.lastName}`} subtitle={this.state.email} />}>
                        <img src={this.state.avatar} alt={`${this.state.firstName} ${this.state.lastName}`} />
                    </CardMedia>
                    <CardTitle title={this.state.firstName} subtitle={`T: ${this.state.phone}`} />
                    <CardText>
                        {this.state.description}
                    </CardText>
                    {/* <CardActions>
                        <FlatButton label="Action1" />
                        <FlatButton label="Action2" />
                    </CardActions> */}
                </Card>
            </LazyLoad>
        );
    }
}
module.exports = Employee;
