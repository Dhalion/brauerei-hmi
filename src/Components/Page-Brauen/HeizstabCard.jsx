import React from "react";
import {Box, Card, Typography} from "@mui/material";
import WhatshotIcon from "@mui/icons-material/Whatshot";

export default function HeizstabCard() {
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
			<WhatshotIcon style={{fontSize: 70}} color="error" sx={{m: 2}} />

			<Box sx={{display: "flex", flexDirection: "column"}}>
				<Typography variant="h3" sx={{ml: 1, mt: 1, mr: 1}}>
					AN
				</Typography>
				<Typography
					variant="subtitle2"
					sx={{ml: 1, mb: 1}}
					color="text.secondary"
				>
					Heizstab
				</Typography>
			</Box>
		</Card>
	);
}
