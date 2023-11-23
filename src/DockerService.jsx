import React, { useEffect, useState } from 'react';

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
        // Simulate the build process (replace with actual build commands)
        setTimeout(() => {
            setStatus('Docker Image built successfully!');
        }, 3000);
    };

    const dockerCompose = () => {
        setStatus('Running Docker Compose...');
        // Simulate the docker-compose process (replace with actual compose commands)
        setTimeout(() => {
            setStatus('Docker Compose completed successfully!');
        }, 3000);
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
        const eventSource = new EventSource('/var/run/docker.sock/events');
        eventSource.addEventListener('message', () => {
            retrieveInfo();
        });

        // Cleanup on unmount
        return () => {
            eventSource.close();
        };
    }, []);

    return (
        <div>
            <h1>Docker Plugin Interface (React)</h1>
            <div id="status">{status}</div>
            <button onClick={buildDocker}>Build Docker Image</button>
            <button onClick={dockerCompose}>Docker Compose</button>
            <div className="container-fluid">
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
