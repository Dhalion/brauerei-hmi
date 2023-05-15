import React from 'react';

import {
	Paper,
	Typography,
    Grid,
    Button
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import HystereseDeltaSetDialog from './Dialog_SetHystereseDelta';

function HystereseBox() {

    const [openSetHystereseDeltaDialog, setOpenSetHystereseDeltaDialog] = React.useState(false);

	const handleOpenSetHystereseDeltaDialog = () => {
		setOpenSetHystereseDeltaDialog(true);
	};



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
                            Δ positiv : x°C
                            </Typography>
                        </Paper>
                        <Paper>
                            <Typography
                                sx={{ml: 3, mt: 1}}
                                variant="h6"
                                component="h2"
                            >
                            Δ negativ : x°C
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