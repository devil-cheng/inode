import { combineReducers } from 'redux'
import list from './list'
import details from './details'
import user from './user'

export default combineReducers({
    list,
    details,
    user
})
