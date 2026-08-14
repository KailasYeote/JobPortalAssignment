import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import GetJobs from "../../components/GetJobs";
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from "react-redux";
import { logout } from "../../redux/userSlice";

export default function Home() {
    const router = useRouter();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        router.replace("/login");
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.logo}>JobPortal</Text>

                <View style={styles.headerActions}>
                    <TouchableOpacity
                        style={styles.postButton}
                        onPress={() => router.push("/postJobs")}
                    >
                        <Text style={styles.postButtonText}>Post Job</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.logoutIconButton}
                        onPress={handleLogout}
                    >
                        <Ionicons name="log-out-outline" size={24} color="#ef4444" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.content}>
                <GetJobs />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f7fb",
    },
    content: {
        flex: 1,
    },
    header: {
        paddingTop: 20,
        paddingBlock: 5,
        height: 60,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
    },

    logo: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#007AFF",
    },

    headerActions: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoutIconButton: {
        marginLeft: 15,
        padding: 5,
    },
    postButton: {
        backgroundColor: "#007AFF",
        paddingHorizontal: 15,
        paddingVertical: 9,
        borderRadius: 8,
    },

    postButtonText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold",
    },
});