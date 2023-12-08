import { View ,Text, TouchableOpacity} from "react-native"
import themeColors from "../theme";

const HeadingComponent = ({title,description}:any) => {
    return (
        <View className={"flex-row justify-between items-center px-1"}> 
            <View>
                <Text className={"font-bold text-lg"}>{title}</Text>
                <Text className={"text-xs text-gray-500"}>{description}</Text>
            </View>
            <TouchableOpacity>
                <Text style={{ color:themeColors.text }} className={"font-semibold"}> See All</Text>
            </TouchableOpacity>
        </View>
    );
}

export default HeadingComponent;