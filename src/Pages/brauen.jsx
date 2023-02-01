import * as React from "react";
import {Box, Paper, Toolbar, Typography} from "@mui/material";
import StatusBar from "../Components/Page-Brauen/StatusBar";
import Grid from "@mui/material/Grid";
import TemperatureSensorCard from "../Components/Page-Brauen/TemperatureSensorCard";
import HeizstabCard from "../Components/Page-Brauen/HeizstabCard";
import RuehrerCard from "../Components/Page-Brauen/RuehrerCard";
import StepsSection from "../Components/Page-Brauen/StepsSection";
import StepStatusCard from "../Components/Page-Brauen/StepStatusCard";
import {DataProperties} from "../BrauereiAPI/Brauerei";
import ChartDoghnut, {TempGraph} from "../Components/Page-Brauen/Graph";

const Brauen = () => {
	return (
		<Box component="main" sx={{flexGrow: 1, mr: 1}}>
			<Toolbar />

			<Grid container spacing={1}>
				<Grid item>
					<Typography variant="h3" component="h2" m={5}>
						Brauen
					</Typography>
				</Grid>
				<Grid item xs={6} sx={{mb: 5, mt: 5, ml: 12}}>
					<StatusBar />
				</Grid>
			</Grid>

			{/* //* ROW 2 */}
			<Grid container spacing={{md: 3, xs: 2}} columns={{xs: 4, sm: 8, md: 12}}>
				<Grid item xs={2}>
					{/* <Item>Text</Item> */}
					<TemperatureSensorCard data={DataProperties.t1} />
				</Grid>
				<Grid item xs={2}>
					<TemperatureSensorCard data={DataProperties.t2} />
				</Grid>{" "}
				<Grid item xs={4}>
					<StepStatusCard />
				</Grid>{" "}
				<Grid item xs={2}>
					<HeizstabCard />
				</Grid>{" "}
				<Grid item xs={2}>
					<RuehrerCard />
				</Grid>{" "}
			</Grid>

			{/* //* ROW 3 */}
			<Grid container spacing={{md: 3, xs: 2}}>
				<Grid item xs={3} columns={{xs: 4, sm: 8, md: 12}}>
					<StepsSection />
				</Grid>
				<Grid item xs={9}>
					<Paper sx={{mt: 2}}>
						<ChartDoghnut />
					</Paper>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Brauen;
