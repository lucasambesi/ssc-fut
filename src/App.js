import { Provider } from 'react-redux'

import Players from './components/common/Players'
import store from './Store/store'
import { SelectedTeam } from './components/common/SelectedTeam'
import { Logo } from './components/common/Logo'

import './styles/styles.scss'

export const App = () => {
  return (
      <Provider store={store}>
        <main>       
          <Logo/>        
          <Players/>
          <SelectedTeam/>
        </main>
      </Provider>
  )
}

