import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

import CustomButton from "../components/CustomButton";

export default function App({ navigation }) {
  const [username, setUsername] = useState("User");

  function headerHandler(text) {
    setUsername(text);
    console.log("header: " + username);
    console.log("input: " + text);
  }

  function goToMain() {
    navigation.navigate("Main");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.login_header}>Hola, {username}</Text>
      <TextInput
        onChangeText={headerHandler}
        style={styles.input_login}
        placeholder="Usuario..." />

      <TextInput
        style={styles.input_login}
        placeholder="Contraseña..."
        secureTextEntry={true} />

      <CustomButton text={'Iniciar sesion'} color={'red'} action={goToMain}/>

      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input_login: {
    width: "90%",
    height: 55,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    borderWidth: 1,
    borderRadius: 15,
    fontSize: 20,
    paddingLeft: 10,
    marginBottom: 20
  },
  login_header: {
    fontSize: 35,
    marginBottom:40,
    fontWeight: 'bold'
  }
});