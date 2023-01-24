const DEFAULT_ENDPOINT = "ws://localhost";
// const DEFAULT_ENDPOINT = "http://localhost:420";
// const DEFAULT_PORT = 8080;
const DEFAULT_PORT = 420;

class Brauerei {
	constructor() {
		console.log("Brauerei Started");
		if (Brauerei.instance == null) {
			Brauerei.instance = this;
			this.endpoint = null;
			this.socket = null;
			this.t1 = 0.0;
			this.t2 = 0.0;
			this.motor = 0;
			this.heizstab = false;

			this.connect(DEFAULT_ENDPOINT + ":" + DEFAULT_PORT);
			this.handleResponse();
		}
		return Brauerei.instance;
	}

	connect(endpoint) {
		this.socket = new WebSocket(endpoint);
		this.setupSocketEvents();
	}

	send(data) {
		data = JSON.stringify(data);
		console.log("Sending: " + data);
		console.log("Type: " + typeof data);
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
		console.timeEnd("fetchAllValues");
		console.log("Message: " + data);
		// this.handleResponse();
	}

	fetchAllValues() {
		const request = {type: "get"};
		console.time("fetchAllValues");
		this.send(request);
	}

	handleResponse() {
		console.log("handling response");
	}
}

const brauerei = new Brauerei();
Object.freeze(brauerei);

export default brauerei;

// Use it: import brauerei from "./brauerei";
