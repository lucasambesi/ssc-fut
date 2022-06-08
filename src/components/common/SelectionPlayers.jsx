import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Searchbox from './Searchbox'
import { gridJugadores, setScrollContainer } from '../../helpers/ScrollContainer'
import Player from './Player'
 
const SelectionPlayers = ({ search }) => {  

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
                { search.map( player => <Player player={player} />) }
            </div>
        </div>
    </section>
  )
}

const mapStateToProps = (state) => ({
    search: state.search
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(SelectionPlayers)