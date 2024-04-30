import {StyleSheet, Text} from "react-native";

// `title` is the text to be displayed as the screen title
const ScreenTitle = ({title}) => {
    return (
        <Text style={styles.screenTitle}>
            {title}
        </Text>
    );
}

const styles = StyleSheet.create({
    screenTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default ScreenTitle;
