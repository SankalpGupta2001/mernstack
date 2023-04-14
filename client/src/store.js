import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  productListReducer,
} from './reducers/productReducers'
import { userLoginReducer,userRegisterReducer } from './reducers/userReducers'
const reducer = combineReducers({
  productList: productListReducer,
  userLogin: userLoginReducer,
  userRegister:userRegisterReducer,
  userUpdateProfile:  userUpdateProfileReducer,
});

const middleware = [thunk]
const userInfoFromStorage = localStorage.getItem('userinfo')
  ? JSON.parse(localStorage.getItem('userinfo'))
  : null
  
const initialState = {
    userLogin:{
      userinfo:userInfoFromStorage
    }
  }
  
const store = createStore(
  reducer,initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
