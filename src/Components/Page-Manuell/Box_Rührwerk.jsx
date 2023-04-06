import React from "react";
import {
	Paper,
	Typography,
	ButtonGroup,
	Button,
	Box,
	Stack,
	Slider,
	Divider
} from "@mui/material";
import FlipCameraAndroid from "@mui/icons-material/FlipCameraAndroid";

function valuetext(value) {
	return `${value}°C`;
}

const marks = [
	{value: 0, label: "OFF"},
	{value: 1, label: "1"},
	{value: 2, label: "2"},
	{value: 3, label: "3"},
	{value: 4, label: "4"},
	{value: 5, label: "5"},
	{value: 6, label: "6"},
	{value: 7, label: "7"},
	{value: 8, label: "8"},
	{value: 9, label: "9"},
	{value: 10, label: "10"},
]


function RührwerkBox() {
	return (
		<div>
			{/* HEIZSTAB BOX */}
			<Paper sx={{width: "80%", ml: 2, mt: 2}}>
				<Box sx={{flexDirection: "column"}}>
					<Typography variant="h4" sx={{pt: 1, pl: 2}} component="h2">
						Rührwerk
					</Typography>
				</Box>
				<Paper sx={{p: 1, ml: 2, mr: 2, mt: 1}}>
					<Stack direction="row"
						sx={{p: 1}} 
						display="flex"
						alignItems="center"
						justifyContent={"center"}
					>
						<FlipCameraAndroid style={{fontSize: 40}} color="" sx={{mr:2}} />
						<Typography variant="h5" >
							Stufe 0/10
						</Typography>
					</Stack>
				</Paper>
				<Stack>
					<Box sx={{p: 2, ml: 2, mr:2}}>
						<Slider
								aria-label="Temperature"
								defaultValue={0}
								getAriaValueText={valuetext}
								valueLabelDisplay="auto"
								step={1}
								marks={marks}
								min={0}
								max={10}
								color="secondary"
							/>

					</Box>
					<Divider />
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
				</Stack>
			</Paper>
		</div>
	);
}

export default RührwerkBox;
