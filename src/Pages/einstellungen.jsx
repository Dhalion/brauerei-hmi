import React, {useState} from "react";
import TempSetDialog from "../Components/TempDialog";
import Button from "@mui/material/Button";

export const Einstellungen = () => {
	const [openTempDialog, setOpenTempDialog] = useState(false);

	const handleOpenTempDialog = () => {
		setOpenTempDialog(true);
	};
	return (
		<div>
			<h2>Einstellungen</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eos
				dignissimos iusto am officia alias aspernatur provident, sapiente
				adipisci, veritatis, placeat inventore distinctio dolor nostrum
				voluptatibus cum. Molestiae, non repudiandae.
			</p>
			<Button variant="outlined" onClick={handleOpenTempDialog}>
				Open form dialog
			</Button>
			<TempSetDialog
				openDialog={openTempDialog}
				setOpenDialog={setOpenTempDialog}
			/>
		</div>
	);
};

export default Einstellungen;
