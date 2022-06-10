import React from 'react'
import { connect } from 'react-redux'

import { types } from '../../types/types'

import Button from 'react-bootstrap/Button'
import '../../styles/player.scss'

export const Player = ({player, addTeamPlayer}) => {
  return (
        <article key={player.id} className='jugador'>
            <h3>{player.name}</h3>
            <img src={player.image} alt={player.name}/>
            <div>
                <Button variant="light" size="sm" onClick={() => addTeamPlayer(player, types.TEAM_WHITE)}>Blanco</Button>
                <Button variant="dark" size="sm" onClick={() => addTeamPlayer(player, types.TEAM_BLACK)}>Negro</Button>
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
