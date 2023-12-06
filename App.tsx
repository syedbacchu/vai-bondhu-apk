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
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
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
      <TouchableOpacity>
        <Text>Get Started</Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color="#000"></MaterialIcons>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
    
  )
}

export default App;