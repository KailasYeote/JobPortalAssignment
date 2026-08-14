import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function JobDetails({ jobId }) {
    const jobs = useSelector((state) => state.job.job) || [];
    const job = jobs.find(j => j._id === jobId);
    const router = useRouter();

    if (!job) {
        return (
            <View style={styles.center}>
                <Text>Job not found!</Text>
                <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 20 }}>
                    <Text style={{ color: 'blue' }}>Go Back</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="#111827" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Job Details</Text>
                <View style={{ width: 24 }} />
            </View>

            <View style={styles.content}>
                <Text style={styles.jobTitle}>{job.jobTitle}</Text>
                <Text style={styles.companyName}>{job.companyName}</Text>

                <View style={styles.infoRow}>
                    <Ionicons name="location-outline" size={20} color="#6b7280" />
                    <Text style={styles.infoText}>{job.Location}</Text>
                </View>

                <View style={styles.infoRow}>
                    <Ionicons name="briefcase-outline" size={20} color="#6b7280" />
                    <Text style={styles.infoText}>{job.experience} Experience</Text>
                </View>

                <View style={styles.infoRow}>
                    <Ionicons name="cash-outline" size={20} color="#6b7280" />
                    <Text style={styles.infoText}>{job.salary}</Text>
                </View>

                <View style={styles.infoRow}>
                    <Ionicons name="time-outline" size={20} color="#6b7280" />
                    <Text style={styles.infoText}>{job.jobType}</Text>
                </View>

                <View style={styles.divider} />

                <Text style={styles.sectionTitle}>Skills Required</Text>
                <Text style={styles.skills}>{job.skills}</Text>



            </View>

            <View style={styles.footer}>
                <TouchableOpacity 
                    style={styles.applyButton}
                    onPress={() => router.push({ pathname: '/applyJob', params: { jobId: job._id, jobTitle: job.jobTitle } })}
                >
                    <Text style={styles.applyButtonText}>Apply Now</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#f9fafb',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#f3f4f6',
    },
    backButton: {
        padding: 5,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#111827',
    },
    content: {
        padding: 20,
        backgroundColor: '#fff',
        marginTop: 10,
    },
    jobTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#111827',
        marginBottom: 5,
    },
    companyName: {
        fontSize: 18,
        color: '#3b82f6',
        marginBottom: 20,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    infoText: {
        fontSize: 16,
        color: '#4b5563',
        marginLeft: 10,
    },
    divider: {
        height: 1,
        backgroundColor: '#e5e7eb',
        marginVertical: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#111827',
        marginBottom: 10,
    },
    skills: {
        fontSize: 16,
        color: '#4b5563',
        lineHeight: 24,
    },
    description: {
        fontSize: 16,
        color: '#4b5563',
        lineHeight: 24,
    },
    footer: {
        padding: 20,
        backgroundColor: '#fff',
        marginTop: 20,
        borderTopWidth: 1,
        borderTopColor: '#e5e7eb',
    },
    applyButton: {
        backgroundColor: '#2563eb',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    applyButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
