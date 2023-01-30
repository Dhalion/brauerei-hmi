import React from "react";
import {Card, Grid, Paper, Typography} from "@mui/material";
import ReceiptIcon from "@mui/icons-material/Receipt";
import brauerei, {DataProperties} from "../../BrauereiAPI/Brauerei";
import {useEffect} from "react";
import {DATA_UPDATE_EVENT_NAME} from "../../consts";

function useEventListener(eventType, handler) {
	useEffect(() => {
		document.addEventListener(eventType, handler);
		console.log("attached event");
	}, []);
}

export default function StepStatusCard() {
	const [tSoll, setTsoll] = React.useState(0);

	// Listen for Data changes
	useEventListener(DATA_UPDATE_EVENT_NAME, () => {
		console.log("Triggered");
		let zieltemp = brauerei.getData(DataProperties.zielTemp);
		console.log(`T-Soll: ${zieltemp}`);
		setTsoll(zieltemp);
	});

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
							({tSoll} °C)
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
