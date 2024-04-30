import {StyleSheet, Text} from "react-native";

// `title` is the text to be displayed as the text input title
const TextInputTitle = ({title}) => {
    return (
        <Text style={styles.textInputTitle}>
            {title}
        </Text>
    );
}

const styles = StyleSheet.create({
    textInputTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'left',
    },
});

export default TextInputTitle;
