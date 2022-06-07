import { Provider } from 'react-redux'

import Players from './components/common/Players'
import { SelectedTeam } from './components/common/SelectedTeam'
import store from './Store/store'

import './styles/styles.scss'

export const App = () => {
  return (
      <Provider store={store}>
        <main>
          <h1>SSC</h1>
          <Players/>
          <SelectedTeam/>
        </main>
      </Provider>
  )
}

