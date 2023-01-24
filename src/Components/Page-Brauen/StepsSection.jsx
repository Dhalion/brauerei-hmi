import {
	Box,
	Card,
	Step,
	StepContent,
	StepLabel,
	Stepper,
	Typography,
} from "@mui/material";
import React from "react";

const steps = [
	{
		label: "Start",
		description: "Start Step",
	},
	{
		label: "Middle",
		description: "Middle Step",
	},
	{
		label: "End",
		description: "End Step",
	},
];

export default function StepsSection() {
	const [activeStep, setActiveStep] = React.useState(0);

	return (
		<Card sx={{display: "flex", ml: 1, mt: 2}}>
			<Stepper activeStep={2} orientation="vertical" sx={{ml: 3, mt: 2, mb: 4}}>
				{steps.map((step, index) => (
					<Step key={step.label}>
						<StepLabel>
							<Typography variant="h5" sx={{ml: 1}}>
								{step.label}
							</Typography>
						</StepLabel>
						<StepContent>
							<Typography variant="caption" sx={{ml: 1}}>
								{" "}
								{step.description}{" "}
							</Typography>
						</StepContent>
					</Step>
				))}
			</Stepper>
		</Card>
	);
}
