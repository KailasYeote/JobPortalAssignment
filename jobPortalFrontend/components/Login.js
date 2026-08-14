import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Alert
} from "react-native";
import { useRouter } from 'expo-router';
import { userLogin, logout } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from '@expo/vector-icons';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const dispatch = useDispatch();


    const user = useSelector((state) => state.user.user);

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert("Error", "Please enter your email and password");
            return;
        }

        try {
            const userPayload = { email, password };

            await dispatch(userLogin(userPayload)).unwrap();
            console.log("User logged in successfully...");
            router.replace("/(tabs)/home");
        } catch (e) {
            Alert.alert("Error", "Login failed. Please check your credentials.");
        }
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    if (user) {
        return (
            <ScrollView style={{ backgroundColor: '#fff' }} contentContainerStyle={styles.profileContainer}>
                <Ionicons name="person-circle-outline" size={100} color="#007AFF" style={{ marginBottom: 20 }} />
                <Text style={styles.title}>Hello there!</Text>
                <Text style={styles.subtitle}>You are currently logged in.</Text>

                <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }

    return (
        <ScrollView style={{ backgroundColor: '#fff' }} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>

                <Text style={styles.title}>Welcome Back</Text>
                <Text style={styles.subtitle}>Login to your account</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Enter Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Enter Password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={handleLogin}
                >
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>
                        Forgot Password?
                    </Text>
                </TouchableOpacity>

                <View style={styles.registerContainer}>
                    <Text>Don't have an account? </Text>

                    <TouchableOpacity onPress={() => router.push("/register")}>
                        <Text style={styles.registerText}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#fff",
    },
    profileContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: "#777",
        textAlign: "center",
        marginBottom: 30,
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
    },
    loginButton: {
        height: 50,
        backgroundColor: "#007AFF",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },
    logoutButton: {
        height: 50,
        backgroundColor: "#ef4444",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
        marginTop: 30,
    },
    loginText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    logoutText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    forgotPassword: {
        textAlign: "center",
        color: "#007AFF",
        marginTop: 20,
    },
    registerContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 30,
    },
    registerText: {
        color: "#007AFF",
        fontWeight: "bold",
    },
});
