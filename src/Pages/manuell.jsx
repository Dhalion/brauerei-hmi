import {Box, Paper, Toolbar, Typography, Grid} from "@mui/material";
import React from "react";
import HeizstabBox from "../Components/Page-Manuell/Box_Heizstab";
import RührwerkBox from "../Components/Page-Manuell/Box_Rührwerk";
import VerbindungBox from "../Components/Page-Manuell/Box_Verbindung";
import TemperaturBox from "../Components/Page-Manuell/Box_Temperatur";
import HeizenBox from "../Components/Page-Manuell/Box_Heizen";
import HystereseBox from "../Components/Page-Manuell/Box_Hysterese";

const Manuell = () => {
	return (
		<Box component="main" sx={{flexGrow: 1, mr: 0}}>
			<Toolbar />
			<Typography variant="h3" component="h2" mt={4} ml={4}>
				Manueller Modus
			</Typography>

			<Grid container sx={{pl:4}}>
				<Grid xs={3}>
					<TemperaturBox />
					<HeizstabBox />
					<RührwerkBox />
				</Grid>

				<Grid xs={3}>
					<HeizenBox />
					<HystereseBox />
				</Grid>
				
				<Grid xs={4}>
					<VerbindungBox />
				</Grid>
			</Grid>


		</Box>
	);
};

export default Manuell;
