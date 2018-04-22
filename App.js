import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card, WingBlank, WhiteSpace } from 'antd-mobile'
import FBSDK from 'react-native-fbsdk'
const { GraphRequest, GraphRequestManager } = FBSDK
import styled from 'styled-components'

function _responseInfoCallback(error: ?Object, result: ?Object) {
  if (error) {
    console.log("error", error)
  } else {
    console.log('success', result);
  }
}
const infoRequest = new GraphRequest(
  '/134624766583574',
  null,
  this._responseInfoCallback,
)

const rManager = new GraphRequestManager()

const test = 1;
const NewsCard = styled(Card)`
  background-color: black;
`


export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      events: [{
        title: "SClub Night"
      }, {
        title: "Kreuz Night"
      }],
      isLoading: false
    }

  }

  renderEventList() {
    return this.state.events.map((event) => {
      const { title } = event
      return (
        <View key={title}>
          <NewsCard>
            <Card.Header
              title={title}
              thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"
              extra={<Text>this is extra</Text>}
            />
            <Card.Body>
              <Text>This is content of `Card`</Text>
            </Card.Body>
            <Card.Footer content="footer content" extra={<Text>extra footer content</Text>} />
          </NewsCard>
          <WhiteSpace size="lg" />
        </View>
      )
    });
  }

  render() {
    const { events, isLoading } = this.state;
    return (
      <View>
        <WingBlank size="lg">
          <WhiteSpace size="lg" />
          <WhiteSpace size="lg" />
          <WhiteSpace size="lg" />
          <WhiteSpace size="lg" />
          {this.renderEventList()}
        </WingBlank>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
