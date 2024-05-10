import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { db, auth } from '../api/firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../../assets/colors/colors';

const hobbiesOptions = [
    'Sports', 'Animals', 'Environmental', 'Teaching', 'Youth and Children', 'Seniors',
    'Social Services', 'Religion and Faith', 'Fundraising', 'Communication', 'Food',
    'Events', 'Arts', 'Culture', 'Accessibility', 
];

const UserInfoScreen = ({ navigation }) => {
    const [userInfo, setUserInfo] = useState({
        username: '',
        email: '',
        city: '',
        hobbies: []
    });

    const updateUserStatus = async () => {
        await AsyncStorage.setItem('isNewUser', 'false');
    };

    const handleSave = async () => {
        const { uid } = auth.currentUser;
        const userRef = doc(db, 'users', uid);
        try {
            await setDoc(userRef, { ...userInfo }, { merge: true });
            await updateUserStatus();  // Set isNewUser to false after saving user info
            Alert.alert("Success", "Profile Updated Successfully");
            navigation.navigate('Homepage');
        } catch (error) {
            console.error("Error updating user info:", error);
            Alert.alert("Error", "Failed to update profile");
        }
    };

    const handleSkip = async () => {
        await updateUserStatus();  // Set isNewUser to false when user skips
        navigation.navigate('Homepage');
    };

    const handleToggleHobby = (hobby) => {
        const newHobbies = userInfo.hobbies.includes(hobby)
            ? userInfo.hobbies.filter(h => h !== hobby)
            : [...userInfo.hobbies, hobby];
        setUserInfo({ ...userInfo, hobbies: newHobbies });
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Get to Know You</Text>
            <Text style={styles.label}>Username</Text>
            <TextInput
                style={styles.input}
                value={userInfo.username}
                onChangeText={text => setUserInfo({ ...userInfo, username: text })}
            />
            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                value={userInfo.email}
                onChangeText={text => setUserInfo({ ...userInfo, email: text })}
            />
            <Text style={styles.label}>City</Text>
            <TextInput
                style={styles.input}
                value={userInfo.city}
                onChangeText={text => setUserInfo({ ...userInfo, city: text })}
            />
            <Text style={styles.instructions}>Select your hobbies to connect with similar interests:</Text>
            <View style={styles.hobbiesContainer}>
                {hobbiesOptions.map(hobby => (
                    <TouchableOpacity
                        key={hobby}
                        style={[
                            styles.hobby,
                            userInfo.hobbies.includes(hobby) ? styles.hobbySelected : {}
                        ]}
                        onPress={() => handleToggleHobby(hobby)}
                    >
                        <Text style={[
                            styles.hobbyText,
                            userInfo.hobbies.includes(hobby) ? styles.hobbyTextSelected : {}
                        ]}>{hobby}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <Button title="Save" onPress={handleSave} />
            <Button title="Skip" onPress={handleSkip} color="gray" />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 30,
        alignItems: 'center',
        backgroundColor: colors.background,
        flex:1,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 15,
        color: colors.primary
    },
    instructions: {
        fontSize: 16,
        color: 'black',
        textAlign: 'center',
        marginVertical: 10,
    },
    hobbiesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginVertical: 10
    },
    hobby: {
        padding: 8,
        margin: 4,
        borderWidth: 1,
        borderColor: '#007bff',
        backgroundColor: colors.background,
        borderRadius: 20,
        minWidth: 90,
        textAlign: 'center',
    },
    hobbySelected: {
        backgroundColor: '#007bff',
    },
    hobbyText: {
        textAlign: 'center',
        color: 'black' // Default color
    },
    hobbyTextSelected: {
        color: 'white' // Color when selected
    },
    label: {
        fontSize: 16,
        marginBottom: 6,
    },
    input: {
        width: '100%',
        height: 40,
        marginBottom: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: colors.primary,
    }
});

export default UserInfoScreen;
