import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import { toggleSavedJob, logout } from "../../redux/userSlice";

export default function Profile() {
    const user = useSelector((state) => state.user.user);
    const savedJobs = useSelector((state) => state.user.savedJobs) || [];
    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogout = () => {
        dispatch(logout());
        router.replace("/login");
    };

    if (!user) {
        return (
            <View style={styles.centerContainer}>
                <Text style={styles.title}>Not Logged In</Text>
            </View>
        );
    }

    const renderSavedJob = ({ item }) => (
        <View style={styles.card}>
            <TouchableOpacity onPress={() => router.push(`/job/${item._id}`)}>
                <View style={styles.cardHeader}>
                    <Text style={styles.jobTitle}>{item.jobTitle}</Text>
                </View>
                <Text style={styles.companyName}>{item.companyName}</Text>
            </TouchableOpacity>
            <Text style={styles.details}>{item.Location} • {item.experience}</Text>
            <Text style={styles.salary}>{item.salary}</Text>

            <View style={styles.actionContainer}>
                <TouchableOpacity 
                    style={styles.applyButton}
                    onPress={() => router.push({ pathname: '/applyJob', params: { jobId: item._id, jobTitle: item.jobTitle } })}
                >
                    <Text style={styles.applyButtonText}>Apply</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.saveIconButton}
                    onPress={() => dispatch(toggleSavedJob(item))}
                >
                    <Ionicons name="bookmark" size={24} color="#2563eb" />
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.userInfo}>
                    <Ionicons name="person-circle" size={60} color="#007AFF" />
                    <View style={styles.userTextContainer}>
                        <Text style={styles.greeting}>Hello,</Text>
                        <Text style={styles.userName}>{user.name || "User"}</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                    <Ionicons name="log-out-outline" size={20} color="#fff" />
                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <Text style={styles.sectionTitle}>
                    Saved Jobs ({savedJobs.length})
                </Text>

                <FlatList
                    data={savedJobs}
                    keyExtractor={(item) => item._id}
                    renderItem={renderSavedJob}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={
                        <View style={styles.emptyContainer}>
                            <Ionicons name="bookmark-outline" size={50} color="#ccc" />
                            <Text style={styles.emptyText}>No saved jobs yet</Text>
                            <Text style={styles.emptySubText}>Jobs you save will appear here</Text>
                        </View>
                    }
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f7fb",
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    header: {
        backgroundColor: "#fff",
        padding: 20,
        paddingTop: 40,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
    },
    userInfo: {
        flexDirection: "row",
        alignItems: "center",
    },
    userTextContainer: {
        marginLeft: 12,
    },
    greeting: {
        fontSize: 14,
        color: "#6b7280",
    },
    userName: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#111827",
    },
    logoutButton: {
        flexDirection: 'row',
        backgroundColor: "#ef4444",
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 8,
        alignItems: 'center',
    },
    logoutText: {
        color: "#fff",
        fontWeight: "bold",
        marginLeft: 5,
    },
    content: {
        flex: 1,
        padding: 15,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#374151",
        marginBottom: 15,
    },
    card: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    cardHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
    },
    jobTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#111827",
        flex: 1,
    },
    companyName: {
        fontSize: 16,
        color: "#374151",
        marginTop: 4,
    },
    details: {
        fontSize: 14,
        color: "#6b7280",
        marginTop: 6,
    },
    salary: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#2563eb",
        marginTop: 6,
    },
    actionContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 15,
        paddingTop: 15,
        borderTopWidth: 1,
        borderTopColor: "#f3f4f6",
    },
    applyButton: {
        backgroundColor: "#2563eb",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        flex: 1,
        marginRight: 15,
        alignItems: "center",
    },
    applyButtonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 15,
    },
    saveIconButton: {
        padding: 8,
        backgroundColor: "#e0e7ff",
        borderRadius: 8,
    },
    emptyContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
    },
    emptyText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#6b7280",
        marginTop: 10,
    },
    emptySubText: {
        fontSize: 14,
        color: "#9ca3af",
        marginTop: 5,
    }
});