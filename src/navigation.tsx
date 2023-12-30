import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { View, Text } from 'react-native';
import HomeScrean from './screens/HomeScreen';
import MainScrean from './screens/MainScrean';
import DueDepositScreen from './screens/DueDepositScreen';
import AboutScrean from './screens/AboutScrean';


const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="Home" component={HomeScrean} options={{ title: 'Home Page' }}/>
                <Stack.Screen name="Main" component={MainScrean} options={{ title: 'Main Page' }}/>
                <Stack.Screen name="DueDepositor" component={DueDepositScreen} options={{ title: 'Deposit' }}/>
                <Stack.Screen name="About" component={AboutScrean} options={{ title: 'About us' }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;