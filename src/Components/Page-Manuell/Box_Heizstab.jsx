import React from "react";
import {
	Paper,
	Typography,
	ButtonGroup,
	Button,
	Box,
	Stack,

} from "@mui/material";
import Whatshot from "@mui/icons-material/Whatshot";



function HeizstabBox() {
	return (
		<div>
			{/* HEIZSTAB BOX */}
			<Paper sx={{width: "80%", ml: 2, mt: 2}}>
				<Box sx={{flexDirection: "column"}}>
					<Typography variant="h4" sx={{pt: 1, pl: 3}} component="h2">
						Heizstab
					</Typography>
				</Box>
				<Paper sx={{p: 1, ml: 3, mr: 2, mt: 1}}>
					<Typography variant="subtitle" sx={{ml: 1}} >
						Status:
					</Typography>
					<Stack direction="row" sx={{pb: 1}} display="flex"
					alignItems="center"
					justifyContent={"center"}>
						<Whatshot style={{fontSize: 50}} color="error" sx={{}} />
						<Typography variant="h5" sx={{pt: 1, pl:2}}>
							AKTIV
						</Typography>
					</Stack>
				</Paper>
				
					<Box
						sx={{mt: 2, pb: 2}}
						display="flex"
						alignItems="center"
						justifyContent={"center"}
						>

						<ButtonGroup variant="contained">
							<Button color="success">AN</Button>
							<Button color="error">AUS</Button>
						</ButtonGroup>
					</Box>	
			</Paper>
		</div>
		
	); 
}

export default HeizstabBox;
