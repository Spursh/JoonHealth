import {Pressable, StyleSheet, Text} from "react-native";

const COLORS = {
    primary: '#007bff',
    disabled: '#ccc',
};

// `title` is the text to be displayed on the button
// `onPress` is the function to be called when the button is pressed
// `disabled` is a boolean indicating whether the button is disabled
const PrimaryButton = ({title, onPress, disabled}) => {
    return (
        <Pressable
            style={[styles.enabledButton, disabled && styles.disabledButton]}
            onPress={onPress}
            disabled={disabled}>
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    enabledButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        padding: 15,
        borderRadius: 25,
        width: '90%',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    disabledButton: {
        backgroundColor: COLORS.disabled,
    },
});

export default PrimaryButton;
