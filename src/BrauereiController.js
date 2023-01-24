import brauerei from "./BrauereiAPI/Brauerei";

let settings = {
	pressed: false,
};

export const update = () => {
	settings.pressed = !settings.pressed;
	console.log("State: " + settings.pressed);
	brauerei.fetchAllValues();
};
