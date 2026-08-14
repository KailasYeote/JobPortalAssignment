import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AboutScreen() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
                <View style={styles.iconContainer}>
                    <Ionicons name="briefcase" size={50} color="#2563eb" />
                </View>
                <Text style={styles.title}>JobPortal</Text>
                <Text style={styles.version}>Version 1.0.0</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Our Mission</Text>
                <Text style={styles.description}>
                    We believe finding a job should be transparent, quick, and easy. 
                    Our platform connects talented professionals with top companies 
                    around the world, removing the friction from the hiring process.
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Key Features</Text>
                
                <View style={styles.featureItem}>
                    <Ionicons name="search-outline" size={24} color="#4b5563" />
                    <Text style={styles.featureText}>Discover thousands of active jobs</Text>
                </View>
                
                <View style={styles.featureItem}>
                    <Ionicons name="bookmark-outline" size={24} color="#4b5563" />
                    <Text style={styles.featureText}>Bookmark jobs to apply later</Text>
                </View>

                <View style={styles.featureItem}>
                    <Ionicons name="paper-plane-outline" size={24} color="#4b5563" />
                    <Text style={styles.featureText}>Apply with a single tap</Text>
                </View>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.contactButton} onPress={() => Linking.openURL('mailto:support@jobportal.com')}>
                    <Ionicons name="mail-outline" size={20} color="#fff" />
                    <Text style={styles.contactText}>Contact Support</Text>
                </TouchableOpacity>
                <Text style={styles.copyright}>© 2026 JobPortal Inc. All rights reserved.</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9fafb',
    },
    content: {
        padding: 24,
        paddingTop: 60,
        paddingBottom: 40,
    },
    header: {
        alignItems: 'center',
        marginBottom: 40,
    },
    iconContainer: {
        width: 100,
        height: 100,
        backgroundColor: '#eff6ff',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#111827',
        marginBottom: 4,
    },
    version: {
        fontSize: 14,
        color: '#6b7280',
        fontWeight: '500',
    },
    section: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1f2937',
        marginBottom: 12,
    },
    description: {
        fontSize: 15,
        color: '#4b5563',
        lineHeight: 24,
    },
    featureItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    featureText: {
        fontSize: 15,
        color: '#4b5563',
        marginLeft: 12,
        flex: 1,
    },
    footer: {
        marginTop: 10,
        alignItems: 'center',
    },
    contactButton: {
        flexDirection: 'row',
        backgroundColor: '#2563eb',
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 24,
        width: '100%',
        justifyContent: 'center',
        shadowColor: '#2563eb',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
    },
    contactText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 8,
    },
    copyright: {
        fontSize: 12,
        color: '#9ca3af',
        textAlign: 'center',
    }
});