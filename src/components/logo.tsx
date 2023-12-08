import { Image } from "react-native";
import { settings } from "../constants";

const SiteLogo = () => {
    return (
        <Image source={settings.logo} />
    );
}

export default SiteLogo;