import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';

class Nav extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            goods: goods,
            services: services,
            food: food
        }
    }
    
   render() {
   return(
    <Router>
        <div>
            <button type="button" class="btn btn-primary">Goods</button>
            <button type="button" class="btn btn-primary">Services</button>
            <button type="button" class="btn btn-primary">Food</button>
        </div>
    </Router>

   )
   }
}

export default Nav