import {CircularProgress, Grid} from "@mui/material";
import React from "react";

function LoadingBanner({visible}) {
	if (visible) {
		return (
			<Grid
				container
				spacing={0}
				direction="column"
				alignItems="center"
				justifyContent="center"
				style={{minHeight: "50vh"}}
			>
				<Grid item xs={3}>
					<CircularProgress />
				</Grid>
			</Grid>
		);
	}
}

export default LoadingBanner;
