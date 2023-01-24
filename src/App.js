import React from "react";

import {Route, Routes} from "react-router-dom";
import Box from "@mui/material/Box";
import Navigation from "./Components/Navigation";
import {ContentView} from "./Components/MainView";
import Brauen from "./Pages/brauen";

import brauerei from "./BrauereiAPI/Brauerei";

function App() {
	return (
		<Box sx={{display: "flex"}}>
			<Navigation />
			<Routes>
				<Route path="/" element={<ContentView />} />
				<Route path="/brauen" element={<Brauen />} />
			</Routes>
		</Box>
	);
}

export default App;
