import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import JobDetails from '../../components/JobDetails';

export default function JobRoute() {
    const { id } = useLocalSearchParams();
    
    return <JobDetails jobId={id} />;
}
