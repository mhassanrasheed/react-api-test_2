import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link, useLocation, NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

/**
 * Render the Detials of the coin
 *
 * @return {*} View containing the details of the coin
 */
const CoinDetail = () => {
	let location = useLocation();
	const { state: coin } = location;
	return (
		<Container sx={{ py: 10 }} maxWidth="sm">
			<Card
				sx={{
					height: "100%",
					display: "flex",
					flexDirection: "column",
				}}
				variant="outlined"
			>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{coin.name}
					</Typography>
					<Typography>
						<span>
							<li>Current Price: ${coin.current_price}</li>
							<li>All time high price: ${coin.ath}</li>
							<li>Market Cap: ${coin.market_cap}</li>
							<li>Market Cap Rank: {coin.market_cap_rank}</li>
						</span>
					</Typography>
				</CardContent>
				<CardActions>
					<Link to="/" style={{ textDecoration: "none" }}>
						<Button variant="contained">Back</Button>
					</Link>
				</CardActions>
			</Card>
		</Container>
	);
};

export default CoinDetail;
