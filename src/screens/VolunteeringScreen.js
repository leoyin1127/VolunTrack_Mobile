import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView  } from 'react-native';
import { TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';


import colors from '../../assets/colors/colors';

const DetailItem = ({ icon, text }) => (
    <View style={styles.detailItem}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.detailText}>{text}</Text> 
    </View>
);

const VolunteeringScreen = ({ route }) => { // Destructure `route` from props
    const itemData = route.params?.itemData; // Use optional chaining for safety

    const latitude = parseFloat(itemData.latitude);
    const longitude = parseFloat(itemData.longitude);

    if (!itemData) {
        return (
            <View style={styles.container}>
                <Text>No data available</Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.name}>{itemData.name}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    // Handle button press, e.g., navigation or action
                    console.log('Button pressed');
                }}>
                <Text style={styles.buttonText}>Apply Now!</Text>
            </TouchableOpacity>
            
            <View style={styles.row}>

                <View style={styles.detailsContainer}>
                    <DetailItem icon={require('../../assets/location.png')} text={itemData.location} />
                    <DetailItem icon={require('../../assets/category.png')} text={itemData.category} />
                    <DetailItem icon={require('../../assets/name.png')} text={itemData.name} />
                    <DetailItem icon={require('../../assets/date.png')} text={itemData.date} />
                    <DetailItem icon={require('../../assets/email.png')} text={itemData.email} />
                    <Text style={styles.hours}>
                    {itemData.hours ? `${itemData.hours} Volunteering Hours Offered` : 'Volunteering Hours Not Available'}
                    </Text>
                </View>

                <MapView
                    style={styles.map}
                    region={{
                        latitude: latitude,
                        longitude: longitude,
                        latitudeDelta: 0.1122,
                        longitudeDelta: 0.0921,
                    }}>
                    <Marker
                        coordinate={{ latitude, longitude }}
                        title={itemData.name}
                        description={itemData.location}
                    />
                </MapView>
            </View>
            
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionTitle}> 
                {itemData.descriptionTitle ? itemData.descriptionTitle : null}
                </Text>
                <Text style={styles.description}> 
                    {itemData.description ? itemData.description : 'No description provided'}
                </Text>
            </View>
            
            <StatusBar style="auto" />

        </ScrollView>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: 20,
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.primary,
        marginBottom: 20,
        marginTop: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    detailsContainer: {
        flex: 1, // Take up remaining space
        marginBottom: 15,
    },
    detailItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        width: '80%',
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    detailText: { 
        fontSize: 12, 
        color: colors.textDark, 
    },
    hours: {
        fontSize: 13, // Already defined, adjust this as well if needed
        marginBottom: 10,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: colors.primary, // Use your theme color
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignSelf: 'center',
        marginBottom: 20,
        width: '75%',
        shadowColor: "#000", // 阴影颜色
        shadowOffset: {
            width: 0, // 水平偏移量
            height: 5, // 垂直偏移量
        },
        shadowOpacity: 0.5, // 阴影不透明度
        shadowRadius: 3.84, // 阴影半径
        elevation: 5, // 仅在 Android 上的阴影高度
        overflow: 'hidden', // 确保子视图不会超出边界
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        alignSelf: 'center',
        fontWeight: 'bold',
    },
    map: {
        width: 170,
        height: 170,
    },
    descriptionTitle: {
        fontSize: 18, // Set the font size as per your design
        color: colors.primary, // Adjust the color if needed
        alignSelf: 'center',
        marginTop: 15, // Space above the text
        marginBottom: 15, // Space below the text
    },
    description: {
        fontSize: 13, // Set the font size as per your design
        color: colors.textDark, // Adjust the color if needed
        width: '90%',
        alignSelf: 'center',
        marginBottom: 15, // Space below the text
    },
    descriptionContainer: {
        borderWidth: 1, 
        borderColor: colors.primary, 
        borderRadius: 8,
    }
})

export default VolunteeringScreen; 