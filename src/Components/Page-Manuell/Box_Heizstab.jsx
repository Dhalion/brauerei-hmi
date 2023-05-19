import React, { useEffect } from "react";
import {
	Paper,
	Typography,
	ButtonGroup,
	Button,
	Box,
	Stack,

} from "@mui/material";
import Whatshot from "@mui/icons-material/Whatshot";
import brauerei, { DataProperties } from "../../BrauereiAPI/Brauerei";
import { DATA_UPDATE_EVENT_NAME } from "../../consts";

function useEventListener(eventType, handler) {
	useEffect(() => {
		document.addEventListener(eventType, handler);
	}, []);
}

function HeizstabBox() {
	// BreweryStates
	const [heizstabState, setHeizstabState] = React.useState(brauerei.breweryDataState.heizstab);

	// Listen for BreweryState changes
	useEventListener(DATA_UPDATE_EVENT_NAME, () => {
		// And set new Value when event was received
		setHeizstabState(brauerei.breweryDataState.heizstab);
	});


	function handleOn() {
		brauerei.setProperty(DataProperties.heizstab, true);
	}

	function handleOff() {
		brauerei.setProperty(DataProperties.heizstab, false);
	}

	return (
		<div>
			{/* HEIZSTAB BOX */}
			<Paper sx={{width: "80%", ml: 2, mt: 2}}>
				<Box sx={{flexDirection: "column"}}>
					<Typography variant="h4" sx={{pt: 1, pl: 3}} component="h2">
						Heizstab
					</Typography>
				</Box>
				<Paper sx={{p: 1, ml: 3, mr: 2, mt: 1}}>

					<Stack 	direction="row" 
							sx={{}}
							display="flex"
							alignItems="center"
							justifyContent={"center"}
					>
						<Whatshot style={{fontSize: 50}} color={heizstabState ? "error" : "disabled"}  />
						<Typography variant="h5" sx={{pl:2}}>
							{heizstabState ? "AKTIV" : "AUS"}
						</Typography>
					</Stack>
				</Paper>
				
					<Box
						sx={{mt: 2, pb: 2}}
						display="flex"
						alignItems="center"
						justifyContent={"center"}
						>

						<ButtonGroup variant="contained">
							<Button color="success" onClick={handleOn} disabled={heizstabState}>AN</Button>
							<Button color="error" onClick={handleOff} disabled={!heizstabState}>AUS</Button>
						</ButtonGroup>
					</Box>	
			</Paper>
		</div>
		
	); 
}

export default HeizstabBox;
