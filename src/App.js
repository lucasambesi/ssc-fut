import { Provider } from 'react-redux'

import Players from './components/common/Players'
import store from './Store/store'
import { SelectedTeam } from './components/common/SelectedTeam'

import logossc from '../src/assets/logossc.jpg'

import './styles/styles.scss'
import './styles/ssclogo.scss'

export const App = () => {
  return (
      <Provider store={store}>
        <main>          
          <div className='logo-ssc'>
              <img src={logossc} alt='logossc'/>                 
          </div>      
          <Players/>
          <SelectedTeam/>
        </main>
      </Provider>
  )
}

