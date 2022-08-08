export const dark = ()=> {
  return {
    type:"DARK"
  }
}
export const light = ()=> {
  return {
    type:"LIGHT"
  }
}

export const openMobileMenu = ()=>{
  return {
    type:"OPEN"
  }
}

export const closeMobileMenu = ()=>{
  return {
    type:"CLOSE"
  }
}

export const addToCart =(product, quantity)=>{
  return {
    type:"ADD_TO_CART",
    product: product,
    quantity:quantity
  }
}

export const user = (userInfo)=>{
  return {
    type:"USER",
    data: userInfo
  }
}