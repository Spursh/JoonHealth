import React from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';

// `value` is the currently selected value
// `options` is an array of options for the segmented control
// `onPress` is a function that is called when the selection changes
const SegmentedControl = ({ value, options, onPress }) => {

    return (
        <View style={styles.segmentedControl}>
            {options.map((option) => (
                <Pressable
                    key={option.value}
                    onPress={()=>{onPress(option.value)}}
                    style={[
                        styles.option,
                        value === option.value && styles.selectedOption
                    ]}
                >
                    <Text
                        style={[
                            styles.optionText,
                            value === option.value && styles.selectedOptionText
                        ]}
                    >
                        {option.label}
                    </Text>
                </Pressable>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    segmentedControl: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    option: {
        padding: 8,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: 'transparent',
        marginHorizontal: 2,
    },
    selectedOption: {
        backgroundColor: 'purple',
    },
    optionText: {
        color: 'black',
    },
    selectedOptionText: {
        color: 'white',
    },
});

export default React.memo(SegmentedControl);
