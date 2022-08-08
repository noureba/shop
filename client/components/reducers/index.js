import cart from './cart'
import mode from './mode'
import mobileMenu from './mobileMenu'
import user from './user'
import {combineReducers} from 'redux'

const reducers = combineReducers({
  cart,
  mode,
  mobileMenu,
  user
})

export default reducers