import {View} from "react-native";

// `height` is a number that represents the height of the margin
const MarginBottom = ({height}) => {
    return (
        <View style={{marginBottom: height}} />
    );
}

export default MarginBottom;
