import brauerei, { DataProperties } from "./BrauereiAPI/Brauerei";

let settings = {
	pressed: false,
};

export const update = () => {
	// settings.pressed = !settings.pressed;
	// console.log("State: " + settings.pressed);
	// brauerei.fetchAllValues();
	brauerei.setProperty(DataProperties.heizstab, 1)
};
