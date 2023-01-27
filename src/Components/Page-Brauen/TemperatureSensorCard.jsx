import React, {useEffect} from "react";
import {Box, Card, Typography} from "@mui/material";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import {DATA_UPDATE_EVENT_NAME} from "../../consts";
import brauerei from "../../BrauereiAPI/Brauerei";

function useEventListener(eventType, handler) {
	useEffect(() => {
		document.addEventListener(eventType, handler);
	}, []);
}

export default function TemperatureSensorCard({data}) {
	const [temp, setTemp] = React.useState(0);

	useEventListener(DATA_UPDATE_EVENT_NAME, () => {
		let temp = brauerei.getData("t" + data);
		temp = temp.toFixed(1);
		setTemp(temp);
		console.log(`t${data}: ${temp}`);
	});

	return (
		<Card
			sx={{
				display: "flex",
				ml: 1,
				flexGrow: 1,
			}}
		>
			<DeviceThermostatIcon
				style={{fontSize: 70}}
				color="secondary"
				sx={{m: 2}}
			/>
			<Box sx={{display: "flex", flexDirection: "column"}}>
				<Typography variant="h3" sx={{ml: 1, mt: 1}}>
					{temp} °C
				</Typography>
				<Typography
					variant="subtitle2"
					sx={{ml: 1, mb: 1}}
					color="text.secondary"
				>
					Sensor {data}
				</Typography>
			</Box>
		</Card>
	);
}
