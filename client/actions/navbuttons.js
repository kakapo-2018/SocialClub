const request = require('superagent');

function receiveData(data) {
    console.log({data})
    return{
        type: 'RECEIVE_DATA_BY_CATEGORY',
        data: data
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