import { ScrollView, Text, TouchableOpacity, View,Image } from "react-native";
import { topdepositor } from "../constants";
import { useState } from "react";
import DepositorView from "./depositor";

const TopDepositor =() => {
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
                    topdepositor.map((item:any,index:any) => {
                       
                        return (
                            <View key={index}>
                                <TouchableOpacity className={"flex-row flex-1 items-center"}>
                                    <DepositorView name={item.name} details={"$"+item.deposit} image={item.image}/>
                                </TouchableOpacity>
                            </View>
                        )
                        
                    })
                }    
            </ScrollView>
        </View>
    );
}

export default TopDepositor;