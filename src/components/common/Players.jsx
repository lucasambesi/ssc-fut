import React, {useEffect} from 'react'
import { connect } from 'react-redux'

import Searchbox from './Searchbox'
import { gridJugadores, setScrollContainer } from '../../helpers/ScrollContainer'

import { types } from '../../types/types'

const Players = ({search, addTeamPlayer}) => {  
    useEffect(() => {
      setScrollContainer()
      document.addEventListener('click', setScrollContainer)
    }, [])
  
  return (
    <section>
        <div className='contenedor-jugadores'>
            <Searchbox/>
            <br/><br/><br/>
            <div ref={gridJugadores} onClick={() => setScrollContainer.bind(this)}>
                {
                  search.map( player => {
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
    search: state.search
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