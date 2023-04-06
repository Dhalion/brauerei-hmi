import {Box, Paper, Toolbar, Typography, Grid} from "@mui/material";
import React from "react";
import HeizstabBox from "../Components/Page-Manuell/Box_Heizstab";
import RührwerkBox from "../Components/Page-Manuell/Box_Rührwerk";
import VerbindungBox from "../Components/Page-Manuell/Box_Verbindung";

const Manuell = () => {
	return (
		<Box component="main" sx={{flexGrow: 1, mr: 0}}>
			<Toolbar />
			<Typography variant="h3" component="h2" mt={4} ml={4}>
				Manueller Modus
			</Typography>

			<Grid container sx={{pl:4}}>
				{/* SENSOREN BOX */}
				<Grid xs={3}>
					<Paper sx={{width: "50%", ml: 2, mt: 2}}>
						<Typography variant="h4" sx={{pt: 1, pl: 3, pb: 2}} component="h2">
							Sensoren
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
										T1: 20°C
									</Typography>
								</Paper>
								<Paper>
									<Typography
										sx={{ml: 2, mt: 1}}
										variant="subheader"
										component="h2"
									>
										T2: 20°C
									</Typography>
								</Paper>
							</Grid>
						</Grid>
					</Paper>

					<HeizstabBox />

					<RührwerkBox />
				</Grid>

				<Grid xs={3}>
					{/* HEIZEN BOX */}
					<Paper sx={{width: "50%", ml: 2, mt: 2}}>
						<Typography variant="h4" sx={{pt: 1, pl: 3, pb: 2}} component="h2">
							Heizen
						</Typography>
						<Grid
							container
							spacing={{md: 3, xs: 2}}
							columns={{xs: 4, sm: 8, md: 12}}
							sx={{p: 1}}
						>
							<Grid item xs={10} sx={{ml: 4, pt: 2, pb: 2}}>
								<Paper>
									<Typography sx={{ml: 2}} variant="subtitle" component="h2">
										Ziel: [22°C]
									</Typography>
								</Paper>
							</Grid>
						</Grid>
					</Paper>

					{/* HYSTERESE BOX */}
					<Paper sx={{width: "50%", ml: 2, mt: 2}}>
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
				</Grid>
				<Grid xs={4}>
					<VerbindungBox />
				</Grid>
			</Grid>


		</Box>
	);
};

export default Manuell;
