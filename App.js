import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, Button, Alert } from 'react-native';

export default function App() {
  console.log("App executed");
  return (
    <SafeAreaView style={styles.container}>
      <Button 
        color = 'orange'
        title="Click me!" 
        onPress ={() => Alert.prompt("Title", "Message",
        [
          {text: "Yes", onPress: ()=>alert('Yo')},
          {text: "Maybe", onPress: ()=>alert('Yo')},
        ])} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
