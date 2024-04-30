import {useCallback} from "react";
import {View, StyleSheet} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import SegmentedControl from "../components/SegmentedControl";
import {useDispatch, useSelector} from 'react-redux';
import {setGender} from "../stateManagement/userSlice";
import ScreenTitle from "../components/ScreenTitle";
import MarginBottom from "../components/MarginBottom";

const options = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
    { label: 'Other', value: 'Other' },
];

// `navigation` is the navigation prop passed by React Navigation
const SelectGender = ({navigation}) => {
    const dispatch = useDispatch();
    const gender = useSelector(state => state.user.gender);

    const toAddChildScreen = useCallback(() => {
        navigation.navigate('AddChild');
    }, [navigation]);

    const handleGenderChange = useCallback((newGender) => {
        dispatch(setGender(newGender));
    }, [dispatch]);

    const isDisabled = () => {
        return gender.length === 0;
    }

    return (
        <View style={styles.container}>
            <ScreenTitle title={'What is your Gender?'} />
            <MarginBottom height={20} />
            <SegmentedControl
                value={gender}
                options={options}
                onPress={handleGenderChange}
            />
            <MarginBottom height={40} />
            <PrimaryButton
                title={'Next'}
                onPress={toAddChildScreen}
                disabled={isDisabled()}
            />
        </View>
    );
}

export default SelectGender;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
