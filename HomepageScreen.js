import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import colors from '../../assets/colors/colors';
import HomepageSearchBar from '../components/HomepageSearchBar';

const HomepageScreen = ({route, navigation}) => {

    const { itemId, completedHours, sliderValue } = route.params || {};


    const [totalCompleted, setTotalCompleted] = useState(0); 
    const [totalHours, setTotalHours] = useState(100); 

    const [ongoingTasks, setOngoingTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);

    useEffect(() => {
        const loadInitialTotalCompleted = async () => {
            try {
                const initialTotalCompleted = await AsyncStorage.getItem('totalCompleted');
                if (initialTotalCompleted !== null) {
                    setTotalCompleted(parseInt(initialTotalCompleted, 10));
                }
            } catch (e) {
                console.error('Error loading totalCompleted:', e);
            }
        };

        loadInitialTotalCompleted();
    }, []);

    // Completed Hours As Sum Of User Inputs
    useFocusEffect(
        React.useCallback(() => {
            const loadCompletedHours = async () => {
                try {
                    const keys = await AsyncStorage.getAllKeys();
                    const completedHoursArray = await AsyncStorage.multiGet(keys.filter(key => key.startsWith('@completed_hours_')));
                    const totalCompletedHours = completedHoursArray.reduce((total, [, value]) => {
                        return total + parseInt(value, 10);
                    }, 0);

                    setTotalCompleted(totalCompletedHours);
                } catch (e) {
                    console.error('Error loading total completed hours:', e);
                }
            };

            loadCompletedHours();
        }, [])
    );
    // Completed Hours As Sum Of User Inputs

    useFocusEffect(
        React.useCallback(() => {
            const getHours = async () => {
                try {
                const hours = await AsyncStorage.getItem('userHours');
                if (hours !== null) {
                    setTotalHours(parseInt(hours, 10));
                }
                } catch (e) {
                }
            };
            getHours();
        }, [])
    );

    useEffect(() => {
        const filterTasks = async () => {
            try {
                const keys = await AsyncStorage.getAllKeys();
                const tasksArray = await AsyncStorage.multiGet(keys.filter(key => key.startsWith('@completed_hours_')));

                const filteredOngoingTasks = tasksArray.filter(([, value]) => parseInt(value, 10) === 2);
                const filteredCompletedTasks = tasksArray.filter(([, value]) => parseInt(value, 10) === 3);

                setOngoingTasks(filteredOngoingTasks);
                setCompletedTasks(filteredCompletedTasks);
            } catch (e) {
                console.error('Error filtering tasks:', e);
            }
        };

        filterTasks();
    }, [sliderValue, itemData?.id]);
    
    const progress = (totalCompleted / totalHours) * 100;

    return(
        <ScrollView>
            <View style={styles.topBar}>
                <TouchableOpacity onPress={() => navigation.navigate('AboutUsScreen')}>
                    <Image source={require('../../assets/adaptive-icon-cropped.png')} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('SettingScreen')}>
                    <Image source={require('../../assets/icons/SettingIcon.png')} style={styles.SettingIcon} />
                </TouchableOpacity>
            </View>
            <Text style = { styles.header }>VolunTrack</Text>
            <Text style = { styles.text }>Track your volunteering hours and explore new volunteering opportunities!</Text>
            <HomepageSearchBar/>

            <View style={styles.progressBarContainer}>
                <View style={[styles.progressBar, { width: `${progress}%` }]} />
            </View>
            
            <Text style = { styles.hourText }> {totalCompleted}/{totalHours} Hours Completed</Text>
            
            <Text style = { styles.subHeader }>Ongoing Tasks</Text>
            {ongoingTasks.map(task => (
                <Text style = { styles.text } key={task.id}>{task.name}</Text>
            ))}


            <Text style = { styles.subHeader }>Completed Tasks</Text>
            {completedTasks.map(task => (
                <Text style = { styles.text } key={task.id}>{task.name}</Text>
            ))}

            <StatusBar style = "auto" />
            
        </ScrollView>
    );
}

const styles = StyleSheet.create ({
    progressBarContainer: {
        height: 20,
        width: '75%', // 进度条宽度占屏幕宽度的比例
        backgroundColor: '#fafafa', // 进度条未填充部分的颜色
        borderRadius: 20, // 使用较大的半径以获得圆角
        marginVertical: 20, // 进度条与其他组件的垂直间距
        alignSelf: 'center', // 居中显示
        borderWidth: 1, // 边框宽度
        borderColor: colors.primary, // 边框颜色，应与填充的进度条颜色相同
        shadowColor: "#000", // 阴影颜色
        shadowOffset: {
            width: 0, // 水平偏移量
            height: 2, // 垂直偏移量
        },
        shadowOpacity: 0.25, // 阴影不透明度
        shadowRadius: 3.84, // 阴影半径
        elevation: 5, // 仅在 Android 上的阴影高度
        overflow: 'hidden', // 确保子视图不会超出边界
    },
    progressBar: {
        height: '100%',
        backgroundColor: colors.primary,
        borderRadius: 10, // 进度条的圆角
    },
    header: {
        color: colors.primary,
        fontFamily: 'PingFangSC-Semibold', 
        fontSize: 36, 
        marginVertical: 15,
        textAlign: 'center', 
        fontWeight: 'bold',
    }, 
    subHeader: {
        color: colors.primary,
        fontFamily: 'PingFangSC-Semibold', 
        fontSize: 28, 
        marginVertical: 15,
        textAlign: 'center', 
        fontWeight: 'bold',
    }, 
    text: {
        color: colors.textDark, 
        fontFamily: 'PingFangSC-Regular',
        fontSize: 16, 
        marginHorizontal: 60,
        marginBottom: 40, 
        textAlign: 'center'
    },
    hourText: {
        color: colors.textDark, 
        fontFamily: 'PingFangSC-Regular',
        fontSize: 15, 
        marginHorizontal: 60,
        marginBottom: 20, 
        marginTop: -15,
        textAlign: 'center'
    },
    container: {
        flex: 1,
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    icon: {
        width: 60,
        height: 60,
        marginTop: 60,
        marginLeft: 15,
    },
    SettingIcon: {
        width: 60,
        height: 60,
        marginTop: 60,
        marginRight: 15,
    }
})

export default HomepageScreen;