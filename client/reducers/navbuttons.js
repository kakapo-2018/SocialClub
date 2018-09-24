

export function navbuttons(state = {posts:[], currentPost:{}}, action) {
  switch (action.type) {
    case 'RECEIVE_DATA_BY_CATEGORY':
      console.log(action)
      return {
        posts: action.data,
        currentPost: {...state.currentPost}
      }

      case 'RECEIVE_POST_BY_ID':
      console.log(action)
      return {
        posts: [...state.posts], 
        currentPost: action.post
      }
    default:
      return state;
  }
}
