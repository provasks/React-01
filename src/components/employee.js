
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
            <LazyLoad height={250}>
                <Card className="col-sm-12 col-md-6 col-lg-4">
                    <CardHeader style={{padding: '16px 0'}}
                        title={`ID: ${this.state.id}`}
                        subtitle={`Ph: ${this.state.phone}`}
                        avatar={this.state.avatar} />
                    <CardMedia overlay={<CardTitle title={`${this.state.firstName} ${this.state.lastName}`} subtitle={this.state.email} />}>
                        <img src={this.state.avatar} alt={`${this.state.firstName} ${this.state.lastName}`} />
                    </CardMedia>
                    <CardTitle title={this.state.company} subtitle={this.state.jobTitle} titleStyle={{fontSize: '17px'}} />
                </Card>
            </LazyLoad>
        );
    }
}
module.exports = Employee;
