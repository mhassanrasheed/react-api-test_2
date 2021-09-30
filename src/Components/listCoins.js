import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

/**
 * Displays the list of coins fetch from CoinGenko API
 *
 * @export
 * @param {*} { coins } - object contains coin objects
 * @return {*} {View} - Displaying the list of all the coins fetch from api
 */
export default function ListCoins({ coins }) {
	function Coins() {
		return coins.map((coin) => (
			<Grid item key={coin.id} xs={12} sm={6} md={4}>
				<Card
					sx={{
						height: "100%",
						display: "flex",
						flexDirection: "column",
					}}
				>
					<CardMedia component="img" image={coin.image} />
					<CardContent sx={{ flexGrow: 1 }}>
						<Typography gutterBottom variant="h5" component="h2">
							{coin.name}
						</Typography>
						<Typography>
							<span>
								<li>Current Price: ${coin.current_price}</li>
								<li>24h High: ${coin.high_24h}</li>
								<li>24h Low: ${coin.low_24h}</li>
							</span>
						</Typography>
					</CardContent>
					<CardActions>
						<Link
							to={{ pathname: `/currency/${coin.symbol}`, state: coin }}
							style={{ textDecoration: "none" }}
						>
							<Button size="small" variant="contained">
								More
							</Button>
						</Link>
					</CardActions>
				</Card>
			</Grid>
		));
	}
	return (
		<>
			<Box
				sx={{
					bgcolor: "background.paper",
					pt: 8,
					pb: 6,
				}}
			>
				<Container maxWidth="sm">
					<Typography
						component="h1"
						variant="h2"
						align="center"
						color="text.primary"
						gutterBottom
					>
						Market Pairs (USD)
					</Typography>
					<Typography
						variant="h5"
						align="center"
						color="text.secondary"
						paragraph
					>
						The following is a list of crypto currencies with information
						related to the USD trading pair.
					</Typography>
				</Container>
			</Box>
			<Container sx={{ py: 8 }} maxWidth="md">
				{/* End hero unit */}
				<Grid container spacing={4}>
					<Coins />
				</Grid>
			</Container>
		</>
	);
}
