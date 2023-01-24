import React from "react";
import {
	Card,
	CardContent,
	Grid,
	Box,
	ButtonGroup,
	IconButton,
	Paper,
	Typography,
} from "@mui/material";

import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";

export default function StatusBar() {
	return (
		<Card>
			<CardContent>
				<Grid container justifyContent={"flex-end"}>
					<Grid>
						<ButtonGroup>
							<IconButton variant="contained" color="success">
								<PlayCircleIcon style={{fontSize: 60}} />
							</IconButton>
							<IconButton variant="" color="error">
								<PauseCircleIcon style={{fontSize: 60}} />
							</IconButton>
						</ButtonGroup>
					</Grid>
					<Grid>
						<Paper sx={{m: 0}}>
							<Typography variant="h3">Kellerbier</Typography>
						</Paper>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
}
