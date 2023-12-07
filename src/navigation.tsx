import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { View, Text } from 'react-native';
import HomeScrean from './screans/HomeScrean';
import MainScrean from './screans/MainScrean';


const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="Home" component={HomeScrean} />
                <Stack.Screen name="Main" component={MainScrean} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;