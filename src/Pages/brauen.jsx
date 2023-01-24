import * as React from "react";
import {Box, Toolbar, Typography} from "@mui/material";
import StatusBar from "../Components/Page-Brauen/StatusBar";
import Grid from "@mui/material/Grid";
import TemperatureSensorCard from "../Components/Page-Brauen/TemperatureSensorCard";
import HeizstabCard from "../Components/Page-Brauen/HeizstabCard";
import RuehrerCard from "../Components/Page-Brauen/RuehrerCard";
import StepsSection from "../Components/Page-Brauen/StepsSection";
import StepStatusCard from "../Components/Page-Brauen/StepStatusCard";

const Brauen = () => {
	return (
		<Box component="main" sx={{flexGrow: 1, mr: 1}}>
			<Toolbar />

			<Grid container spacing={1}>
				<Grid>
					<Typography variant="h3" component="h2" m={5}>
						Brauen
					</Typography>
				</Grid>
				<Grid xs={6}>
					<StatusBar />
				</Grid>
				<Grid />
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
					<StepStatusCard />
				</Grid>{" "}
				<Grid xs={2}>
					<HeizstabCard />
				</Grid>{" "}
				<Grid xs={2}>
					<RuehrerCard />
				</Grid>{" "}
			</Grid>

			{/* //* ROW 3 */}
			<Grid container>
				<Grid xs={3} spacing={{md: 3, xs: 2}} columns={{xs: 4, sm: 8, md: 12}}>
					<StepsSection />
				</Grid>
				<Grid>Graph</Grid>
			</Grid>
		</Box>
	);
};

export default Brauen;
