import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Card, WingBlank, WhiteSpace } from 'antd-mobile'
import styled from 'styled-components'
import Moment from 'moment';


const NewsCard = styled(Card)`
  border-width: 0;
  border-radius: 15px;
  shadow-opacity: 0.75;
  shadow-radius: 5;
  shadow-color: rgb(64,64,64);
  shadow-offset: 5px 5px;
`
const NewsCardBody = styled(Card.Body)`
  border-top-width: 0;
  padding-vertical: 0;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  overflow: hidden;
`

const NewsDate = styled.View`
  position: absolute;
  left: 10px;
  top: 10px;
  background-color: black;
  opacity: 0.75;
  padding: 4px;
  border-radius: 5px;

`
const NewsDateText = styled.Text`
font-size: 20px;
color: white;
text-align: center;
`


const EventListView = styled(View)`

`
//background-color: rgb(211,211,211);
const NewsImage = styled(Image)`
  width: 100%;
  padding-top: 50%;
`
const NewsDescription = styled(Text)`
  padding-top: 8px;
`


export default class News extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      events: [{
        title: 'SClub Night',
        imgUrl: 'https://scontent.fmad8-1.fna.fbcdn.net/v/t45.1600-4/cp0/q75/c0.49.1280.670/s480x480/30557633_6135042921613_6912227594888806400_n.jpg?_nc_cat=0&efg=eyJxZV9ncm91cHMiOlsibm9fc2FmZV9pbWFnZV9mb3JfYWRzX2ltYWdlIl19&oh=9405a4447bc24152ad24aa4b56226ded&oe=5B5FE2F0',
        description: 'Wir schaffen das'
      }, {
        title: 'Kreuz Night',
        imgUrl: 'https://scontent.fmad8-1.fna.fbcdn.net/v/t45.1600-4/cp0/q90/c49.0.631.330/s480x480/30524655_23842770911420114_145742607018885120_n.png.jpg?_nc_cat=0&efg=eyJxZV9ncm91cHMiOlsibm9fc2FmZV9pbWFnZV9mb3JfYWRzX2ltYWdlIl19&oh=b406bb1bfc67b70b408129346e130091&oe=5B68F287',
        description: 'Matthias Kübel ist der einzige Kandidat'
      }],
      isLoading: false
    }


  }

  renderEventList() {
    return this.state.events.map((event) => {
    Moment.locale('en');
    var dt = '2018-04-21T14:00:02+0000';

      const { title, imgUrl, description } = event

      const cardContent = (
        <NewsDescription>
          {description}
          </NewsDescription>
        )

      return (
        <EventListView key={title}>
          <NewsCard full={true}>

            <NewsCardBody>
              <NewsImage
                source={{uri: imgUrl}}
              />
              <NewsDate>
                <NewsDateText>
                 23 {"\n"}
                 APR
                </NewsDateText>
              </NewsDate>
            </NewsCardBody>
            <Card.Footer content={cardContent}
                />
          </NewsCard>
          //<View> {Moment(dt).format('d MMM')} hallo </View>

          <WhiteSpace size="lg" />
        </EventListView>
      )
    });
  }

  render() {
    const { events, isLoading } = this.state;
    return (
        <EventListView>
          <WingBlank size="md">
            <WhiteSpace size="lg" />
            {this.renderEventList()}
          </WingBlank>
        </EventListView>
    );
  }
}
