// const data = async() =>{
//     const res = await fetch("http://localhost:3001/login")
//     const data = await res.json()
//     return data
// }

const user = (state = [], action) => {
  switch (action.type) {
  case "USER":
    return state = [action.data] ;
  default:
    return state;
  }
};

export default user;
