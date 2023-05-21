import React, { useEffect } from 'react';

import {
	Paper,
	Typography,
    Grid,
    Button
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import HystereseDeltaSetDialog from './Dialog_SetHystereseDelta';
import brauerei from '../../BrauereiAPI/Brauerei';
import { DATA_UPDATE_EVENT_NAME } from '../../consts';


function useEventListener(eventType, handler) {
	useEffect(() => {
		document.addEventListener(eventType, handler);
	}, []);
}


function HystereseBox() {

    const [openSetHystereseDeltaDialog, setOpenSetHystereseDeltaDialog] = React.useState(false);
    const [hysteresePos, setHysteresePos] = React.useState(brauerei.breweryDataState.hysteresePos);
	const [hystereseNeg, setHystereseNeg] = React.useState(brauerei.breweryDataState.hystereseNeg);


	const handleOpenSetHystereseDeltaDialog = () => {
		setOpenSetHystereseDeltaDialog(true);
	};
    useEventListener(DATA_UPDATE_EVENT_NAME, () => {
		// And set new Value when event was received
		setHysteresePos(brauerei.breweryDataState.hysteresePos);
		setHystereseNeg(brauerei.breweryDataState.hystereseNeg);

	});

    return (  
        <div>

            {/* Set Hysterese Delta Dialog */}
            <HystereseDeltaSetDialog 
                openDialog={openSetHystereseDeltaDialog}
                setOpenDialog={setOpenSetHystereseDeltaDialog}
            />

            {/* HYSTERESE BOX */}
            <Paper sx={{width: "80%", ml: 2, mt: 2}}>
                <Typography variant="h4" sx={{pt: 1, pl: 3, pb: 0}} component="h2">
                    Hysterese
                </Typography>
                <Grid
                    container
                    spacing={{md: 3, xs: 2}}
                    columns={{xs: 4, sm: 8, md: 12}}
                    sx={{p: 1}}
                >
                    <Grid item xs={10} sx={{ml: 2, pt: 1, pb: 2}}>
                        <Paper>
                            <Typography 
                                sx={{ml: 3}}
                                variant="h6"
                                component="h2">
                            Δ positiv : {hysteresePos} °C
                            </Typography>
                        </Paper>
                        <Paper>
                            <Typography
                                sx={{ml: 3, mt: 1}}
                                variant="h6"
                                component="h2"
                            >
                            Δ negativ : {hystereseNeg} °C
                            </Typography>
                        </Paper>
                        <Button variant="contained"
                            sx={{mt:2}}
                            size='small'
                            startIcon={<EditIcon/>}
                            color='primary'
                            onClick={handleOpenSetHystereseDeltaDialog}
                        >
                            Δ ändern
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

export default HystereseBox;