import fetch from "node-fetch";

export async function getPokemon() {
	const res = await fetch("https://pokeapi.co/api/v2/pokemon");
	const pokemon = await res.json();

	return {
		props: {
			pokemon,
		},
	};
}
