import React from 'react'
import News from './news'
import { TabNavigator } from 'react-navigation'

export default TabNavigator({
  Home: { screen: News },
})
