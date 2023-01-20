import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SportsBar from "@mui/icons-material/SportsBar";

import {SidebarData} from "./SidebarData";

import {SIDEBAR_WIDTH, TITLE, VERSION} from "../consts";
import {Stack} from "@mui/system";
import {Button} from "@mui/material";
import {update} from "../BrauereiController";
import {Link} from "react-router-dom";

export default function Navigation() {
	return (
		<Box sx={{display: "flex"}}>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}
			>
				<Toolbar
					sx={{
						justifyContent: "space-between",
					}}
				>
					<Stack direction="row">
						{" "}
						<SportsBar fontSize="large" />
						<Typography variant="h6" ml={2} align="centered">
							{TITLE}
						</Typography>
					</Stack>
					<Box>
						<Typography align="center" mr={3}>
							Version {VERSION}
						</Typography>
					</Box>
				</Toolbar>
			</AppBar>
			<Drawer
				variant="permanent"
				sx={{
					width: SIDEBAR_WIDTH,
					flexShrink: 0,
					[`& .MuiDrawer-paper`]: {
						width: SIDEBAR_WIDTH,
						boxSizing: "border-box",
					},
				}}
			>
				<Toolbar />
				<Box sx={{overflow: "auto"}}>
					<List>
						{/* //*      https://mui.com/material-ui/react-list/#selected-listitem     */}
						{SidebarData.map((val, key) => (
							<ListItem>
								<ListItemButton component={Link} key={val.title} to={val.link}>
									<ListItemIcon>{val.icon}</ListItemIcon>
									<ListItemText primary={val.title} />
								</ListItemButton>
							</ListItem>
						))}
					</List>
					<Divider />
					<List>
						<Button onClick={update}>Press me</Button>
					</List>
				</Box>
			</Drawer>
		</Box>
	);
}
