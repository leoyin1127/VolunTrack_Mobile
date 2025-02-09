import React from 'react';
import { StyleSheet, TextInput, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import colors from '../../assets/colors/colors';
import { EvilIcons } from '@expo/vector-icons';

const HomepageSearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.backgroundStyle}>
                <EvilIcons name="search" style={styles.iconStyle} />
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.inputStyle}
                    placeholder="Search Organization / Job"
                    placeholderTextColor="gray"
                    value={term}
                    onChangeText={onTermChange}
                    onEndEditing={onTermSubmit}
                />
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: colors.background,
        height: 40,
        borderRadius: 10,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 15,
        borderWidth: 1,
        borderColor: '#696969',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputStyle: {
        fontSize: 16,
        marginRight: 25,
    },
    iconStyle: {
        fontSize: 25,
        color: '#696969',
        marginHorizontal: 10,
        marginBottom: 5
    },
});

export default HomepageSearchBar;