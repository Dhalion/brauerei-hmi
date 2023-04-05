import React from "react";
import {
	Paper,
	Typography,
	ButtonGroup,
	Button,
	Box,
	Stack,
} from "@mui/material";
import FlipCameraAndroid from "@mui/icons-material/FlipCameraAndroid";

function RührwerkBox() {
	return (
		<div>
			{/* HEIZSTAB BOX */}
			<Paper sx={{width: "80%", ml: 2, mt: 2}}>
				<Box sx={{flexDirection: "column"}}>
					<Typography variant="h4" sx={{pt: 1, pl: 3}} component="h2">
						Rührwerk
					</Typography>
				</Box>
				<Paper sx={{p: 1, ml: 3, mr: 2, mt: 1}}>
					<Typography variant="subtitle" sx={{ml: 1}} >
						Stufe:
					</Typography>
					<Stack direction="row" sx={{pb: 1}} display="flex"
					alignItems="center"
					justifyContent={"center"}>
						<FlipCameraAndroid style={{fontSize: 40}} color="" sx={{m: 2}} />
						<Typography variant="h5" sx={{pl:2}}>
							Stufe 0/10
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
						<Button color="success">AN</Button>
						<Button color="error">AUS</Button>
					</ButtonGroup>
				</Box>
			</Paper>
		</div>
	);
}

export default RührwerkBox;
