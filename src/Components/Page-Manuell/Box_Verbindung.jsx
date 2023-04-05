import { Box, Paper, Typography, Grid, Stack, Divider, FormControl, InputLabel, Input, InputAdornment, TextField, Button } from '@mui/material';
import React from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';

const status = "DISCONNECTED";

const VerbindungBox = () => {
    return ( <div>
        <Box>
            {/* CONNECTION BOX */}
            <Paper sx={{width: "90%",mt: 2}}>
                <Typography variant="h4" sx={{pt: 1, pl: 3}} component="h2">
                    Verbindung
                </Typography>
                <Stack>
                    {/* CONNECTION STATUS */}
                    <Paper sx={{p:1, m: 2}}>
                        <Typography variant='subtitle1' sx={{ml:1}}>
                            Status: 
                        </Typography>
                        <Stack direction={'column'} sx={{ml:3}}>
                            <Typography variant='overline' color={"orangered"}>
                                {status}    
                            </Typography> 
                            <Typography variant='overline'>
                                Ping: 0ms
                            </Typography>

                        </Stack>
                    </Paper>
                        <Divider />

                    {/* CONNECTION MENU */}
                    <Paper sx={{p:1, m: 2}}>
                    <Typography variant='subtitle1' sx={{ml:1, mb:1}}>
                            Verbinden: 
                        </Typography>
                        <Grid direction={'column'} sx={{ml:4}}>
                            <TextField label="IP Brauerei" variant='outlined' size='small' sx={{m:1}}/>                    
                            <Button variant='contained' sx={{m:1}}>Verbinden</Button>
                            <Button variant='contained' sx={{m:1, mb:3}}>Auto Connect</Button>
                        </Grid>
                    </Paper>
                </Stack>
            </Paper>
        </Box>
    </div>
    );
}

export default VerbindungBox;