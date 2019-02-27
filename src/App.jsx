import React, { Component, PropTypes } from 'react';

import Header from './common/Header';

export default class App extends Component{
    render() {
        return(
            <div>
                <Header />
                {this.props.children}
                <footer>&copy; 2019</footer>
            </div>
        );
    }
}

App.protoTypes = {
    children: PropTypes.object.isRequired
};
