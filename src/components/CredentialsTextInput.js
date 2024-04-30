import { useState } from "react";
import {TextInput, View, Pressable, StyleSheet} from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";
import Ionicons from "@expo/vector-icons/Ionicons";

// `type` is a string that indicates the type of input (e.g., 'email', 'password')
// `value` is a string that represents the current value of the input
// `onChangeText` is a function that is called when the text changes
// `placeholder` is a string that is displayed when there is no value
const CredentialsTextInput = ({type, value, onChangeText, placeholder}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <View style={styles.container}>
            <Fontisto
                name={type === 'email' ? 'email' : 'unlocked'}
                style={styles.icon}
            />
            <TextInput
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                secureTextEntry={type === 'password' ? !isPasswordVisible : false}
                keyboardType={type === 'email' ? 'email-address' : 'default'}
                style={styles.input}
            />
            {type === 'password' &&
                <Pressable
                    onPress={togglePasswordVisibility}
                >
                    <Ionicons
                        name={isPasswordVisible ? "eye" : "eye-off"}
                        style={styles.icon}
                    />
                </Pressable>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 15,
        padding: 10,
        width: '90%',
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#333',
        marginLeft: 10,
        marginRight: 10,
    },
    icon: {
        marginLeft: 10,
        fontSize: 20,
    },
});

export default CredentialsTextInput;
