
import * as React from 'react';
import { View, Text, StatusBar, TextInput, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Icon from "react-native-feather";
import themeColors from '../theme';
import SiteLogo from '../components/logo';
import HeadingComponent from '../components/heading';
import DueDepositor from '../components/dueDepositor';

const DueDepositScreen = () => {
    return (
        <ScrollView>
            <SafeAreaView className="bg-white p-3">
            <StatusBar barStyle="dark-content"/>
            <View className="flex-row items-center space-x-2 px-4 pb-2">
                <View className="flex-row flex-1 items-center p-3 rounded-full border-gray-200">
                    <Icon.Search height="25" width="25" stroke="gray"/>
                    <TextInput placeholder='Search' className="ml-2 flex-1"/>
                    <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
                        <Icon.MapPin height="25" width="25" stroke="gray" />
                        <Text className="text-gray-600">Khulna</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: themeColors.bgColor(1) }} className="p-3 bg-gray-300 rounded-full">
                    <Icon.Sliders height={"20"} width={"20"} strokeWidth={"2.5"} stroke={"white"} />
                </View>
            </View>
            
            
            <View className=" items-center">
                <SiteLogo/>
            </View>
           
            <View className={"mt-5"}>
                <HeadingComponent title={"Due Depositor"} description={"09 December 2023 's Due Deposit Member List"} screen={"DueDepositor"}/>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom:20 }}>
                    <DueDepositor/>
                </ScrollView>
            </View>
            
        </SafeAreaView>
        </ScrollView>
        
    );
}

export default DueDepositScreen;