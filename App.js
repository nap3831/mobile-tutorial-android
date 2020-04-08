import React, { Component } from 'react';
import {
  View,Text
} from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
          <View style={{ flexDirection: 'row',flex:1 }}>
            <View style={{ backgroundColor: 'red', width: '100%', display:'flex',alignItems:'center',justifyContent:'center',height: '100%', flex: 1 }}>
              <Text style={{textAlignVertical:'center',color:'#ffffff',fontSize:50}}>
                Red
              </Text>
              <View style={{backgroundColor:'#ffffff',width:'50%',height:3,paddingTop:15,marginTop:5}}></View>
            </View>
            <View style={{ backgroundColor: 'blue', width: '100%', display:'flex',alignItems:'center',justifyContent:'center',height: '100%', flex: 1 }}>
            <Text style={{textAlignVertical:'center',color:'#ffffff',fontSize:50}}>
                Blue
              </Text>
              <View style={{backgroundColor:'#ffffff',width:'50%',height:3,paddingTop:15,marginTop:5}}></View>
            </View>
          </View>
          <View style={{ flexDirection: 'row',flex:1 }}>
            <View style={{ backgroundColor: 'yellow', width: '100%', display:'flex',alignItems:'center',justifyContent:'center',height: '100%', flex: 1 }}>
            <Text style={{textAlignVertical:'center',color:'#ffffff',fontSize:50}}>
                Yellow
              </Text>
              <View style={{backgroundColor:'#ffffff',width:'50%',height:3,paddingTop:15,marginTop:5}}></View>
            </View>
            <View style={{ backgroundColor: 'green', width: '100%', display:'flex',alignItems:'center',justifyContent:'center',height: '100%', flex: 1 }}>
            <Text style={{textAlignVertical:'center',color:'#ffffff',fontSize:50}}>
                Green
              </Text>
              <View style={{backgroundColor:'#ffffff',width:'50%',height:3,paddingTop:15,marginTop:5}}></View>
            </View>
          </View>
      </View>
    )
  }
}

export default App;