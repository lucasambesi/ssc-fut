import { typesPlayer } from '../../types/types'
import InternalPlayers from './InternalPlayers'
import ExternalPlayers from './ExternalPlayers'
 
const SelectionPlayers = ({ type = typesPlayer.INTERNAL}) => {  
  return (
    <section>
        { (type === typesPlayer.INTERNAL) 
            ? <InternalPlayers/> 
            : <ExternalPlayers/> 
        }
    </section>
  )
}

export default SelectionPlayers