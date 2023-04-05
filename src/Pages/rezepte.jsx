import {Box, Card, CircularProgress, Toolbar, Typography} from "@mui/material";
import React from "react";
import {REZEPTE} from "../BrauereiAPI/Rezepte/Rezepte";
import LoadingBanner from "../Components/Page-Rezepte/LoadingBanner";

const Rezepte = () => {
	const [loadingVisible, setLoadingVisible] = React.useState(true);
	const [rezepte, setRezepte] = React.useState(REZEPTE);

	React.useEffect(() => {
		setInterval(() => {
			setLoadingVisible(false);
		}, 2000);
	}, []);

	return (
		<Box component="main" sx={{flexGrow: 1, mr: 2}}>
			<Toolbar />

			<Typography variant="h3" component="h2" m={5}>
				Rezepte
			</Typography>
			<Box>
				<LoadingBanner visible={loadingVisible} />
			</Box>
			<Card>{rezepte.name}</Card>
		</Box>
	);
};

export default Rezepte;
