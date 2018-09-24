

export function navbuttons(state = [], action) {
  switch (action.type) {
    case 'RECEIVE_DATA_BY_CATEGORY':
      console.log(action)
      return action.data;
    default:
      return state;
  }
}
