import Head from "next/head";
import fetch from "node-fetch";
import Layout from "../../components/layout/layout";
import Link from "next/link";

export default function All({ pokemon }) {
	return (
		<Layout>
			<Head>
				<title>My Pokemon</title>
			</Head>
			<h1>Pokemon I Own:</h1>
			<ul>
				{pokemon.results.map((poke) => (
					<li key={poke.name}>
						<Link href="/pokemon/[id]" as={`/pokemon/${poke.name}`}>
							<a>
								{poke.name.charAt(0).toUpperCase() +
									poke.name.slice(1)}
							</a>
						</Link>
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
