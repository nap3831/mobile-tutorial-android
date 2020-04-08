import React, { Component } from 'react';
import axios from 'axios';
import {
  View, Text, ScrollView, StyleSheet
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCoronaVirus: []
    }
  }
  componentDidMount() {
    const url = "https://corona.lmao.ninja/countries";
    axios.get(url).then((Response) => {
      this.setState({
        dataCoronaVirus: Response.data
      })
    })
  }

  render() {
    const StylePage = StyleSheet.create({
      container: {
        flex: 1, backgroundColor: '#333333'
      },
      header: {
        width: '100%', color: '#ffff00', justifyContent: 'center', textAlign: 'center', fontSize: 25
      },
      boxContent:{
        width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', flex: 1 
      },
      underlineDetailContent:{
        backgroundColor: '#ff0000', width: '50%', height: 1, marginTop: '5%', marginBottom: '5%'
      },
      underlineEndContent :{
        backgroundColor: '#ffffff', width: '100%', height: 2, marginTop: '5%', marginBottom: '5%'
      },
      detail:{
        textAlignVertical: 'center', color: '#ffffff', fontSize: 25, flexWrap: 'wrap'
      }

    });
    return (
      <View style={StylePage.container}>
        <ScrollView>
          {this.state.dataCoronaVirus.map((datas, index) => {
            return (
              <View key={index} >
                <View style={StylePage.boxContent}>
                <Text style={StylePage.header}>
                  ชื่อประเทศ
                </Text>
                
                  <Text style={ StylePage.detail}>
                    {datas.country}
                  </Text>
                  <View style={StylePage.underlineDetailContent}></View>
                  <Text style={StylePage.header}>
                    ผู้ติดเชื้อทั้งหมด
                </Text>
                <View style={StylePage.underlineDetailContent}></View>
                  <Text style={StylePage.detail}>
                    {datas.cases} คน
                  </Text>
                  <View style={StylePage.underlineDetailContent}></View>
                  <Text style={StylePage.header}>
                    ผู้เสียชีวิตแล้ว
                </Text>
                  <Text style={StylePage.detail}>
                    {datas.deaths} คน
                  </Text>
                  <View style={StylePage.underlineDetailContent}></View>
                  <Text style={StylePage.header}>
                    ติดเชื้อเพิ่มวันนี้จำนวน
                </Text>
                  <Text style={StylePage.detail}>
                    {datas.todayCases} คน
                  </Text>
                  <View style={StylePage.underlineDetailContent}></View>
                  <View style={StylePage.underlineEndContent}></View>
                </View>
              </View>)

          })}
        </ScrollView>

      </View >
    )
  }
}

export default App;