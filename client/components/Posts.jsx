import React from 'react'
import {connect} from 'react-redux'

function Posts(props) {
    return(
        <ul>
            {props.navbuttons.map(item => {
                return (<li>
                        {item.title}
                        </li>)
            })}
        </ul>
    )
}

function mapStateToProps(state) {
    return {
        navbuttons: state.navbuttons
    }
}

export default connect(mapStateToProps)(Posts)
