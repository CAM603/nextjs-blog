import styles from "./pokeCard.module.css";

export default function PokeCard({ pokemon }) {
	console.log(pokemon);
	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<div className={styles.title}>
					<h1>
						{pokemon.name.charAt(0).toUpperCase() +
							pokemon.name.slice(1)}
					</h1>
					<p>
						<strong>{pokemon.base_experience} HP</strong>
					</p>
				</div>
				<div className={styles.image}>
					<img src={pokemon.sprites.front_default} />
				</div>
				<h3>Moves</h3>
				{pokemon.moves.slice(0, 5).map((move) => (
					<p>
						{move.move.name.charAt(0).toUpperCase() +
							move.move.name.slice(1)}
					</p>
				))}
			</div>
		</div>
	);
}
