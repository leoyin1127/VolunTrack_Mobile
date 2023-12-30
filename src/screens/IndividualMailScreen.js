import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// Create a functional component for the chat screen.
const IndividualMailScreen = () => {
  const [messages, setMessages] = useState([]); // State to store chat messages
  const [newMessage, setNewMessage] = useState(''); // State to store the user's new message

  // Function to handle sending a new message
  const sendMessage = () => {
    if (newMessage) {
      setMessages([...messages, { text: newMessage, sender: 'user' }]);
      setNewMessage(''); // Clear the input field
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={item.sender === 'user' ? styles.userMessage : styles.botMessage}>
            <Text>{item.text}</Text>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={newMessage}
          onChangeText={setNewMessage}
        />
        <TouchableOpacity onPress={sendMessage}>
          <Text style={styles.sendButton}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 60,
    marginBottom: 20
  },
  userMessage: {
    backgroundColor: 'lightblue',
    padding: 8,
    borderRadius: 8,
    alignSelf: 'flex-end',
    marginBottom: 8,
  },
  botMessage: {
    backgroundColor: 'lightgray',
    padding: 8,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 16,
    padding: 8,
  },
  sendButton: {
    color: 'blue',
    marginLeft: 8,
  },
});

export default IndividualMailScreen;
