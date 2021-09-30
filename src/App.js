import * as React from "react";
import AppBar from "@mui/material/AppBar";
import BarChartIcon from "@mui/icons-material/BarChart";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CoinDetails from "./Components/coinDetails";
import ListCoins from "./Components/listCoins";

const theme = createTheme();
const queryClient = new QueryClient();
export default function Album() {
	function Coins() {
		const { isLoading, error, data } = useQuery("repoData", () =>
			fetch(
				"https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=45&page=1&sparkline=false"
			).then((res) => res.json())
		);

		if (isLoading) return "Loading...";

		if (error) return "An error has occurred: " + error.message;
		return <ListCoins coins={data} />;
	}
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<AppBar position="relative">
					<Toolbar>
						<BarChartIcon sx={{ mr: 2 }} />
						<Typography variant="h6" color="inherit" noWrap>
							CoinGecko Market Pairs (USD)
						</Typography>
					</Toolbar>
				</AppBar>
				<main>
					<Switch>
						<Route exact path="/currency/:id" component={CoinDetails} />
						<QueryClientProvider client={queryClient}>
							<Route exact path="/" component={Coins} />
						</QueryClientProvider>
					</Switch>
				</main>
				{/* Footer */}
				<Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
					<Typography
						variant="subtitle1"
						align="center"
						color="text.secondary"
						component="p"
					>
						No Rights Reserved !
					</Typography>
				</Box>
				{/* End footer */}
			</ThemeProvider>
		</Router>
	);
}
