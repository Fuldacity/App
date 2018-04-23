import React from 'react'
import { View, Text } from 'react-native'
import News from './news'
import { NativeRouter, Route, Link } from 'react-router-native'
import { WhiteSpace } from 'antd-mobile'


const About = () => (
  <Text>About</Text>
)


export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View>
          <WhiteSpace size="lg" />
          <WhiteSpace size="lg" />
          <WhiteSpace size="lg" />
          <WhiteSpace size="lg" />
          <Link to="/about"><Text>About</Text></Link>

          <Route exact path="/" component={News}/>
          <Route path="/about" component={About}/>
        </View>
      </NativeRouter>
    );
  }
}
