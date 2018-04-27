import { combineReducers } from 'redux'
import { CHANGE_APP_HEADER } from '../actions/index'

function appHeader(state = 'FuldaCity', action) {
    switch(action.type) {
    case 'CHANGE_APP_HEADER':
        return action.text
    default:
        return state;
    }
}

const reducers = combineReducers({
    appHeader
})

export default reducers;
