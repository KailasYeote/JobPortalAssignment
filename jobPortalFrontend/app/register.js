import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
    ScrollView
} from "react-native";
import { registerUser } from "../redux/userSlice";
import { useDispatch } from 'react-redux'
import { useRouter } from "expo-router"

export default function Register() {
    const [name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const router = useRouter()
    const dispatch = useDispatch()


    const handleRegister = async () => {
        if (!name || !Email || !Password) {
            Alert.alert("Error", "Please fill all fields");
            return;
        }

        const data = {
            name,
            Email,
            Password,
        }

        try {
            const response = await dispatch(registerUser(data))

            Alert.alert("Success", "User registered successfully");
            router.replace('(tabs)/home')


            setName("");
            setEmail("");
            setPassword("");
        } catch (error) {
            console.log(error);
            const errorMsg = error.response?.data?.message || "Registration failed";
            Alert.alert("Error", errorMsg);
        }
    };

    return (
        <ScrollView style={{ backgroundColor: '#fff' }} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <Text style={styles.title}>Create Account</Text>

                <Text style={styles.label}>Name</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Enter your name"
                    value={name}
                    onChangeText={setName}
                />

                <Text style={styles.label}>Email</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    value={Email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <Text style={styles.label}>Password</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Enter your password"
                    value={Password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleRegister}
                >
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        justifyContent: "center",
        backgroundColor: "#fff",
    },

    title: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 35,
    },

    label: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 8,
    },

    input: {
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 20,
        fontSize: 16,
    },

    button: {
        height: 50,
        backgroundColor: "#007AFF",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },

    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});