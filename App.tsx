/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


const App = () => {
  return (
    <SafeAreaView 
      style={{ 
        flex:1, 
        justifyContent:'center', 
        alignItems: 'center', 
        backgroundColor:'#fff' 
      }}
      >
      <View>
      <Text style={{ fontSize:30 , fontWeight:'bold', color:'#20315f', alignItems:'center' }}>Brothers & Friends</Text>
    </View>
    </SafeAreaView>
    
  )
}

export default App;