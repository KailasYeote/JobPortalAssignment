import { Text, View, StyleSheet, FlatList, TouchableOpacity, TextInput } from "react-native";
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllJobs } from "../redux/jobSlice";
import { toggleSavedJob } from "../redux/userSlice";

export default function GetJobs() {
    const [searchQuery, setSearchQuery] = useState("");
    const jobs = useSelector((state) => state.job.job) || [];
    const savedJobs = useSelector((state) => state.user.savedJobs) || [];
    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        dispatch(getAllJobs());
    }, []);

    const renderJob = ({ item }) => {
        const isSaved = savedJobs.some(j => j._id === item._id);

        return (
            <View style={styles.card}>
                <TouchableOpacity onPress={() => router.push(`/job/${item._id}`)}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.jobTitle}>{item.jobTitle}</Text>
                    </View>
                    <Text style={styles.companyName}>{item.companyName}</Text>
                </TouchableOpacity>
                <Text style={styles.details}>{item.Location} • {item.experience}</Text>
                <Text style={styles.salary}>{item.salary}</Text>
                <Text style={styles.skills}>{item.skills}</Text>

                <View style={styles.actionContainer}>
                    <TouchableOpacity 
                        style={styles.applyButton}
                        onPress={() => router.push({ pathname: '/applyJob', params: { jobId: item._id, jobTitle: item.jobTitle } })}
                    >
                        <Text style={styles.applyButtonText}>Apply Now</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.saveIconButton}
                        onPress={() => dispatch(toggleSavedJob(item))}
                    >
                        <Ionicons 
                            name={isSaved ? "bookmark" : "bookmark-outline"} 
                            size={24} 
                            color={isSaved ? "#2563eb" : "#6b7280"} 
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    const filteredJobs = jobs.filter(job => 
        job.jobTitle && job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <Ionicons name="search" size={20} color="#6b7280" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search by job title..."
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    clearButtonMode="while-editing"
                />
            </View>
            <FlatList
                data={filteredJobs}
                keyExtractor={(item) => item._id}
                renderItem={renderJob}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={<Text style={styles.emptyText}>No jobs available</Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        margin: 15,
        marginBottom: 5,
        borderRadius: 8,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: '#e5e7eb',
    },
    searchIcon: {
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        height: 44,
        fontSize: 16,
        color: '#111827',
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
    skills: {
        fontSize: 14,
        color: "#4b5563",
        marginTop: 6,
        fontStyle: "italic",
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
        backgroundColor: "#f3f4f6",
        borderRadius: 8,
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
    emptyText: {
        textAlign: "center",
        marginTop: 20,
        color: "#6b7280",
    }
});