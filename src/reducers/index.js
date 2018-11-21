import { combineReducers } from 'redux'
import cards from './cards'
import viewer from './viewer'

export default combineReducers({
    cards,
    viewer
})
