import * as React from "react";
import {Box, Toolbar, Typography} from "@mui/material";
import StatusBar from "../Components/Page-Brauen/StatusBar";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {styled} from "@mui/material/styles";
import TemperatureSensorCard from "../Components/Page-Brauen/DataCard";

const Item = styled(Paper)(({theme}) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

const Brauen = () => {
	return (
		<Box component="main" sx={{flexGrow: 1, mr: 1}}>
			<Toolbar />

			<Grid container spacing={1}>
				<Grid xs>
					<Typography variant="h3" component="h2" m={5}>
						Brauen
					</Typography>
				</Grid>
				<Grid xs={6}>
					<StatusBar />
				</Grid>
				<Grid xs />
			</Grid>

			{/* //* ROW 2 */}
			<Grid container spacing={{md: 3, xs: 2}} columns={{xs: 4, sm: 8, md: 12}}>
				<Grid xs={2}>
					{/* <Item>Text</Item> */}
					<TemperatureSensorCard />
				</Grid>
				<Grid xs={2}>
					<TemperatureSensorCard />
				</Grid>{" "}
				<Grid xs={4}>
					<TemperatureSensorCard />
				</Grid>{" "}
				<Grid xs={2}>
					<TemperatureSensorCard />
				</Grid>{" "}
				<Grid xs={2}>
					<TemperatureSensorCard />
				</Grid>{" "}
			</Grid>
		</Box>
	);
};

export default Brauen;
