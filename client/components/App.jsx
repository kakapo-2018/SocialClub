import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';

import Header from './Header'
import Nav from './Nav'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            location: 'home'
        }
    }


render () {
    return(
        <div>
            <Header />
            <Nav page={this.state.location}/>
        </div>

    )
}
}
    export default App
