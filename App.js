import React, { Component } from 'react';
import axios from 'axios';
import {
  View, Text, ScrollView
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCoronaVirus: []
    }
  }
  componentDidMount() {
    console.log('hello');

    const url = "https://corona.lmao.ninja/countries";
    axios.get(url).then((Response) => {
      this.setState({
        dataCoronaVirus: Response.data
      })
    })
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#333333' }}>
        <ScrollView>
          {this.state.dataCoronaVirus.map((datas, index) => {
            return(
               <View key={index} style={{ flexDirection: 'column', flex: 1 }}>
                    <Text style={{ width: '100%', color: '#fff', justifyContent: 'center', textAlign: 'center', fontSize: 30 }}>
                      ชื่อประเทศ
                </Text>
                    <View style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 25, marginTop: 25, height: '100%', flex: 1 }}>
                      <Text style={{ textAlignVertical: 'center', color: '#ffffff', fontSize: 25, marginTop: 25, flexWrap: 'wrap' }}>
                        {datas.country}
                      </Text>
                      <View style={{ backgroundColor: '#ff0000', width: '100%', height: '3%', marginTop: '5%', marginBottom: '5%' }}></View>
                      <Text style={{ width: '100%', color: '#fff', justifyContent: 'center', textAlign: 'center', fontSize: 30 }}>
                        ผู้ติดเชื้อทั้งหมด
                </Text>
                      <Text style={{ textAlignVertical: 'center', color: '#ffffff', fontSize: 25, flexWrap: 'wrap' }}>
                        {datas.cases} คน
                  </Text>
                      <View style={{ backgroundColor: '#ff0000', width: '50%', height: '3%', marginTop: '5%', marginBottom: '5%' }}></View>
                      <Text style={{ width: '100%', color: '#fff', justifyContent: 'center', textAlign: 'center', fontSize: 30 }}>
                        ผู้เสียชีวิตแล้ว
                </Text>
                      <Text style={{ textAlignVertical: 'center', color: '#ffffff', fontSize: 25, flexWrap: 'wrap' }}>
                        {datas.deaths} คน
                  </Text>
                      <View style={{ backgroundColor: '#ff0000', width: '50%', height: '3%', marginTop: '5%', marginBottom: '5%' }}></View>
                      <Text style={{ width: '100%', color: '#fff', justifyContent: 'center', textAlign: 'center', fontSize: 30 }}>
                        ติดเชื้อเพิ่มวันนี้จำนวน
                </Text>
                      <Text style={{ textAlignVertical: 'center', color: '#ffffff', fontSize: 25, flexWrap: 'wrap' }}>
                        {datas.todayCases} คน
                  </Text>
                      <View style={{ backgroundColor: '#ff0000', width: '50%', height: '3%', marginTop: '5%', marginBottom: '5%' }}></View>
                      <View style={{ backgroundColor: '#ffffff', width: '100%', height: '3%', marginTop: '5%', marginBottom: '5%' }}></View>
                    </View>
                  </View>)
              
          })}
        </ScrollView>

      </View>
    )
  }
}

export default App;