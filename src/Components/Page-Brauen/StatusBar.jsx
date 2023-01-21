import React from "react";
import {Card, CardContent, Typography} from "@mui/material";

export default function StatusBar() {
	return (
		<Card sx={{display: "flex", m: 5}}>
			<CardContent align="center">
				<Typography
					sx={{
						fontSize: 14,
						mx: "auto",
						textAlign: "center",
						flexGrow: 1,
						fontWeight: "bold",
					}}
					align="center"
				>
					Status Bar
				</Typography>
			</CardContent>
		</Card>
	);
}
