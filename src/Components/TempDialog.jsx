import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ThermostatAuto from "@mui/icons-material/ThermostatAuto";
import {Box} from "@mui/material";

export default function TempSetDialog(props) {
	const handleClose = () => {
		props.setOpenDialog(false); // Use the prop.
	};

	return (
		<div>
			<Dialog open={props.openDialog} onClose={handleClose}>
				<DialogTitle>Zieltemperatur</DialogTitle>
				<DialogContent>
					<Box sx={{display: "flex", alignItems: "flex-end"}}>
						<ThermostatAuto sx={{mr: 1, my: 0.5}} fontSize="medium" />
						<TextField
							id="input-with-sx"
							label="T-Soll"
							variant="standard"
							color="secondary"
							type="number"
						/>
					</Box>
				</DialogContent>
				<DialogActions sx={{mb: 1}}>
					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={handleClose}>Ok</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
