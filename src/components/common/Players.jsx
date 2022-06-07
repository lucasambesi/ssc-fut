import React, {useEffect} from 'react'
import { connect } from 'react-redux'

import { gridJugadores, setScrollContainer } from '../../helpers/ScrollContainer'
import { types } from '../../types/types'

import '../../styles/searchbar.scss'

const Players = ({players, addTeamPlayer}) => {  
    useEffect(() => {
      setScrollContainer()
      document.addEventListener('click', setScrollContainer)
    }) 
  
  return (
    <section>
        <div className='contenedor-jugadores'>
            <div className="search-box">
              <input type="text" />
              <span></span>
            </div>            
            <br/><br/><br/>
            <div ref={gridJugadores} onClick={() => setScrollContainer.bind(this)}>
                {
                  players.map( player => {
                      return(            
                      <article key={player.id} className='jugador'>
                          <h3>{player.name}</h3>
                          <img src={player.image} alt={player.name}/>
                          <div>
                              <button onClick={() => addTeamPlayer(player, types.TEAM_BLACK)}>Black</button>
                              <button onClick={() => addTeamPlayer(player, types.TEAM_WHITE)}>White</button>
                          </div>
                      </article>)
                  })
                }
            </div>
        </div>
    </section>
  )
}

const mapStateToProps = (state) => ({
    players: state.players
})

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

export default connect(mapStateToProps, mapDispatchToProps)(Players)