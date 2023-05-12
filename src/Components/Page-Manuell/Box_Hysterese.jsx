import React from 'react';

import {
	Paper,
	Typography,
    Grid,

} from "@mui/material";

function HystereseBox() {
    return (  
        <div>
            {/* HYSTERESE BOX */}
            <Paper sx={{width: "80%", ml: 2, mt: 2}}>
                <Typography variant="h4" sx={{pt: 1, pl: 3, pb: 2}} component="h2">
                    Hysterese
                </Typography>
                <Grid
                    container
                    spacing={{md: 3, xs: 2}}
                    columns={{xs: 4, sm: 8, md: 12}}
                    sx={{p: 1}}
                >
                    <Grid item xs={10} sx={{ml: 4, pt: 2, pb: 2}}>
                        <Paper>
                            <Typography sx={{ml: 2}} variant="subheader" component="h2">
                                + : x°C
                            </Typography>
                        </Paper>
                        <Paper>
                            <Typography
                                sx={{ml: 2, mt: 1}}
                                variant="subheader"
                                component="h2"
                            >
                                - : x°C
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

export default HystereseBox;