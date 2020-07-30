import Layout from "../../components/layout/layout";
import fetch from "node-fetch";
import Head from "next/head";
import PokeCard from "../../components/pokeCard/pokeCard";

export default function Poke({ pokemon }) {
	return (
		<Layout>
			<Head>
				<title>
					{pokemon.name.charAt(0).toUpperCase() +
						pokemon.name.slice(1)}
				</title>
			</Head>
			<PokeCard pokemon={pokemon} />
		</Layout>
	);
}

export async function getStaticPaths() {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon`);
	const allPokemon = await res.json();

	// Get the paths we want to pre-render based on posts
	const paths = allPokemon.results.map((_, idx) => ({
		params: { id: `${idx + 1}`.toString() },
	}));

	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
	// params contains the post `id`.
	// If the route is like /posts/1, then params.id is 1
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}/`);
	const pokemon = await res.json();

	// Pass post data to the page via props
	return { props: { pokemon } };
}
