import React, {useState} from 'react'
import { connect } from 'react-redux'

import { types } from '../../types/types'

import '../../styles/searchbox.scss'

const Searchbox = ({players, searchPlayer}) => {
    const [search, setSearch] = useState('')

    const onChange = (e) => {
        let sp = e.target.value        
        setSearch(sp)      
        searchPlayer(players, sp, types.SEARCH)
    }

    return (
    <div className='search-box'>
        <input type='text' name='player' value={search} onChange={onChange}/>
        <span></span>
    </div>    
    )
}

const mapStateToProps = (state) => ({
    players: state.players
})

const mapDispatchToProps = (dispatch) => ({
    searchPlayer(players, search, type){
        dispatch({
            type: type,
            payload: {
                players: players,
                player: search
            },
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Searchbox)