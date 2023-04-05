import React, {useState} from "react";
import TempSetDialog from "../Components/TempDialog";
import Button from "@mui/material/Button";
import {TempGraph} from "../Components/Page-Brauen/Graph";

export const Einstellungen = () => {
	const [openTempDialog, setOpenTempDialog] = useState(false);

	const handleOpenTempDialog = () => {
		setOpenTempDialog(true);
	};
	return (
		<div>
			<h2>Einstellungen</h2>
			<p>
				Stilus fidibus styler stilus  fidibus geiler Stilus  fidibus keiler
				stilus fidibus styler Stilus fidibus geiler stilus  fidibus keiler
				Fidibus  zwei schweinefüße Ein  hochhaus auf der wasser Muss nicht,  was
				es‚ irgendwas zu sein Ich muss nicht was es - der psalm Jenseit's von
				violett 1800 02 Hier  (ich weiß nicht - was steht da drauf? - im hacken)
				Im hacken hargon machen Der hat es gekonnt (was?) Ich hab im
				horrorversion null problemo‚ nemo Du sollst die theorie nicht Mit der
				praxis verwechseln singing all Ich hab die eier‚ du hast den stock Ich
				hab den samen, du hast voll bock Die meinung von allen anders Die
				meinung von die meisten pizza Spielzeug der vater‚ der nicht weiß Dass
				er zwei söhne hat Ich hab hunger, hehe‚ ich hab hunger (ich hab hunger,
				ich hab hunger) Zu alt, zu jung zu sprechen, zu alt Zu jung zu sein
				Einer geht noch, noch ein (was?) Lsd-führerschein Ich hab ihn gemacht
				und nach drei jahren Du hast husten, schnupfen, heis- wurst Er kommt
				geflogen über paris Ganz hoch über london phantom der (äh?) Doktor faust
				depressiv, lustig Felix sagt: Der der räuber von st pauli Und der folgt
				eine erklärung (und, und dann fol) und Dann folgt eine erklärung
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
