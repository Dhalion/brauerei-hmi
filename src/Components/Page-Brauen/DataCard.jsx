import React from "react";
import {Box, Card, Typography} from "@mui/material";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";

export default function TemperatureSensorCard() {
	return (
		<Card
			sx={{
				display: "flex",
				ml: 4,
				flexGrow: 1,
			}}
		>
			<DeviceThermostatIcon
				style={{fontSize: 70}}
				color="secondary"
				sx={{m: 2}}
			/>
			<Box sx={{display: "flex", flexDirection: "column"}}>
				<Typography variant="h3" sx={{ml: 1, mt: 1, mr: 1}}>
					25 °C
				</Typography>
				<Typography
					variant="subtitle2"
					sx={{ml: 1, mb: 1}}
					color="text.secondary"
				>
					Sensor 1
				</Typography>
			</Box>
		</Card>
	);
}
