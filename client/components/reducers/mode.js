
const mode = (state = false , action) => {

  switch(action.type){
  case 'DARK':
    return true
  case 'LIGHT':
    return false
  default:
    return state
  }
}

export default mode