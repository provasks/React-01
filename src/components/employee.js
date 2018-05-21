import React, { Component } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
// import LazyLoad from 'react-lazyload';
import LazyLoad from 'react-image-lazy-load';
import '../styles/styles.scss';

class Employee extends Component {
    constructor({ props }) {
        super();
        this.state = props;
    }
    render() {
        return (
            // <LazyLoad height={250}>
            //     <Card className="col-sm-12 col-md-6 col-lg-4">
            //         <CardHeader style={{padding: '16px 0'}}
            //             title={`ID: ${this.state.id}`}
            //             subtitle={`Ph: ${this.state.phone}`}
            //             // avatar={this.state.avatar} 
            //             />
            //         <CardMedia overlay={<CardTitle title={`${this.state.firstName} ${this.state.lastName}`} subtitle={this.state.email} />}>
            //             <img src={this.state.avatar} alt={`${this.state.firstName} ${this.state.lastName}`} />
            //         </CardMedia>
            //         <CardTitle title={this.state.company} subtitle={this.state.jobTitle} titleStyle={{fontSize: '17px'}} />
            //     </Card>
            // </LazyLoad>
            <Card className="col-sm-12 col-md-6 col-lg-4">
                <CardHeader style={{ padding: '16px 0' }}
                    title={`ID: ${this.state.id}`}
                    subtitle={`Ph: ${this.state.phone}`}
                // avatar={this.state.avatar} 
                />
                <CardMedia overlay={<CardTitle title={`${this.state.firstName} ${this.state.lastName}`} subtitle={this.state.email} />}>
                    <LazyLoad loaderImage
                        originalSrc={this.state.avatar}
                        imageProps={{
                            src: require('../images/loading-animations-preloader.gif'),
                            alt: `${this.state.firstName} ${this.state.lastName}`,
                            // ref: "image",
                            className: 'placeholder-image'
                        }}
                    />
                </CardMedia>
                <CardTitle title={this.state.company} subtitle={this.state.jobTitle} titleStyle={{ fontSize: '17px' }} />
            </Card>
        );
    }
}
module.exports = Employee;
