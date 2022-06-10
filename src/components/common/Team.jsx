import React from 'react'
import { connect } from 'react-redux'

import { types } from '../../types/types'

import '../../styles/teams.scss'

const Team = ({team, players, deleteTeamPlayer}) => {
  return (
    <>
        {
            players[team].map((player) =>{
                return(
                    <article className={team} key={player.id}>
                        <div>
                            <img src={player.image} alt={player.name}/>
                            <button onClick={() => deleteTeamPlayer(player, types.DELETE, team)}>X</button>                            
                        </div>
                        <p>{player.name}</p>
                    </article>
                )
            })
        }
    </>
  )
}

const mapStateToProps = (state) => ({
    players: state
})

const mapDispatchToProps = (dispatch) => ({
    deleteTeamPlayer(player, type, team){
        dispatch({
            type: type,
            payload: {
                player: player,
                team: team
            },
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Team)