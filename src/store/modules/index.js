import { combineReducers } from 'redux'
import selectData from './selectData'
import resultData from './resultData'

export default combineReducers({
    selectData,
    resultData
});