import React from 'react';

import {
	Paper,
	Typography,
    Grid,
    Button,

} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import TempSetDialog from '../TempDialog';

function HeizenBox() {

    const [openTempDialog, setOpenTempDialog] = React.useState(false);

	const handleOpenTempDialog = () => {
		setOpenTempDialog(true);
	};


    return ( 
    <div>

        {/* Change Target Temp Dialog */}
        <TempSetDialog
            openDialog={openTempDialog}
            setOpenDialog={setOpenTempDialog}
        />

        {/* HEIZEN BOX */}
        <Paper sx={{width: "80%", ml: 2, mt: 2}}>
            <Typography variant="h4" sx={{pt: 1, pl: 3}} component="h2">
                Heizen
            </Typography>
            <Grid
                container
                spacing={{md: 3, xs: 2}}
                columns={{xs: 4, sm: 8, md: 12}}
                sx={{p: 1}}
            >
                <Grid item xs={10} sx={{ml: 2, pt: 1, pb: 2}}>
                    <Paper>
                        <Typography sx={{ml: 2}} variant="h6">
                            Ziel: [22°C]
                        </Typography>

                        <Typography variant="h6" sx={{ml: 2}}> 
                            Ø-T: 21,500°
                        </Typography>

                        <Typography variant="h6" sx={{ml: 2}} color={"green"}>
                            - 0,500 °
                        </Typography>
                    </Paper>
                    <Button variant="contained"
                            sx={{mt:2}}
                            size='small'
                            startIcon={<EditIcon/>}
                            color='primary'
                            onClick={handleOpenTempDialog}
                    >
                    Ziel ändern
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    </div>
    );
}

export default HeizenBox;