const request = require('superagent');

function receiveData(data) {
    console.log({data})
    return{
        type: 'RECEIVE_DATA_BY_CATEGORY',
        data: data
    }
}

function receivePost(post) {
    return{
        type: 'RECEIVE_POST_BY_ID',
        post: post
    }
}

export function fetchDataByCategory(category) {
    return dispatch => {
        return request 
    .get('/api/v1/'+category)
    .then(res => {
        dispatch(receiveData(res.body))
    })
}
}

export function fetchPostById(id) {
    return dispatch => {
        return request 
    .get('/api/v1/post/'+id)
    .then(res => {
        dispatch(receivePost(res.body))
    })
}
}