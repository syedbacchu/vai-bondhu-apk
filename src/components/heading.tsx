import { View ,Text, TouchableOpacity, TouchableWithoutFeedback} from "react-native"
import themeColors from "../theme";
import { useNavigation } from "@react-navigation/native";

const HeadingComponent = ({title,description}:any) => {
    const navigation = useNavigation();
    return (
        <View className={"flex-row justify-between items-center px-1"}> 
            <View>
                <Text className={"font-bold text-lg"}>{title}</Text>
                <Text className={"text-xs text-gray-500"}>{description}</Text>
            </View>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('DueDepositor',{...title})}>
                <Text  style={{ color:themeColors.text }} className={"font-semibold"}> See All</Text>
            </TouchableWithoutFeedback>
        </View>
    );
}

export default HeadingComponent;