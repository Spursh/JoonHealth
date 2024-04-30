import {useCallback, useState} from "react";
import {View, StyleSheet, FlatList} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import {useDispatch, useSelector} from 'react-redux';
import {setChildren} from "../stateManagement/userSlice";
import ScreenTitle from "../components/ScreenTitle";
import FormTextInput from "../components/FormTextInput";
import MarginBottom from "../components/MarginBottom";
import EditListInputText from "../components/EditListInputText";
import AddButton from "../components/AddButton";

// `navigation` is the navigation prop passed by React Navigation
const AddChild = ({navigation}) => {
    const dispatch = useDispatch();
    const children = useSelector(state => state.user.children);
    const [childName, setChildName] = useState('');
    const [editChildName, setEditChildName] = useState('');
    const [editId, setEditId] = useState(null);

    const toSignUpScreen = useCallback(() => {
        navigation.navigate('SignUp');
    }, [navigation]);

    const handleAddChild = useCallback(() => {
        dispatch(setChildren([...children, {childName, id: Date.now()}]));
        setChildName('');
    }, [children, childName, dispatch]);

    const handleEditChild = useCallback((child) => {
        setEditChildName(child.childName);
        setEditId(child.id);
    }, []);

    const handleSaveChild = useCallback((id) => {
        if (editChildName.trim() === '') {
            return;
        }

        const newChildren = children.map(child =>
            child.id === id ? {childName: editChildName, id} : child
        );
        dispatch(setChildren(newChildren));
        setEditId(null);
        setEditChildName('');
    }, [children, editChildName, dispatch]);

    const handleDeleteChild = useCallback((id) => {
        const newChildren = children.filter(child => child.id !== id);
        dispatch(setChildren(newChildren));
        setEditId(null);
    }, [children, dispatch]);

    const renderItem = useCallback(({item}) => {
        return (
            <EditListInputText
                value={item.childName}
                editValue={editChildName}
                onChangeText={setEditChildName}
                editable={editId === item.id}
                handleEdit={() => {handleEditChild(item)}}
                handleSave={()=>{handleSaveChild(item.id)}}
                handleDelete={()=>{handleDeleteChild(item.id)}}
            />
        );
    }, [editId, editChildName, handleSaveChild, handleDeleteChild]);

    const isDisabledAddChild = () => {
        return childName.trim() === '';
    }

    const isDisabledToSignUpScreen = () => {
        return children.length === 0 || editId !== null;
    }

    return (
        <View style={styles.container}>
            <MarginBottom height={20} />
            <ScreenTitle title={'Add your children'} />
            <MarginBottom height={20} />
            <FormTextInput
                value={childName}
                onChangeText={setChildName}
                placeholder={'Enter child name'}
            />
            <MarginBottom height={20} />
            <AddButton
                title={'Add Child'}
                onPress={handleAddChild}
                disabled={isDisabledAddChild()}
            />
            <MarginBottom height={20} />
            <FlatList
                data={children}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
            />
            <PrimaryButton
                title={'Done'}
                onPress={toSignUpScreen}
                disabled={isDisabledToSignUpScreen()}
            />
            <MarginBottom height={40} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default AddChild;

