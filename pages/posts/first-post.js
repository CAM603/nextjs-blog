import Head from "next/head";
import { getPokemon } from "../../lib/pokemon";
import fetch from "node-fetch";
import Layout from "../../components/layout";

export default function FirstPost({ pokemon }) {
	console.log(pokemon.results);
	return (
		<Layout>
			<Head>
				<title>First Post</title>
			</Head>
			<h1>Pokemon I Own:</h1>
			<ul>
				{pokemon.results.map((poke) => (
					<li key={poke.name}>
						{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
						<br />
						{/* {poke.url && (
							<img style={{ height: "100px" }} src={poke.url} />
						)} */}
					</li>
				))}
			</ul>
		</Layout>
	);
}

export async function getStaticProps() {
	const res = await fetch("https://pokeapi.co/api/v2/pokemon");
	const pokemon = await res.json();
	return {
		props: {
			pokemon,
		},
	};
}
// export async function getStaticProps() {
// 	const pokemon = getPokemon();
// 	return {
// 		props: {
// 			pokemon,
// 		},
// 	};
// }
