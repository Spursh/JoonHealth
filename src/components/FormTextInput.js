import {TextInput, StyleSheet} from "react-native";

// `placeholder` is a string that is displayed when there is no value
// `value` is a string that represents the current value of the input
// `onChangeText` is a function that is called when the text changes
const FormTextInput = ({placeholder, value, onChangeText}) => {
    return (
        <TextInput
            style={styles.textInput}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
        />
    );
}

const styles = StyleSheet.create({
    textInput: {
        height: 50,
        width: '90%',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 15,
        fontSize: 18,
    },
});

export default FormTextInput;
