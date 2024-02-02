import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, ScrollView, Modal, Linking, Button } from 'react-native';
import { TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Slider from '@react-native-community/slider';

import colors from '../../assets/colors/colors';

const DetailItem = ({ icon, text }) => (
    <View style={styles.detailItem}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.detailText}>{text}</Text> 
    </View>
);

const VolunteeringScreen = ({ route, navigation }) => {
 // 状态定义
    const itemData = route.params?.itemData; // 从路由参数获取志愿活动数据
    const [modalVisible, setModalVisible] = useState(false); // 控制模态框的状态
    const [isBookmarked, setIsBookmarked] = useState(false); // 控制书签状态
    const bookmarkKey = `@bookmark_${itemData?.id}`; // 基于活动ID生成一个唯一的键

    const [sliderValue, setSliderValue] = useState(1); // Slider Determines 'Task Status' 
    const [completedHours, setCompletedHours] = useState(''); // User Enters Hours / Task

    const handleBookmark = async () => {
        const newBookmarkStatus = !isBookmarked;
        setIsBookmarked(newBookmarkStatus);
        try {
            const bookmarkArray = JSON.parse(await AsyncStorage.getItem('@bookmarks')) || [];
            if (newBookmarkStatus) {
                // 添加书签
                const updatedBookmarkArray = [...bookmarkArray, itemData];
                await AsyncStorage.setItem('@bookmarks', JSON.stringify(updatedBookmarkArray));
            } else {
                // 移除书签
                const updatedBookmarkArray = bookmarkArray.filter(bookmark => bookmark.id !== itemData.id);
                await AsyncStorage.setItem('@bookmarks', JSON.stringify(updatedBookmarkArray));
            }
        } catch (e) {
            console.error('更新书签失败', e);
        }
    };
    
    useEffect(() => {
        const initializeBookmarkStatus = async () => {
            try {
                // 检查是否有书签数组
                const bookmarks = JSON.parse(await AsyncStorage.getItem('@bookmarks')) || [];
                // 根据当前活动的ID设置书签状态
                setIsBookmarked(bookmarks.some(bookmark => bookmark.id === itemData?.id));
            } catch (e) {
                console.error('初始化书签状态失败', e);
            }
        };
    
        initializeBookmarkStatus();
    }, []);

    // 设置导航栏右侧的书签图标
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={handleBookmark}>
                    <Ionicons 
                        name={isBookmarked ? 'bookmark' : 'bookmark-outline'} 
                        size={25} 
                        color={colors.primary}
                    />
                </TouchableOpacity>
            ),
        });
    }, [isBookmarked, navigation]);

    // 如果没有活动数据，显示错误信息
    if (!itemData) {
        return <View style={styles.container}><Text>No data available</Text></View>;
    }

    const locationExists = itemData.location && typeof itemData.location === 'object';
    const address = locationExists ? itemData.location.address1 || '' : '';
    const city = locationExists ? itemData.location.city || '' : '';
    const state = locationExists ? itemData.location.state || '' : '';
    const zipCode = locationExists ? itemData.location.zip_code || '' : '';
    const country = locationExists ? itemData.location.country || '' : '';

    let categoriesText = '';

    if (typeof itemData.categories === 'string') {
        categoriesText = itemData.categories;
    } else if (Array.isArray(itemData.categories)) {
        categoriesText = itemData.categories.map(cat => cat.title).join(', ');
    }

    let fullAddress = '';

    if (typeof itemData.location === 'string') {
        fullAddress = itemData.location;
    } else if (typeof itemData.location === 'object') {
        const address1 = itemData.location.address1 || '';
        const city = itemData.location.city || '';
        const state = itemData.location.state || '';
        const zipCode = itemData.location.zip_code || '';
        const country = itemData.location.country || '';

        fullAddress = [address1, city, state, zipCode, country].filter(Boolean).join(', ');
    }

    const coordinates = itemData.coordinates;
    const formattedLatitude = coordinates && !isNaN(coordinates.latitude) ? parseFloat(coordinates.latitude) : null;
    const formattedLongitude = coordinates && !isNaN(coordinates.longitude) ? parseFloat(coordinates.longitude) : null;

    const isValidCoordinates = () => {
        return formattedLatitude !== null && formattedLongitude !== null &&
               formattedLatitude >= -90 && formattedLatitude <= 90 &&
               formattedLongitude >= -180 && formattedLongitude <= 180;
    };
    
    const dateText = itemData.date ? itemData.date : 'Date Not Provided';

    const handleOpenLink = () => {
        if (itemData && itemData.url) {
            console.log('URL:', itemData.url);
            Linking.openURL(itemData.url);
        }
    };

    const handleApplyNow = () => {
        setModalVisible(true);
    };

    let contactInfo = 'Contact Info Not Available';
    if (itemData.email) {
        contactInfo = itemData.email;
    } else if (itemData.phone) {
        contactInfo = itemData.phone;
    }

    useEffect(() => {
        const checkBookmarkStatus = async () => {
            try {
                const savedBookmarkStatus = await AsyncStorage.getItem('@bookmark_key');
                if (savedBookmarkStatus !== null) {
                    setIsBookmarked(JSON.parse(savedBookmarkStatus));
                }
            } catch (e) {
                console.error('读取书签状态失败', e);
            }
        };
    
        checkBookmarkStatus();
    }, []);
    
      useEffect(() => {
        retrieveSliderValue(); // Save Slider Value Individual To Task
        retrieveCompletedHours(); // Save Hours Value Individual To Task
      }, []);
    
      // Slider Functionality For Setting Task As Not Complete, Ongoing, Complete

      useEffect(() => {
        storeSliderValue();
      }, [sliderValue]);
    
      const storeSliderValue = async () => {
        try {
          if (itemData?.id) {
            const key = `@slider_value_${itemData.id}`;
            await AsyncStorage.setItem(key, String(sliderValue));
          }
        } catch (error) {
          console.error('Error storing slider value:', error);
        }
      };
    
      const retrieveSliderValue = async () => {
        try {
          if (itemData?.id) {
            const key = `@slider_value_${itemData.id}`;
            const savedSliderValue = await AsyncStorage.getItem(key);
            if (savedSliderValue !== null) {
              setSliderValue(parseInt(savedSliderValue, 10));
            }
          }
        } catch (error) {
          console.error('Error retrieving slider value:', error);
        }
      };
    
      const getStatusText = () => {
        switch (sliderValue) {
            case 1:
              statusText = 'Not Completed';
              statusColor = 'red'; 
              break;
            case 2:
              statusText = 'Ongoing';
              statusColor = colors.secondary; 
              break;
            case 3:
              statusText = 'Completed';
              statusColor = colors.primary; 
              break;
            default:
              break;
          }
        
          return { text: statusText, color: statusColor };
        };
        // Slider Functionality For Setting Task As Not Complete, Ongoing, Complete

        // Individual Hours Recorded By User / Task
        const handleRecordHours = async () => {
            try {
                const key = `@completed_hours_${itemData.id}`;
                const hoursToRecord = completedHours.trim() === '' ? '0' : completedHours;
                
                await AsyncStorage.setItem(key, hoursToRecord);
            } catch (error) {
                console.error('Error storing completed hours:', error);
                
                navigation.navigate('Homepage', { sliderValue });
            }
        
        
            setModalVisible(false);
            
            navigation.navigate('Homepage');
        };
        // Individual Hours Recorded By User / Task
        
        // User Input Functionality For Saving Completed Hours
        const retrieveCompletedHours = async () => {
            try {
                if (itemData?.id) {
                    const key = `@completed_hours_${itemData.id}`;
                    const savedCompletedHours = await AsyncStorage.getItem(key);
                    if (savedCompletedHours !== null) {
                        setCompletedHours(savedCompletedHours);
                    }
                }
            } catch (error) {
                console.error('Error retrieving completed hours:', error);
            }
        };
        // User Input Functionality For Saving Completed Hours

    // 如果没有活动数据，显示错误信息
    if (!itemData) {
        return <View style={styles.container}><Text>No data available</Text></View>;
    }
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.name}>{itemData.name}</Text>
            
            {sliderValue === 1 && ( // Apply Now Button If Task Is New
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleApplyNow}>
                    <Text style={styles.buttonText}>Apply Now!</Text>
                </TouchableOpacity>
            )}

            {(sliderValue === 2 || sliderValue == 3) && ( // Record Task Button If Task Is Ongoing / Completed
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setModalVisible(true)}>
                    <Text style={styles.buttonText}>Record Hours!</Text>
                </TouchableOpacity>
            )}
            
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible && sliderValue === 1}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Apply @:</Text>
                        <Text style={styles.urlText}>{itemData.url}</Text>
                        <View style={{ marginBottom: 8 }}>
                            <Button title="Open Link" onPress={() => Linking.openURL(itemData.url)} />
                        </View>
                        <Button title="Close" onPress={() => setModalVisible(false)} />
                    </View>
                </View>
            </Modal>
            
            <Modal // Prompt For Users To Record Hours
                animationType="slide"
                transparent={true}
                visible={modalVisible && (sliderValue === 2 ||sliderValue === 3 )}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        {(sliderValue === 2 || sliderValue == 3) && (
                            <>
                                <Text style={styles.modalText}>Record Hours:</Text>
                                <TextInput
                                    style={[styles.input, { borderColor: colors.primary, borderWidth: 2, width: 90}]}
                                    keyboardType="numeric"
                                    value={completedHours}
                                    onChangeText={(text) => setCompletedHours(text)}
                                    textAlign = 'center'
                                />
                                <Button title="Record" onPress={handleRecordHours} />
                            </>
                        )}
                        <Button title="Close" onPress={() => setModalVisible(false)} />
                    </View>
                </View>
            </Modal> 
            
            <View style={styles.row}>

                <View style={styles.detailsContainer}>
                    <DetailItem icon={require('../../assets/location.png')} text={fullAddress} />
                    <DetailItem 
                        icon={require('../../assets/category.png')} 
                        text={categoriesText} 
                    />                    
                    <DetailItem 
                        icon={require('../../assets/name.png')} 
                        text={itemData.organization ? itemData.organization : itemData.name} 
                    />
                    <DetailItem icon={require('../../assets/date.png')} text={dateText} />
                    <DetailItem icon={require('../../assets/email.png')} text={contactInfo} />
                    <Text style={styles.hours}>
                        {itemData.hours ? `${itemData.hours} Volunteering Hours Offered` : 'Volunteering Hours See The Web'}
                    </Text>
                </View>

                {isValidCoordinates() ? (
                    <MapView
                        style={styles.map}
                        region={{
                            latitude: formattedLatitude,
                            longitude: formattedLongitude,
                            latitudeDelta: 0.1122,
                            longitudeDelta: 0.0921,
                        }}
                    >
                        <Marker coordinate={{ latitude: formattedLatitude, longitude: formattedLongitude }} title={itemData.name} description={fullAddress} />
                    </MapView>
                ) : (
                    <Text style={styles.noCoordinatesText}>Map not available</Text>
                )}
            </View>
            
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionTitle}> 
                    {itemData.name}
                </Text>
                <Text style={styles.description}> 
                    {itemData.description ? itemData.description.replaceAll("\\n", "\n") : 'No description provided'}
                </Text>
            </View>

            <View style={{ alignItems: 'center', marginTop: 20 }}> 
                <Text style={{ color: getStatusText().color, fontFamily: 'PingFangSC-Semibold', fontSize: 20, alignSelf: 'center', }}> 
                    Status: {getStatusText().text} 
                </Text>

                <Slider // Keep Track Of Task Progress Using Slider
                    style={{ width: '90%' }}
                    value={sliderValue}
                    minimumValue={1}
                    maximumValue={3}
                    step={1}
                    onValueChange={(value) => setSliderValue(value)}
                />
            </View>

            <Text style={styles.completedHours}>
                {completedHours ? `${completedHours} Completed Hours` : 'Completed Hours Not Recorded'}
            </Text>

            <StatusBar style="auto" />

        </ScrollView>
    );
}

const storeData = async (value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@bookmark_key', jsonValue)
    } catch (e) {
        // saving error
    }
}

const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@bookmark_key')
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
        // error reading value
    }
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
        marginTop: 10,
        marginBottom: 20, 
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
        fontSize: 12, // Already defined, adjust this as well if needed
        marginBottom: 10,
        fontWeight: 'bold',
    },
    completedHours: {
        color: colors.primary,
        fontFamily: 'PingFangSC-Semibold', 
        fontSize: 28, 
        marginVertical: 15,
        textAlign: 'center', 
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
        height: '90%',
        borderRadius: 1,
        borderColor: colors.primary,
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
        paddingBottom: 15,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    urlText: {
        color: 'blue',
        marginBottom: 15,
    },
    noCoordinatesText: {
        fontSize: 14,
        color: 'red',
        textAlign: 'center',
        marginTop: 20,
        width: '40%',
    },
})

export default VolunteeringScreen;