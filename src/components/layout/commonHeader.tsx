import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";
import {ArrowLeftIcon} from 'react-native-heroicons/solid'
import { Text } from "react-native-svg";
const commonHeader = ({title}:any) => {
    const navigation = useNavigation();
    return (
        <View className="h-12 border-b-[1px] border-b-gray-500 flex-row items-center justify-center">
            <TouchableOpacity onPress={() => navigation.goBack()} className="flex-row items-center gap-3">
                <ArrowLeftIcon size={25} color="#000000"/>
                <Text className="text-base font-semibold text-black">Back</Text>
            </TouchableOpacity>
            <Text className="text-base font-semibold text-black">{title}</Text>
        </View>
    );
};
export default commonHeader;