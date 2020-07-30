import Layout from "../../components/layout";
import fetch from "node-fetch";
import Head from "next/head";

export default function Poke({ post }) {
	console.log(post);
	return (
		<Layout>
			<Head>
				<title>Poke</title>
			</Head>
		</Layout>
	);
}

export async function getStaticPaths() {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon`);
	const pokemon = await res.json();

	// Get the paths we want to pre-render based on posts
	const paths = pokemon.results.map((_, id) => ({
		params: { id: id.toString() },
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
	const post = await res.json();

	// Pass post data to the page via props
	return { props: { post } };
}
