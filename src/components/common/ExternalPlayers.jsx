import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { gridExternal, setScrollContainer } from '../../helpers/ScrollContainer'

import Player from './Player'

export const ExternalPlayer = ({external}) => {
    useEffect(() => {
        setScrollContainer(this, false)
        document.addEventListener('click', setScrollContainer)
      }, [])

    const addExternal = () => {}

  return (             
    <div className='contenedor-jugadores'>
        <button onClick={addExternal}>
            add
        </button>
        <div ref={gridExternal} onClick={() => setScrollContainer.bind(this, false)}>
            { external.map( player => <Player player={player} />) }
        </div>
    </div>   
  )
}

const mapStateToProps = (state) => ({
    external: state.players,
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ExternalPlayer)