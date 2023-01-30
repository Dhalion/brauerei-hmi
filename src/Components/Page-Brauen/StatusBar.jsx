import React from "react";
import {
	Card,
	CardContent,
	Grid,
	ButtonGroup,
	IconButton,
	Paper,
	Typography,
	Stack,
} from "@mui/material";

import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import {Box} from "@mui/system";

export default function StatusBar() {
	return (
		<Card>
			<CardContent>
				<Grid
					container
					spacing={0}
					// direction="column"
					alignItems={"center"}
					// justifyContent="center"
				>
					<Grid item xs={3}>
						<ButtonGroup>
							<IconButton variant="contained" color="success">
								<PlayCircleIcon style={{fontSize: 60}} />
							</IconButton>
							<IconButton variant="" color="error">
								<PauseCircleIcon style={{fontSize: 60}} />
							</IconButton>
						</ButtonGroup>
					</Grid>
					<Grid item xs={6}>
						<Paper elevation={4}>
							<Box display="flex" justifyContent={"center"}>
								<Typography variant="h3">Kellerbier</Typography>
							</Box>
						</Paper>
					</Grid>
					<Grid item xs={2} sx={{ml: 3}}>
						<Paper elevation={2}>
							<Box display="flex" justifyContent={"flex-end"} sx={{p: 1}}>
								<Typography variant="h3">01:23</Typography>
							</Box>
						</Paper>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
}
