import React from "react";
import {Box, Card, Typography} from "@mui/material";
import FlipCameraAndroid from "@mui/icons-material/FlipCameraAndroid";

export default function RuehrerCard() {
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
			<FlipCameraAndroid style={{fontSize: 70}} color="" sx={{m: 2}} />

			<Box sx={{display: "flex", flexDirection: "column"}}>
				<Typography variant="h3" sx={{ml: 1, mt: 1, mr: 1}}>
					0/10
				</Typography>
				<Typography
					variant="subtitle2"
					sx={{ml: 1, mb: 1}}
					color="text.secondary"
				>
					Rührwerk
				</Typography>
			</Box>
		</Card>
	);
}
