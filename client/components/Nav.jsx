import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';
// import {postsCategory} from '../../server/db/db'

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
            <button type="button" class="btn btn-primary">Goods</button>
            <button type="button" class="btn btn-primary">Jobs</button>
            <button type="button" class="btn btn-primary">Food</button>
        </div>
    </Router>

   )
   }
}

export default Nav