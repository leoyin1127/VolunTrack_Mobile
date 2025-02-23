import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [periodStart, setPeriodStart] = useState('');
  const [periodEnd, setPeriodEnd] = useState('');

  // Load saved dates on component mount
  useEffect(() => {
    const loadSavedDates = async () => {
      try {
        const storedStart = await AsyncStorage.getItem('@selectedStartDate');
        const storedEnd = await AsyncStorage.getItem('@selectedEndDate');
        if (storedStart) setPeriodStart(storedStart);
        if (storedEnd) setPeriodEnd(storedEnd);
      } catch (error) {
        console.error('Failed to load saved dates:', error);
      }
    };
    loadSavedDates();
  }, []);

  // Configure locale (optional)
  LocaleConfig.locales['en'] = {
    monthNames: [
      'January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December',
    ],
    monthNamesShort: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    ],
    dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  };
  LocaleConfig.defaultLocale = 'en';

  // Handle date selection
  const handleDayPress = (day) => {
    if (!periodStart) {
      setPeriodStart(day.dateString);
      setPeriodEnd('');
    } else if (!periodEnd && day.dateString >= periodStart) {
      setPeriodEnd(day.dateString);
    } else {
      setPeriodStart(day.dateString);
      setPeriodEnd('');
    }
    setSelectedDate(day.dateString);
  };

  const handleReset = async () => {
    setPeriodStart('');
    setPeriodEnd('');
    setSelectedDate('');
    await AsyncStorage.removeItem('@selectedStartDate');
    await AsyncStorage.removeItem('@selectedEndDate');
  };

  // Save selected dates to AsyncStorage
  const saveDates = async () => {
    try {
      await AsyncStorage.setItem('@selectedStartDate', periodStart);
      await AsyncStorage.setItem('@selectedEndDate', periodEnd || periodStart);
    } catch (error) {
      console.error('Failed to save dates:', error);
    }
  };

  // Mark selected period
  const getMarkedDates = () => {
    let markedDates = {};
    if (periodStart && periodEnd) {
      let currentDate = new Date(periodStart);
      while (currentDate <= new Date(periodEnd)) {
        const dateString = currentDate.toISOString().split('T')[0];
        if (dateString === periodStart) {
          // Mark the first date as startingDay
          markedDates[dateString] = { startingDay: true, color: '#884EFE', textColor: 'white' };
        } else if (dateString === periodEnd) {
          // Mark the last date as endingDay
          markedDates[dateString] = { endingDay: true, color: '#884EFE', textColor: 'white' };
        } else {
          // Mark dates in between
          markedDates[dateString] = { color: '#E8DCFF', textColor: 'black' };
        }
        currentDate.setDate(currentDate.getDate() + 1);
      }
    } else if (periodStart) {
      // Mark a single selected date
      markedDates[periodStart] = { startingDay: true, endingDay: true, color: '#884EFE', textColor: 'white' };
    }
    return markedDates;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>When</Text>
        <TouchableOpacity onPress={handleReset} style={styles.resetButton}>
          <Ionicons name={'reload-outline'} size={25} color={'#000000'} />
        </TouchableOpacity>
      </View>
      {/* Top Line */}
      <View style={styles.line} />
      <Calendar
        current={selectedDate || new Date().toISOString().split('T')[0]}
        onDayPress={handleDayPress}
        markedDates={getMarkedDates()}
        markingType="period"
        theme={{
          selectedDayBackgroundColor: '#F6F1FF',
          todayTextColor: 'black',
          arrowColor: '#884EFE',
        }}
        style={{ marginVertical: 15 }}
      />
      {/* Bottom Line */}
      <View style={styles.line} />
      <View style={styles.selectedDatesContainer}>
        <Text style={styles.selectedDatesText}>
          Selected Period: {periodStart} to {periodEnd || periodStart}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.confirmButton}
        onPress={saveDates}
      >
        <Text style={styles.confirmButtonText}>Confirm Selection</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  line: {
    borderBottomWidth: 0.7,
    borderBottomColor: '#D9D9D9',
  },
  selectedDatesContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
  },
  selectedDatesText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
  confirmButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#884EFE',
    borderRadius: 10,
    alignItems: 'center',
  },
  confirmButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default DatePicker;
