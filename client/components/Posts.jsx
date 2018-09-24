import React from 'react'
import {connect} from 'react-redux'
import {fetchPostById} from '../actions/navbuttons'

function Posts(props) {
    return(
        <ul>
            {props.navbuttons.posts.map(item => {
                return (<li>
                        <a href='#' onClick={()=> props.dispatch(fetchPostById(item.id))}>{item.title}</a>
                        </li>)
            })}
            {props.navbuttons.currentPost && (
                <div>
                    <h2>Title: {props.navbuttons.currentPost.title}</h2>
                    <p>Details: {props.navbuttons.currentPost.content}</p>
                    <p>Date created: {props.navbuttons.currentPost.created}</p>
                    <p>Expiry: {props.navbuttons.currentPost.expiry}</p>          
                 </div>
            )}
        </ul>
    )
}

function mapStateToProps(state) {
    return {
        navbuttons: state.navbuttons
    }
}

export default connect(mapStateToProps)(Posts)
