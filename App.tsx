/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Navigation from './src/navigation';


const App = () => {
//   const isDarkMode = useColorScheme() === 'dark';
//  const backgroundStyle = "bg-neutral-300 dark:bg-slate-900"

  return (
   <Navigation/>
  );
};


export default App;