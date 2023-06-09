import { DATA_UPDATE_EVENT_NAME } from "../consts";

const DEFAULT_ENDPOINT = "ws://localhost";
// const DEFAULT_ENDPOINT = "http://localhost:420";
// const DEFAULT_PORT = 8080;
const DEFAULT_PORT = 420;

const UPDATE_INTERVAL = 10_000;

const BrauereiDataUpdate = new Event(DATA_UPDATE_EVENT_NAME);

export const DataProperties = {
	t1: 0,
	t2: 1,
	motor: 2,
	heizstab: 3,
	zielTemp: 4,
	hysteresePos: 5,
	hystereseNeg: 6,
	connectionStatus: 7,
	connectionPing: 8,
};

export const BrewMode = {
	manual: 0,
	automatic: 1,
};

export const breweryDataStateTemplate = {
	t1: Number,
	t2: Number,
	avgTemp: Number,
	motor: Number,
	heizstab: Boolean,
	zielTemp: Number,
	hysteresePos: Number,
	hystereseNeg: Number,
	connectionStatus: Number,
	connectionPing: Number,
	mode: BrewMode,
};

document.addEventListener(DATA_UPDATE_EVENT_NAME, (e) => {
	// console.log(brauerei.getData("t1"));
	// Data updated
});

class Brauerei {
	// breweryDataState holds the Hardware Data and Backend State information
	breweryDataState = breweryDataStateTemplate;

	t1 = 0.1;
	t2 = 0.2;
	motor = 1;
	heizstab = false;
	lastUpdate = 0;
	zielTemp = 0;
	mode = BrewMode.manual;
	
	constructor() {
		console.log("Brauerei Started");
		this.breweryDataState.mode = BrewMode.automatic;
		console.log("Mode: " + this.breweryDataState.mode + (this.breweryDataState.mode ? "automatic" : "manual"));
		if (Brauerei.instance == null) {
			Brauerei.instance = this;
			this.endpoint = null;
			this.socket = null;

			this.connect(DEFAULT_ENDPOINT + ":" + DEFAULT_PORT);
			this.handleResponse();
		}
		return Brauerei.instance;
	}

	test(message) {
		console.log(message);
	}

	announceUpdatedData() {
		document.dispatchEvent(BrauereiDataUpdate);
		console.log("Data update Event triggered.");
	}

	setData(property, data) {
		switch (property) {
			case DataProperties.t1:
				break;
			case DataProperties.t2:
				break;
			case DataProperties.zielTemp:
				this.zielTemp = data;
				break;
			default:
				return false;
		}
		console.log(`[SET DATA] ${property} ${data}`);
		this.announceUpdatedData();
	}

	getProperty(data) {
		if (Date.now() - this.lastUpdate > UPDATE_INTERVAL) {
			this.fetchAllValues(); // fetch all values
		}
		switch (data) {
			case DataProperties.t1:
				return this.t1;
				break;
			case DataProperties.t2:
				return this.t2;
				break;
			case DataProperties.motor:
				return this.motor;
				break;
			case DataProperties.heizstab:
				return this.heizstab;
				break;
			case DataProperties.zielTemp:
				return this.zielTemp;
				break;
			default:
				return null;
				break;
		}
	}

	setProperty(DataProperty, data) {
		switch (DataProperty) {
			// ! T1 & T2 cannot be SET!
			case DataProperties.t1:
				throw new Error("DataProperty T1 is read only");
			case DataProperties.t2:
				throw new Error("DataProperty T2 is read only");

			case DataProperties.heizstab:
				if (typeof data != "boolean") {
					throw new Error("Heizstab state must be boolean");
				}

				this.breweryDataState.heizstab = data;
				this.announceUpdatedData();
				break;

			case DataProperties.motor:
				if (typeof data != "number") {
					throw new Error("Rührwerk state must be number");
				}
				this.breweryDataState.motor = data;
				this.announceUpdatedData();
				break;

			case DataProperties.zielTemp:
				if (typeof data != "number") {
					throw new Error("Zieltemp state must be number");
				}
				this.breweryDataState.zielTemp = data;
				this.announceUpdatedData();
				break;

			case DataProperties.hystereseNeg:
				if (typeof data != "number") {
					throw new Error("Hysterese- state must be number");
				}
				this.breweryDataState.hystereseNeg = data;
				this.announceUpdatedData();
				break;

			case DataProperties.hysteresePos:
				if (typeof data != "number") {
					throw new Error("Hysterese+ state must be number");
				}
				this.breweryDataState.hysteresePos = data;
				this.announceUpdatedData();
				break;

			default:
				break;
		}
	}

	connect(endpoint) {
		console.log("(Re)Connecting");
		this.socket = new WebSocket(endpoint);
		this.setupSocketEvents();
	}

	send(data) {
		// Check if socket connected properly
		if (this.socket.readyState != 1) {
			// console.log("Socket not in ReadyState");
			if (this.socket.readyState != 0) {
				this.connect(); // Try to reconnect
				return;
			}
		}
		data = JSON.stringify(data);
		// console.log("Sending: " + data);
		this.socket.send(data);
	}

	setupSocketEvents() {
		this.socket.onmessage = this._socketOnMessage;
		this.socket.onerror = console.error;
		this.socket.onclose = this._socketOnClose;
		this.socket.onopen = this._socketOnConnection;
	}

	_socketOnConnection() {
		console.log("socket on open");
	}

	_socketOnClose(event) {
		if (event.wasClean) {
			console.log("socket clean close" + event.reason);
		} else {
			console.log("socket dieded");
		}
		console.log("socket on close");
	}

	_socketOnError(err) {
		console.log("socket on error");
	}

	_socketOnMessage(data) {
		// console.timeEnd("fetchAllValues");
		// console.log("Message: " + data);
		try {
			brauerei.handleResponse(data);
		} catch (err) {
			// whatever
		}
	}

	fetchAllValues() {
		const request = { type: "get" };
		console.log("fetchAllValues");
		// console.time("fetchAllValues");
		// try {
		// 	this.send(request);
		// } catch (err) {
		// 	console.error("socket error", err);
		// }
	}
	handleResponse(data) {
		console.log("### handling response ###");
		if (typeof data !== "undefined") {
			// Arsch sachen machen weil python JSON nicht ECMA-404 kKnform ist
			let res = data.data.replace(data.type, "");
			res = res.replace(/'/g, '"');
			res = res.replace("False", "false");
			res = JSON.parse(res);
			// console.log(typeof data.data);
			// console.log(res);
			this.t1 = res.t1;
			this.t2 = res.t2;
			this.avgTemp = (this.t1, this.t2)/2;
			this.motor = res.motor;
			this.heizstab = res.heizstab;
			this.lastUpdate = Date.now();
			document.dispatchEvent(BrauereiDataUpdate);
		}
		// if ("t1" in data) {
		// 	// this.t1 = data.t1;
		// 	console.log(data.t1);
		// }
	}

	buttonStuff(data) {
		console.log(data);
	}
}

const brauerei = new Brauerei();
// Object.freeze(brauerei);

export default brauerei;

// Use it: import brauerei from "./brauerei";
