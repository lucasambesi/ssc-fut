import React from 'react'
import { connect } from 'react-redux'

import { types } from '../../types/types'

export const Player = ({player, addTeamPlayer}) => {
  return (
        <article key={player.id} className='jugador'>
            <h3>{player.name}</h3>
            <img src={player.image} alt={player.name}/>
            <div>
                <button onClick={() => addTeamPlayer(player, types.TEAM_BLACK)}>Black</button>
                <button onClick={() => addTeamPlayer(player, types.TEAM_WHITE)}>White</button>
            </div>
        </article>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({

    addTeamPlayer(player, type){
        dispatch({
            type: type,
            payload: {
                player: player
            },
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Player)
