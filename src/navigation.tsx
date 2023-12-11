import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { View, Text } from 'react-native';
import HomeScrean from './screens/HomeScreen';
import MainScrean from './screens/MainScrean';
import DueDepositScreen from './screens/DueDepositScreen';


const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="Home" component={HomeScrean} />
                <Stack.Screen name="Main" component={MainScrean} />
                <Stack.Screen name="DueDepositor" component={DueDepositScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;