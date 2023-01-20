import React from "react";

import Box from "@mui/material/Box";
import Navigation from "./Navigation";
import {ContentView} from "./MainView";

function App() {
	return (
		<Box sx={{display: "flex"}}>
			<Navigation />
			<ContentView />
		</Box>
	);
}

export default App;
