import { View ,Text, TouchableOpacity, Image} from "react-native"

const DepositorView = ({name,details,image}:any) => {
    return (
        
            <View className={"mr-6 bg-white rounded-3xl shadow-lg"}> 
                <Image className={"h-24 w-16 rounded-t-3xl"} source={image}/>
                <View className={"pb-4 space-y-2"}>
                    <Text className={"font-bold text-sm pt-2"}>{name}</Text>
                    <Text className={"text-xs text-gray-500"}>{details}</Text>
                </View>
                            
            </View>
        
    );
}

export default DepositorView;