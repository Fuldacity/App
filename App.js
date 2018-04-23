import React from 'react'
import { View, Text, Button } from 'react-native'
import { AuthSession } from 'expo';
import News from './news'
import { NativeRouter, Route, Link } from 'react-router-native'
import { WhiteSpace } from 'antd-mobile'

const FB_APP_ID = '598231856876775'

const About = () => (
  <Text>About</Text>
)

export default class App extends React.Component {
  state = {
    userInfo: null
  }

  _handlePressAsync = async () => {
    let redirectUrl = AuthSession.getRedirectUrl();

    console.log(redirectUrl);
    let result = await AuthSession.startAsync({
      authUrl:
        `https://www.facebook.com/v2.8/dialog/oauth?response_type=token` +
        `&client_id=${FB_APP_ID}` +
        `&redirect_uri=${encodeURIComponent(redirectUrl)}`,
    })

    if (result.type !== 'success') {
      console.log('FBAuth: Something went wrong');
      return
    }

    console.log(result.params);
    let accessToken = result.params.access_token;
    console.log(accessToken);
    let userInfoResponse = await fetch(
      `https://graph.facebook.com/me?access_token=${accessToken}&fields=id,name,picture.type(large)`
    );
    const userInfo = await userInfoResponse.json();
    console.log(JSON.stringify(userInfo, null, 4));
    this.setState({ userInfo });
  }

  render() {
    return (
      <NativeRouter>
        <View>
          <WhiteSpace size="lg" />
          <WhiteSpace size="lg" />
          <WhiteSpace size="lg" />
          <WhiteSpace size="lg" />
          <Link to="/about"><Text>About</Text></Link>

          <Button title="Open FB Auth" onPress={this._handlePressAsync}/>

          <Route exact path="/" component={News}/>
          <Route path="/about" component={About}/>
        </View>
      </NativeRouter>
    );
  }
}
