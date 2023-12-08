import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { categories } from "../constants";
import { Image } from "react-native-svg";

const Categories =() => {
    return (
        <View>
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
                        return (
                            <View key={index} className="flex justify-center items-center mr-6">
                                <TouchableOpacity className="p-1 rounded-full bg-gray-200">
                                    <Image style={{ width:45, height:45 }}
                                    source={category.image}/>
                                    <Text>{category.name}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                        
                    })
                }    
            </ScrollView>
        </View>
    );
}

export default Categories;