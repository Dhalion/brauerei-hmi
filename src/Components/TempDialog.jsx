import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ThermostatAuto from "@mui/icons-material/ThermostatAuto";
import {Box} from "@mui/material";
import brauerei, {DataProperties} from "../BrauereiAPI/Brauerei";

export default function TempSetDialog(props) {
	const [zielTemp, setZielTemp] = React.useState(0);

	const handleClose = () => {
		props.setOpenDialog(false); // Use the prop.
	};

	function handleOk(event) {
		event.preventDefault(); // Prevent Page reloading
		brauerei.setData(DataProperties.zielTemp, zielTemp); //
		handleClose();
	}

	return (
		<div>
			<Dialog open={props.openDialog} onClose={handleClose}>
				<form onSubmit={handleOk}>
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
								onChange={(e) => setZielTemp(e.target.value)}
								autoFocus={true}
							/>
						</Box>
					</DialogContent>
					<DialogActions sx={{mb: 1}}>
						<Button onClick={handleClose}>Cancel</Button>
						<Button type="submit">Ok</Button>
					</DialogActions>
				</form>
			</Dialog>
		</div>
	);
}
