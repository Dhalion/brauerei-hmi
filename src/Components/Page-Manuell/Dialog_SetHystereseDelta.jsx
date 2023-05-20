import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ThermostatAuto from "@mui/icons-material/ThermostatAuto";
import {Box, Stack} from "@mui/material";
import brauerei, { DataProperties } from "../../BrauereiAPI/Brauerei";

export default function HystereseDeltaSetDialog(props) {
	const [hysteresePos, setHysteresePos] = React.useState(brauerei.breweryDataState.hysteresePos);
	const [hystereseNeg, setHystereseNeg] = React.useState(brauerei.breweryDataState.hystereseNeg);


	const handleClose = () => {
		props.setOpenDialog(false); // Use the prop.
	};

	function handleOk(event) {
		event.preventDefault(); // Prevent Page reloading
		brauerei.setProperty(DataProperties.hysteresePos, hysteresePos);
		brauerei.setProperty(DataProperties.hystereseNeg, hystereseNeg); 

		handleClose();
	}

	return (
		<div>
			<Dialog open={props.openDialog} onClose={handleClose}>
				<form onSubmit={handleOk}>
					<DialogTitle>Hysteresewerte</DialogTitle>
					<DialogContent>
						<Box sx={{display: "flex", alignItems: "flex-end"}}>
							<Stack>
								<TextField
									id="input-with-sx"
									label="Δ positiv"
									variant="standard"
									color="secondary"
									type="number"
									onChange={(e) => setHysteresePos(e.target.valueAsNumber)}
									autoFocus={true}
								/>
								<TextField
									id="input-with-sx"
									label="Δ negativ"
									variant="standard"
									color="secondary"
									type="number"
									onChange={(e) => setHystereseNeg(e.target.valueAsNumber)}
									autoFocus={true}
								/>

							</Stack>
						</Box>
					</DialogContent>
					<DialogActions sx={{mb: 1}}>
						<Button onClick={handleClose}>Abbrechen</Button>
						<Button type="submit">Ok</Button>
					</DialogActions>
				</form>
			</Dialog>
		</div>
	);
}
