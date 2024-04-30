import { useState, useCallback } from "react";
import {View, Text, StyleSheet, Pressable, Alert} from "react-native";
import {useDispatch, useSelector} from 'react-redux';
import {resetUser, setEmail, setPassword} from "../stateManagement/userSlice";
import ScreenTitle from "../components/ScreenTitle";
import MarginBottom from "../components/MarginBottom";
import TextInputTitle from "../components/TextInputTitle";
import CredentialsTextInput from "../components/CredentialsTextInput";
import Checkbox from 'expo-checkbox';

const SignUp = ({navigation}) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const [isChecked, setChecked] = useState(false);

    const handleEmailChange = useCallback((text) => {
        dispatch(setEmail(text));
    }, [dispatch]);

    const handlePasswordChange = useCallback((text) => {
        dispatch(setPassword(text));
    }, [dispatch]);

    const createAccount = useCallback(() => {
        Alert.alert(
            'Account Created',
            `Name: ${user.name}
            Children: ${JSON.stringify(user.children)}
            Gender: ${user.gender}
            Email: ${user.email}
            Password: ${user.password}`,
            [
                {
                    text: "OK",
                    onPress: () => {
                        dispatch(resetUser());
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'EnterName' }],
                        });
                    }
                }
            ],
            { cancelable: false }
        );
    }, [user]);

    const isDisabled = () => {
        return user.email.length === 0 || user.password.length === 0 || !isChecked;
    }

    return (
        <View style={styles.container}>
            <MarginBottom height={20} />
            <ScreenTitle title={'Create Your Account'} />
            <MarginBottom height={20} />
            <TextInputTitle title={'Email'} />
            <MarginBottom height={5} />
            <CredentialsTextInput
                type={'email'}
                value={user.email}
                onChangeText={handleEmailChange}
                placeholder={'Enter your email'}
            />
            <MarginBottom height={10} />
            <TextInputTitle title={'Password'} />
            <MarginBottom height={5} />
            <CredentialsTextInput
                type={'password'}
                value={user.password}
                onChangeText={handlePasswordChange}
                placeholder={'Enter your password'}
            />
            <MarginBottom height={40} />
            <Pressable
                style={[styles.signUp, isDisabled() && styles.disabledButton]}
                onPress={createAccount}
                disabled={isDisabled()}
            >
                <Text style={styles.signUpText}>
                    Sign Up
                </Text>
            </Pressable>
            <View style={styles.checkboxContainer}>
                <Checkbox
                    style={styles.checkbox}
                    value={isChecked}
                    onValueChange={setChecked}
                />
                <View>
                    <Text>
                        I've read and accepted
                    </Text>
                    <Text style={styles.privacyPolicy}>
                        Terms of Service and Privacy Policy
                    </Text>
                </View>
            </View>
        </View>
    );
}
export default SignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        paddingLeft: '10%',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    checkbox: {
        marginRight: 10,
    },
    privacyPolicy: {
        color: 'purple',
    },
    signUp: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'purple',
        padding: 15,
        borderRadius: 25,
        width: '90%',
    },
    signUpText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    disabledButton: {
        backgroundColor: '#ccc',
    },
});
