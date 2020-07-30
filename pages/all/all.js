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
			<h1>My Pokemon</h1>
			{pokemon.results.map((poke, idx) => (
				<div key={poke.name}>
					<Link href="/pokemon/[id]" as={`/pokemon/${idx + 1}`}>
						<a>
							{poke.name.charAt(0).toUpperCase() +
								poke.name.slice(1)}
						</a>
					</Link>
				</div>
			))}
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
