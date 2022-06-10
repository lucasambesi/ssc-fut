import { createStore} from 'redux'
import players from '../data/players.json'
import { types } from '../types/types'
const initialState = {
    players: players,
    search: players,
    white: [],
    black: [],
    external: [],
}

const reducerCoach = (state = initialState, action) => {
    switch(action.type){
        //TODO unir case TEAM_BLACK y TEAM_WHITE, manejar el team por parametro
        case types.TEAM_BLACK:
            let playersBlack = state.players.filter((p) => p.name !== action.payload.player.name)
            return {
                ...state,
                black: [ ...state.black, action.payload.player],
                players: playersBlack,
                search: playersBlack
            }
        case types.TEAM_WHITE:            
            let playersWhite = state.players.filter((p) => p.name !== action.payload.player.name)
            return {
                ...state,
                white: [ ...state.white, action.payload.player],
                players: playersWhite,
                search: playersWhite
            }
        case types.DELETE:
            const {team} = action.payload
            return {
                ...state,
                players: [ ...state.players, action.payload.player],
                search: [ ...state.players, action.payload.player],
                [team]: state[team].filter((p) => p.name !== action.payload.player.name)
            }
        case types.SEARCH:
            return {
                ...state,
                search: state.players.filter((p) => p.name.toLowerCase().includes(action.payload.player.toLowerCase())),
            }
        default:
            return state
    }
}

export default createStore(reducerCoach)