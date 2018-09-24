import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux'
import {fetchDataByCategory} from '../actions/navbuttons'

class Nav extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = { 
           
        }
    }


   render() {
   return(
    
    <Router>
        <div>
            <p>{this.props.page}</p>
            <button type="button" class="btn btn-primary" onClick={() =>this.props.dispatch(fetchDataByCategory('goods'))}>Goods</button>
            <button type="button" class="btn btn-primary" onClick={() =>this.props.dispatch(fetchDataByCategory('jobs'))}>Jobs</button>
            <button type="button" class="btn btn-primary" onClick={() =>this.props.dispatch(fetchDataByCategory('food'))}>Food</button>
        </div>
    </Router>

   )
   }
}

export default connect()(Nav)