import React from "react";
import SportsBarOutlinedIcon from "@mui/icons-material/SportsBarOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ModeOutlinedIcon from "@mui/icons-material/ModeOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";

export const SidebarData = [
	// {
	// 	title: "Main",
	// 	icon: <ArrowForwardIosIcon />,
	// 	link: "/",
	// },

	{
		title: "Brauen",
		icon: <SportsBarOutlinedIcon />,
		link: "/brauen",
	},
	{
		title: "Manueller Modus",
		icon: <ModeOutlinedIcon />,
		link: "/manuell",
	},
	{
		title: "Rezepte",
		icon: <ReceiptLongOutlinedIcon />,
		link: "/rezepte",
	},
	{
		title: "Einstellungen",
		icon: <SettingsOutlinedIcon />,
		link: "/einstellungen",
	},
];
