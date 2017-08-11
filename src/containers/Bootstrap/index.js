import React from 'react'
import App from '../App'

import { Provider } from 'react-redux'
import store from '../../redux'

export default _ => (
  <Provider store={store}>
    <App />
  </Provider>
)
