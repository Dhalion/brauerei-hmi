import React from "react";

import {Route, Routes} from "react-router-dom";
import Box from "@mui/material/Box";
import Navigation from "./Components/Navigation";
import {ContentView} from "./Components/MainView";
import Brauen from "./Pages/brauen";

import brauerei from "./BrauereiAPI/Brauerei";
import Einstellungen from "./Pages/einstellungen";
import Rezepte from "./Pages/rezepte";
import Manuell from "./Pages/manuell";

function App() {
	return (
		<Box sx={{display: "flex"}}>
			<Navigation />
			<Routes>
				<Route path="/" element={<ContentView />} />
				<Route path="/brauen" element={<Brauen />} />
				<Route path="/einstellungen" element={<Einstellungen />} />
				<Route path="/rezepte" element={<Rezepte />} />
				<Route path="/manuell" element={<Manuell />} />
			</Routes>
		</Box>
	);
}

export default App;
