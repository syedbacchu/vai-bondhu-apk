import { ScrollView, Text, TouchableOpacity, View,Image } from "react-native";
import { categories } from "../constants";
import { useState } from "react";

const Categories =() => {
    const [activeCategory, setActiveCategory] = useState(null);
    return (
        <View className="mt-5">
            <ScrollView 
                horizontal
                showsHorizontalScrollIndicator={false}
                className="overflow-visible"
                contentContainerStyle={{ 
                    paddingHorizontal:15
                 }}
                >
                {
                    categories.map((category:any,index:any) => {
                        let isActive = category.id ==activeCategory;
                        let btnClass = isActive ? 'bg-gray-600' : 'bg-gray-200';
                        let textClass = isActive ? 'font-semibold text-gray-800' : 'text-gray-500';
                        return (
                            <View key={index} className={"flex justify-center items-center mr-6"}>
                                <TouchableOpacity 
                                onPress={() => setActiveCategory(category.id)}
                                className={"p-1 rounded-full shadow bg-gray-200"+btnClass}>
                                    <Image style={{ width: 45, height:45}} source={category.image}/>
                                    
                                </TouchableOpacity>
                                <Text classname={"text-sm"+textClass}>{category.name}</Text>
                            </View>
                        )
                        
                    })
                }    
            </ScrollView>
        </View>
    );
}

export default Categories;