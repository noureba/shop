const cart = (state = [], action)=>{
  switch(action.type){
  case 'ADD_TO_CART':{
    const exist = state.find((item)=> item.id === action.product.id)
    const newItems = state.find((item)=> item.id == action.product.id) 
    console.log(exist)
    if(!exist){
      return [...state, {...action.product, quantity: action.quantity}]
    }else{
      return [...newItems, {...exist, quantity: exist.quantity + action.quantity}]
    }
  }
  case 'REMOVE':
    return state 
  default:
    return state
  }
}

export default cart