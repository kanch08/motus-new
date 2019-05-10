import { combineReducers } from 'redux'
import Company from './Company'
import errorReducer from './errorReducer';
import Product from './Product'
import adminReducer from './adminReducer'

const rootReducer=combineReducers({
    errors:errorReducer,
    Company,
    Product,
    adminReducer,
    
})
export default rootReducer;