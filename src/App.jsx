import React, { Component, PropTypes } from 'react';

export default class App extends Component{
    render() {
        return(
            <div>
                <header>Ecommerce</header>
                {this.props.children}
                <footer>&copy; 2019</footer>
            </div>
        );
    }
}

App.protoTypes = {
    children: PropTypes.object.isRequired
};
