import React, { useEffect, useState } from 'react';
import './DockerService.css';
import cockpit from "cockpit";

const DockerService = () => {
    const [status, setStatus] = useState('');
    const [dockerInfo, setDockerInfo] = useState({
        memTotal: '?',
        NGoroutines: '?',
        NFd: '?',
        Containers: '?',
        Images: '?',
    });

    const buildDocker = () => {
        setStatus('Building Docker Image...');
        cockpit.spawn(['your_build_command']).done((data) => {
            setStatus('Docker Image built successfully!');
        });
    };

    const dockerCompose = () => {
        setStatus('Running Docker Compose...');
        cockpit.spawn(['your_docker_compose_command']).done((data) => {
            setStatus('Docker Compose completed successfully!');
        });
    };

    async function retrieveInfo() {
        try {
            const response = await fetch('/var/run/docker.sock/info', { method: 'GET' });
            const data = await response.json();
            setDockerInfo(data);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    useEffect(() => {
        // Initial retrieval
        retrieveInfo();

        // Event listener for updates
        const dockerEvents = new EventSource('/var/run/docker.sock/events');
        dockerEvents.addEventListener('message', () => {
            retrieveInfo();
        });

        // Cleanup on unmount
        return () => {
            dockerEvents.close();
        };
    }, []);

    return (
        <div className="docker-service-container">
            <h1>Docker Plugin Interface (React)</h1>
            <div id="status" className="status">{status}</div>
            <button className="docker-button" onClick={buildDocker}>Build Docker Image</button>
            <button className="docker-button" onClick={dockerCompose}>Docker Compose</button>
            <div className="docker-info-container">
                <h2>Docker Daemon Info</h2>
                <ul>
                    <li>Total Memory: <span>{dockerInfo.memTotal}</span></li>
                    <li>Go Routines: <span>{dockerInfo.NGoroutines}</span></li>
                    <li>File Descriptors: <span>{dockerInfo.NFd}</span></li>
                    <li>Containers: <span>{dockerInfo.Containers}</span></li>
                    <li>Images: <span>{dockerInfo.Images}</span></li>
                </ul>
            </div>
        </div>
    );
};

export default DockerService;
