import React from 'react'

import Team from './Team'

import stadiumLeft from '../../assets/cancha1.png'
import stadiumRight from '../../assets/cancha2.png'

import '../../styles/stadium.scss'

export const SelectedTeam = () => {
  return (
    <section>
      <div className='center'>
        <div className='stadium'>                
            <Team team={'black'}/>  
            <img src={stadiumLeft} alt='stadiumLeft' />
        </div>
        <div className='stadium'>
            <Team team={'white'}/>  
            <img src={stadiumRight} alt='stadiumRight' />
        </div> 
      </div>
    </section>
      )
}
