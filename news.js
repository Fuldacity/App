import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card, WingBlank, WhiteSpace } from 'antd-mobile'
import styled from 'styled-components'

const test = 1;
const NewsCard = styled(Card)`
  background-color: black;
`

export default class News extends React.Component {
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
