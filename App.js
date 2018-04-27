import React, { Component, Fragment } from 'react'
import TabNavigator from './tabBar'
import AppHeader from './containers/appHeader'
// Redux
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import reducers from './reducers/index'
const store = createStore(
  reducers,
  applyMiddleware(logger)
)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <AppHeader />
          <TabNavigator />
        </Fragment>
      </Provider>
    )
  }
}
