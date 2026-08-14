import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Alert,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import { saveJobs, getAllJobs } from "../redux/jobSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "expo-router";

export default function PostJob() {
    const [jobTitle, setJobTitle] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [Location, setLocation] = useState("");
    const [experience, setExperience] = useState("");
    const [salary, setSalary] = useState("");
    const [jobType, setJobType] = useState("");
    const [skills, setSkills] = useState("");
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()
    const router = useRouter()

    const handlePostJob = async () => {
        if (
            !jobTitle ||
            !companyName ||
            !Location ||
            !experience ||
            !salary ||
            !jobType ||
            !skills
        ) {
            Alert.alert("Error", "Please fill all fields");
            return;
        }

        try {
            setLoading(true);

            const jobData = {
                jobTitle,
                companyName,
                Location,
                experience,
                salary,
                jobType,
                skills,
            };

            const response = await dispatch(saveJobs(jobData))

            console.log("Job posted:", response.payload);

            if (response.meta?.requestStatus === "rejected") {
                throw new Error(response.payload || "Failed to post job");
            }

            Alert.alert("Success", "Job posted successfully", [
                {
                    text: "OK",
                    onPress: () => {
                        dispatch(getAllJobs());
                        router.replace("/(tabs)/home");
                    },
                },
            ]);

            setJobTitle("");
            setCompanyName("");
            setLocation("");
            setExperience("");
            setSalary("");
            setJobType("");
            setSkills("");

        } catch (error) {
            console.log("Post job error:", error);

            Alert.alert(
                "Error",
                error.response?.data?.message || "Failed to post job"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
            >
            <Text style={styles.title}>Post a Job</Text>

            <Text style={styles.subtitle}>
                Find the right candidate for your company
            </Text>

            <Text style={styles.label}>Job Title</Text>

            <TextInput
                style={styles.input}
                placeholder="e.g. React Native Developer"
                value={jobTitle}
                onChangeText={setJobTitle}
            />

            <Text style={styles.label}>Company Name</Text>

            <TextInput
                style={styles.input}
                placeholder="e.g. ABC Technologies"
                value={companyName}
                onChangeText={setCompanyName}
            />

            <Text style={styles.label}>Location</Text>

            <TextInput
                style={styles.input}
                placeholder="e.g. Pune"
                value={Location}
                onChangeText={setLocation}
            />

            <Text style={styles.label}>Experience</Text>

            <TextInput
                style={styles.input}
                placeholder="e.g. 0-2 Years"
                value={experience}
                onChangeText={setExperience}
            />

            <Text style={styles.label}>Salary</Text>

            <TextInput
                style={styles.input}
                placeholder="e.g. 4-6 LPA"
                value={salary}
                onChangeText={setSalary}
            />

            <Text style={styles.label}>Job Type</Text>

            <TextInput
                style={styles.input}
                placeholder="e.g. Full Time"
                value={jobType}
                onChangeText={setJobType}
            />

            <Text style={styles.label}>Skills</Text>

            <TextInput
                style={[styles.input, styles.skillsInput]}
                placeholder="e.g. React, React Native, JavaScript"
                value={skills}
                onChangeText={setSkills}
                multiline
            />

            <TouchableOpacity
                style={styles.button}
                onPress={handlePostJob}
                disabled={loading}
            >
                <Text style={styles.buttonText}>
                    {loading ? "Posting..." : "Post Job"}
                </Text>
            </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f7fb",
    },

    content: {
        padding: 20,
        paddingTop: 50,
        paddingBottom: 40,
    },

    title: {
        fontSize: 28,
        fontWeight: "700",
        color: "#111827",
    },

    subtitle: {
        fontSize: 14,
        color: "#6b7280",
        marginTop: 5,
        marginBottom: 25,
    },

    label: {
        fontSize: 15,
        fontWeight: "600",
        color: "#374151",
        marginBottom: 7,
        marginTop: 12,
    },

    input: {
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: "#e5e7eb",
        borderRadius: 10,
        paddingHorizontal: 14,
        paddingVertical: 13,
        fontSize: 15,
        color: "#111827",
    },

    skillsInput: {
        height: 90,
        textAlignVertical: "top",
    },

    button: {
        backgroundColor: "#2563eb",
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 25,
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "700",
    },
});