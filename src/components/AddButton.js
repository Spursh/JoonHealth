import {Pressable, StyleSheet, Text} from "react-native";
import Feather from '@expo/vector-icons/Feather';

const COLORS = {
    primary: 'purple',
    disabled: '#ccc',
};

// `title` is the text to be displayed on the button
// `onPress` is the function to be called when the button is pressed
// `disabled` is a boolean indicating whether the button is disabled
const AddButton = ({title, onPress, disabled}) => {
    return (
        <Pressable
            style={[styles.addButton, disabled && styles.disabledButton]}
            onPress={onPress}
            disabled={disabled}
        >
            <Feather
                name="plus"
                style={[styles.icon, disabled && styles.disabledIcon]}
            />
            <Text style={[styles.text, disabled && styles.disabledText]}>
                {title}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    addButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        borderRadius: 25,
        borderColor: COLORS.primary,
        borderWidth: 1,
        width: '50%',
    },
    text: {
        marginLeft: 10,
        fontSize: 16,
        color: COLORS.primary,
    },
    icon: {
        fontSize: 20,
        color: COLORS.primary,
    },
    disabledButton: {
        borderColor: COLORS.disabled,
    },
    disabledText: {
        color: COLORS.disabled,
    },
    disabledIcon: {
        color: COLORS.disabled,
    },
});

export default AddButton;
