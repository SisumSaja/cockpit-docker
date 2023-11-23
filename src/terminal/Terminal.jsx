import React, {useState} from "react";
import cockpit from 'cockpit'

export function Terminal({logs}){

    const [terminalOutput, setTerminalOutput] = useState('');

    const runCommand = async () => {
        try {
            const command = 'ls'; // Replace with your desired command
            const result = await cockpit.spawn(command);

            // Append the result to the terminal output
            setTerminalOutput(prevOutput => `${prevOutput}\n${result}`);
        } catch (error) {
            console.error('Error running command:', error);
        }
    };

    return(
        <div>
            <button onClick={runCommand}>Run Command</button>
            <hr />
            <cockpit.Terminal>{terminalOutput}</cockpit.Terminal>
        </div>
    )
}