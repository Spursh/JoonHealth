import { View, TextInput, StyleSheet, Pressable } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

// `value` is the current value of the item
// `editValue` is the value of the item when it's being edited
// `onChangeText` is a function to update `editValue`
// `editable` is a boolean indicating whether the item is being edited
// `handleEdit` is a function to start editing the item
// `handleSave` is a function to save the changes to the item
// `handleDelete` is a function to delete the item
const EditListInputText = ({ value, editValue, onChangeText, editable, handleEdit, handleSave, handleDelete }) => {

    // Function to handle editing
    const editing = () => (
        <View style={styles.iconContainer}>
            <Pressable onPress={handleSave}>
                <Feather
                    name="check"
                    style={styles.iconConfirm}
                />
            </Pressable>
            <Pressable onPress={handleDelete}>
                <Feather
                    name="x"
                    style={styles.iconDelete}
                />
            </Pressable>
        </View>
    );

    // Function to render the edit button
    const editButton = () => (
        <Pressable onPress={handleEdit}>
            <Feather
                name="edit"
                style={styles.iconEdit}
            />
        </Pressable>
    );

    return (
        <View style={styles.itemList}>
            <TextInput
                style={styles.textInput}
                value={editable ? editValue : value}
                onChangeText={onChangeText}
                editable={editable}
            />
            {editable ? editing() : editButton()}
        </View>
    );
};

const styles = StyleSheet.create({
    itemList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        width: '90%',
    },
    textInput: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    iconContainer: {
        flexDirection: 'row',
    },
    iconEdit: {
        fontSize: 20,
        color: 'purple',
    },
    iconConfirm: {
        fontSize: 20,
        color: 'green',
    },
    iconDelete: {
        fontSize: 20,
        color: 'red',
    },
});

export default EditListInputText;
