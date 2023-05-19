import { List, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import brauerei, { breweryDataStateTemplate } from '../BrauereiAPI/Brauerei';
import { DATA_UPDATE_EVENT_NAME } from '../consts';

function useEventListener(eventType, handler) {
	useEffect(() => {
		document.addEventListener(eventType, handler);
	}, []);
}

function DebuggingBox() {


    const [breweryStates, setBreweryStates] = React.useState(breweryDataStateTemplate);


    // Listen for BreweryState changes
    useEventListener(DATA_UPDATE_EVENT_NAME, () => {

        // Read States from Brauerei Class
        const newStuff = brauerei.breweryDataState;

        // Set new BrauereiStates
        setBreweryStates(breweryStates => ({
            // Old stuff
            ...breweryStates,
            ...newStuff
        }))
	});


    return (  
        <div>
            <Paper sx={{m:1, p:1}}>
                <Typography variant='h6'>
                    Debugging
                </Typography>
                <List>

                </List>
                <ul>
                    <li>t1: {breweryStates.t1}</li>
                    <li>t2: {breweryStates.t2}</li>
                    <li>motor: {breweryStates.motor}</li>
                    <li>heizstab: {breweryStates.heizstab ? "AN" : "AUS"}</li>
                    <li>zielTemp: {breweryStates.zielTemp}</li>
                    <li>hys+: {breweryStates.hysteresePos}</li>
                    <li>hys-: {breweryStates.hystereseNeg}</li>
                    <li>conStat: {breweryStates.connectionStatus}</li>
                    <li>conPing: {breweryStates.connectionPing}</li>
                </ul>

            </Paper>
        </div>
    );
}

export default DebuggingBox;