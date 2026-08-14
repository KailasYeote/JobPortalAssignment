import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useDispatch } from "react-redux";
import { submitApplication } from "../redux/jobSlice";

export default function ApplyJobScreen() {
    const { jobTitle, jobId } = useLocalSearchParams();
    const router = useRouter();
    const dispatch = useDispatch();

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [experience, setExperience] = useState("");
    const [resumeUrl, setResumeUrl] = useState("");
    const [coverLetter, setCoverLetter] = useState("");

    const handleApply = async () => {
        if (!fullName || !email || !phoneNumber) {
            Alert.alert("Error", "Please fill in all required fields (Name, Email, Phone).");
            return;
        }

        try {
            const payload = { jobId, fullName, email, phoneNumber, experience, resumeUrl, coverLetter };
            await dispatch(submitApplication(payload)).unwrap();
            
            Alert.alert("Success", "Application submitted successfully!");
            router.back();
        } catch (error) {
            Alert.alert("Error", "Failed to submit application.");
            console.log("Submit error:", error);
        }
    };

    return (
        <KeyboardAvoidingView 
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="#111827" />
                </TouchableOpacity>
                <Text style={styles.title}>Apply for Role</Text>
                <View style={{width: 24}} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                
                <View style={styles.jobInfoCard}>
                    <Text style={styles.jobInfoText}>Applying for:</Text>
                    <Text style={styles.jobTitleText}>{jobTitle || "Job"}</Text>
                </View>

                <Text style={styles.label}>Full Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="John Doe"
                    value={fullName}
                    onChangeText={setFullName}
                />

                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="john@example.com"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />

                <Text style={styles.label}>Phone Number</Text>
                <TextInput
                    style={styles.input}
                    placeholder="+1 234 567 8900"
                    keyboardType="phone-pad"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                />

                <Text style={styles.label}>Experience (Years)</Text>
                <TextInput
                    style={styles.input}
                    placeholder="e.g. 2"
                    keyboardType="numeric"
                    value={experience}
                    onChangeText={setExperience}
                />

                <Text style={styles.label}>Resume URL</Text>
                <TextInput
                    style={styles.input}
                    placeholder="https://linkedin.com/in/johndoe"
                    autoCapitalize="none"
                    value={resumeUrl}
                    onChangeText={setResumeUrl}
                />

                <Text style={styles.label}>Cover Letter</Text>
                <TextInput
                    style={[styles.input, styles.textArea]}
                    placeholder="Why are you a good fit for this role?"
                    multiline
                    numberOfLines={4}
                    textAlignVertical="top"
                    value={coverLetter}
                    onChangeText={setCoverLetter}
                />

                <TouchableOpacity style={styles.submitButton} onPress={handleApply}>
                    <Text style={styles.submitButtonText}>Submit Application</Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#f3f4f6',
    },
    backButton: {
        padding: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#111827',
    },
    scrollContent: {
        padding: 20,
        paddingBottom: 40,
    },
    jobInfoCard: {
        backgroundColor: '#f0fdf4',
        padding: 15,
        borderRadius: 8,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#dcfce7',
    },
    jobInfoText: {
        fontSize: 14,
        color: '#166534',
        marginBottom: 4,
    },
    jobTitleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#14532d',
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#374151',
        marginBottom: 6,
        marginTop: 12,
    },
    input: {
        borderWidth: 1,
        borderColor: '#d1d5db',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 15,
        color: '#111827',
        backgroundColor: '#f9fafb',
    },
    textArea: {
        minHeight: 100,
    },
    submitButton: {
        backgroundColor: '#2563eb',
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 25,
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
