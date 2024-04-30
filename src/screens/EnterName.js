import {useCallback} from "react";
import {View, StyleSheet} from "react-native";
import {useDispatch, useSelector} from 'react-redux';
import {setName} from "../stateManagement/userSlice";
import ScreenTitle from "../components/ScreenTitle";
import FormTextInput from "../components/FormTextInput";
import MarginBottom from "../components/MarginBottom";
import PrimaryButton from "../components/PrimaryButton";

// `navigation` is the navigation prop passed by React Navigation
const EnterName = ({navigation}) => {
    const dispatch = useDispatch();
    const name = useSelector(state => state.user.name);

    const handleNameChange = useCallback((text) => {
        dispatch(setName(text));
    }, [dispatch]);

    const toSelectGenderScreen = useCallback(() => {
        navigation.navigate('SelectGender');
    }, [navigation]);

    const isDisabled = () => {
        return name.trim() === '';
    }

    return (
        <View style={styles.container}>
            <ScreenTitle title={'What is your name?'} />
            <MarginBottom height={20} />
            <FormTextInput
                value={name}
                onChangeText={handleNameChange}
                placeholder={'Enter your name'} />
            <MarginBottom height={40} />
            <PrimaryButton
                title={'Next'}
                onPress={toSelectGenderScreen}
                disabled={isDisabled()}
            />
            <MarginBottom height={10} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default EnterName;
