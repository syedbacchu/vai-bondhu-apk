
import * as React from 'react';
import { View, Text, StatusBar, TextInput, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Icon from "react-native-feather";
import themeColors from '../theme';

const HomeScrean = () => {
    return (
        <SafeAreaView className="bg-white">
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
            
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom:20 }}>

            </ScrollView>
            <View className=" items-center">
            <Image source={require('../Assets/Images/logo.png')} />
            </View>
            <View className=" items-center mt-5">
                <Text className="  font-bold text-lg text-black">Welcome to our Vai Bondhu Organisation</Text>
            </View>
            <View className="p-3">
                <Text className="text-justify text-sm">আসসালামু আলাইকুম। আমাদের ভাই বন্ধু সংগঠন একটি সম্পূর্ণ বেসরকারী এবং সুদ মুক্ত প্রতিষ্ঠান। আমরা রমজান মাসে ০১/০৪/২০২৩ তারিখ থেকে আমাদের যাত্রা শুরু করি। আমাদের কিছু বন্ধু এবং ভাই এই সংগঠনের প্রাথমিক সদস্য, এখন মোট সদস্য সংখ্যা ৫০ এর কাছাকাছি। এই সংগঠনের প্রত্যেক সদস্য সময়নিষ্ঠ, সৎ এবং পরিশ্রমী। আমাদের মূল লক্ষ্য হল একসাথে টাকা সঞ্চয় করা এবং সৎ উপায়ে মুনাফা অর্জনের চেষ্টা করা। অনুগ্রহ করে আমাদের জন্য দোয়া করুন যেন আমরা আমাদের গন্তব্যে নিখুঁতভাবে পৌঁছাতে পারি।</Text>
            </View>
        </SafeAreaView>
    );
}

export default HomeScrean;