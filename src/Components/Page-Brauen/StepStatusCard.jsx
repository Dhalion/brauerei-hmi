import React from "react";
import {Box, Card, Grid, Paper, Typography} from "@mui/material";
import ReceiptIcon from "@mui/icons-material/Receipt";
export default function StepStatusCard() {
	return (
		<Card
			sx={{
				display: "flex",
				ml: 4,
				flexGrow: 1,
				// backgroundColor: "#99d066",
				// backgroundColor: "#ff8a80",
			}}
		>
			<ReceiptIcon style={{fontSize: 70}} sx={{m: 2}} />

			<Grid container sx={{mt: 2}}>
				<Grid>
					<Paper variant="outlined">
						<Typography variant="h4" sx={{ml: 1, mr: 1}}>
							EINMAISCHEN
						</Typography>
						<Typography
							variant="subtitle2"
							sx={{ml: 1, mb: 1}}
							color="text.secondary"
						>
							(50 °C)
						</Typography>
					</Paper>
				</Grid>
				<Grid>
					<Paper variant="outlined" sx={{mt: 1, ml: 3, mb: 2}}>
						{" "}
						<Typography variant="h3">03:22</Typography>
					</Paper>
				</Grid>
			</Grid>
		</Card>
	);
}
