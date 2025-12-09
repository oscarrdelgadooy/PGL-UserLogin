import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import validator from "validator";
import { router } from "expo-router";
import { registerUser } from "../service/Api";
import { RegisterData } from "../types/api_types/RegisterType";

export default function RegisterScreen() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (!validator.isEmail(email)) {
      Alert.alert("Error", "El email no es válido.");
      return;
    }
    if (!validator.isStrongPassword(password)) {
      Alert.alert("Error", "La contraseña no es segura!!!");
      return;
    }

    const userData: RegisterData = {
      fullname: fullName,
      email,
      pswd: password,
    };

    try {
      const data = await registerUser(userData);
      if (data.ok) {
        Alert.alert("Succesful", `Account created! Hello ${fullName}!)`);
        setFullName("")
        setEmail("")
        setPassword("")
        router.push("./(drawer)/welcome");
      }
      if (data.status === 400) {
        Alert.alert("Error", "Incorrect data...");
      }
      if (data.status === 409) {
        Alert.alert("Error", "Email already exists...");
      }
    } catch (error) {
      console.log(error);
    }
  };

    const move =  () => {
    
        router.push("./LoginScreen");

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.label}>FullName</Text>
      <TextInput
        style={styles.input}
        value={fullName}
        onChangeText={setFullName}
      />
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.registerButton} onPress={move}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 40,
    textAlign: "center",
  },
  label: { fontSize: 16, marginBottom: 8, fontWeight: "bold" },
  input: {
    borderWidth: 1,
    borderColor: "#000000ff",
    borderRadius: 20,
    padding: 12,
    marginBottom: 20,
  },
  registerButton: {
    backgroundColor: "#007bff",
    borderRadius: 20,
    padding: 15,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
