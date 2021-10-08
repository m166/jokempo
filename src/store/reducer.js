import { combineReducers } from 'redux'

import {
    PLAYER_CHANGED_PC,
    PLAYER_CHANGED_PLAYER,
    PLAYER_CHANGED_CLEAR,
} from "./actions"


export const initialState = {
    heroiPC: {},
    heroiPlayer: {},
}

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case PLAYER_CHANGED_CLEAR:
            return { ...state, ...initialState }            
        case PLAYER_CHANGED_PC:
            return { ...state, heroiPC: action.payload.heroiPC }
        case PLAYER_CHANGED_PLAYER:
            return { ...state, heroiPlayer: action.payload.heroiPlayer }        
        default:
            return state
    }

}

export default combineReducers({
    AppReducer
})