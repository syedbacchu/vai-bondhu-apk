
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import SiteLogo from '../components/logo';


const UserScreen = () => {
    return (
        <View>
            <Text>User Screan</Text>
            
                 <View className=" items-center">
                    <SiteLogo/>
                </View>
                <View className=" items-center">
                    <Text className="text-center ml-5">Welcome to React Native</Text>
                </View>
        </View>
    );
}

export default UserScreen;