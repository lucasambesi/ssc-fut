import { createStore} from 'redux'
import players from '../data/players.json'
import { types } from '../types/types'
const initialState = {
    players: players,
    white: [],
    black: [],
}

const reducerCoach = (state = initialState, action) => {
    switch(action.type){
        case types.TEAM_BLACK:
            return {
                ...state,
                black: [ ...state.black, action.payload.player],
                players: state.players.filter((p) => p.name !== action.payload.player.name)
            }
        case types.TEAM_WHITE:
            return {
                ...state,
                white: [ ...state.white, action.payload.player],
                players: state.players.filter((p) => p.name !== action.payload.player.name)
            }
        case types.DELETE:
            const {team} = action.payload
            return {
                ...state,
                players: [ ...state.players, action.payload.player],
                [team]: state[team].filter((p) => p.name !== action.payload.player.name)
            }
        default:
            return state
    }
}

export default createStore(reducerCoach)