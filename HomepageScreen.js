import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
    Image, 
    StyleSheet, 
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import colors from '../../assets/colors/colors';
import HomepageSearchBar from '../components/HomepageSearchBar';
import Slider from "@react-native-community/slider";

const HomepageScreen = ({navigation}) => {

    const target = 100;
    const [range, setRange] = useState('0 / ' + target + ' Hours Completed!');

    return(
        <View>
            <TouchableOpacity onPress = { () => navigation.navigate('AboutUsScreen')}>
                <Image source = {require('../../assets/adaptive-icon-cropped.png')} style = {{
                    width: 60,
                    height: 60,
                    marginTop: 60,
                    marginLeft: 15,
                }}/>
            </TouchableOpacity>
            <Text style = { styles.header }>VolunTrack</Text>
            <Text style = { styles.text }>Track your volunteering hours and explore new volunteering opportunities!</Text>
            <HomepageSearchBar/>

            <View style={styles.progressBarContainer}>
                <View style={[styles.progressBar, { width: `${range}%` }]} />
            </View>
            
            <Text style = { styles.progressText }> {range} </Text>
            <Text style = { styles.streakText }> Track your progress using the slider below ... </Text>
            <Slider
                style = {{ width: '75%', height: 40, alignSelf: 'center'}}
                minimumValue = {0}
                maximumValue = {target}
                minimumTrackTintColor = "06b6d4"
                maximumTrackTintColor = "cbd5e1"
                value = {0}
                onValueChange = {value => setRange(parseInt(value) + ' / ' + target + ' Hours Completed!')}
            />
            <StatusBar style = "auto" />
        </View>
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
    text: {
        color: colors.textDark, 
        fontFamily: 'PingFangSC-Regular',
        fontSize: 16, 
        marginHorizontal: 60,
        marginBottom: 40, 
        textAlign: 'center'
    },
    progressText: {
        color: colors.textDark, 
        fontFamily: 'PingFangSC-Regular',
        fontSize: 15, 
        marginBottom: 40, 
        textAlign: 'center'
    }, 
    streakText: {
        color: colors.textDark, 
        fontFamily: 'PingFangSC-Regular',
        fontSize: 15, 
        marginTop: 20, 
        textAlign: 'center'
    }, 
})

export default HomepageScreen;