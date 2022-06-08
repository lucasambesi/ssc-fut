import { Provider } from 'react-redux'

import SelectionPlayers from './components/common/SelectionPlayers'
import store from './Store/store'
import { SelectedTeam } from './components/common/SelectedTeam'
import { Logo } from './components/common/Logo'

import './styles/styles.scss'

export const App = () => {
  return (
      <Provider store={store}>
        <main>       
          <Logo/>        
          <SelectionPlayers/>
          <SelectedTeam/>
        </main>
      </Provider>
  )
}

