import React from "react";
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from "recharts";

function TempChart() {
	const start_data = [{time: Date.now(), t1: 12, t2: 13}];
	const [chartData, setChartData] = React.useState(start_data);

	const MAX_LENGTH = 100;

	React.useEffect(() => {
		const interval = setInterval(() => {
			console.log("Data added");
			let newElement = {
				time: Date.now(),
				t1: 12 + Math.random() * 2 - 2,
				t2: 15 + Math.random() * 2 - 2,
			};
			// let newData = chartData;
			let newData = [...chartData];

			if (newData.length > MAX_LENGTH) {
				newData.shift();
			}
			newData.push(newElement);
			setChartData((oldData) => {
				if (oldData.length > MAX_LENGTH) {
					oldData.shift();
				}
				return [...oldData, newElement];
			});
		}, 500);

		return () => clearInterval(interval);
	}, []);

	return (
		<div>
			<LineChart width={1200} height={545} data={chartData}>
				<Line type={"monotone"} dataKey="t1" />
				<Line type={"monotone"} dataKey="t2" />
				<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />{" "}
				<XAxis dataKey={"time"} />
				<YAxis label={"Temp"} />
				<Tooltip />
			</LineChart>
		</div>
	);
}

export default TempChart;
