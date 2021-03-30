import {combineReducers} from 'redux'
import detailReducer from './Detail/detailReducer'
import noReducer from './Info/noReducer'

const rootReducer = combineReducers({
    add : noReducer,
    pDetail : detailReducer,
})
export default rootReducer