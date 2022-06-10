import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { gridInternal, setScrollContainer } from '../../helpers/ScrollContainer'

import Player from './Player'
import Searchbox from './Searchbox'

export const InternalPlayer = ({search}) => {
    useEffect(() => {
        setScrollContainer()
        document.addEventListener('click', setScrollContainer)
      }, [])

  return (        
    <div className='contenedor-jugadores'>
        <Searchbox/>
        <br/><br/><br/>
        <div ref={gridInternal} onClick={() => setScrollContainer.bind(this)}>
            { search.map( player => <Player player={player} />) }
        </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
    search: state.search,
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(InternalPlayer)