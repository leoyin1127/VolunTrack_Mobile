import React, {useState} from 'react';
import { Keyboard, ScrollView, StyleSheet, Text, View } from 'react-native';
import TaskInputField from '../components/TaskInputField';
import TaskItem from '../components/TaskItem';
import BackToHomeButton from '../components/BackToHomeButton';
import { AsyncStorage } from 'react-native'

const TodoList = () => {
    let [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        if (task == null) return;
        setTasks([...tasks, task]);
        //storeTask(tasks);
        Keyboard.dismiss();
    }

    // const storeTask = async (value) => {
    //     try {
    //         await AsyncStorage.setItem("Todos", JSON.stringify(value));
    //         console.log(JSON.parse(await AsyncStorage.getItem("Todos")));
    //
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    //
    //  const getTask = async () => {
    //     try {
    //         const savedTasks = await AsyncStorage.getItem("Todos");
    //         tasks = AsyncStorage.getItem("Todos", JSON.parse("Todos"));
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    const deleteTask = (deleteIndex) => {
        setTasks(tasks.filter((value, index) => index != deleteIndex));
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>TODO LIST</Text>
            <BackToHomeButton title = "Go back"/>
            <ScrollView style={styles.scrollView}>
                {
                    tasks.map((task, index) => {
                        return (
                            <View key={index} style={styles.taskContainer}>
                                <TaskItem index={index + 1} task={task} deleteTask={() => deleteTask(index)}/>
                            </View>
                        );
                    })
                }
            </ScrollView>
            <TaskInputField addTask={addTask}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#1E2022',
    },
    heading: {
        color: '#1E2022',
        fontSize: 20,
        fontWeight: '600',
        marginTop: 60,
        marginBottom: 10,
        marginLeft: 20,
        
    },
    scrollView: {
        marginBottom: 70,
    },
    taskContainer: {
        marginTop: 20,
    }
});

export default TodoList;