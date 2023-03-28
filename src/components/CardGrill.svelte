<script>
  // import Card from './Card.svelte';
  import FlipCard from './FlipCard.svelte';
  // import {createPokemonSet} from '../helpers/createPokemonSet'
  import { pikachu } from '../store/store';

  const createPokemonSet = () => {
    const pokemones = new Set();

    //TODO: NIVEL
    // while (pokemones.size < 4) {
    // while (pokemones.size < 2) {
    while (pokemones.size < 1) {
      const p = Math.floor(Math.random() * 600 + 1);
      if (p != 25 && p != 26) {
        pokemones.add({
          id: p,
          url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${p}.svg`,
        });
      }
    }

    // ------------------
    const pi = () => {
      const id = $pikachu[0];
      return {
        id: `p${id}`,
        url: `/assets/images/pika${id}.svg`,
      };
    };

    pokemones.add(pi());
    // ------------------

    //TODO: NIVEL
    // const order = [0, 1, 2, 3, 4].sort(() => Math.random() - 0.5);
    // const order = [0, 1, 2].sort(() => Math.random() - 0.5);
    const order = [0, 1].sort(() => Math.random() - 0.5);

    const p = [...pokemones];
    //TODO: NIVEL
    // return [p[order[0]], p[order[1]], p[order[2]], p[order[3]], p[order[4]]];
    // return [p[order[0]], p[order[1]], p[order[2]]];
    return [p[order[0]], p[order[1]]];
  };

  //TODO: NIVEL
  // const pokemones = [...createPokemonSet(5)].sort(() => Math.random() - 0.5);
  // const pokemones = [...createPokemonSet(3)].sort(() => Math.random() - 0.5);
  const pokemones = [...createPokemonSet(2)].sort(() => Math.random() - 0.5);
</script>

<!-- <div class="grid-cards-5"> -->
<!-- <div class="grid-cards-3"> -->
<div class="grid-cards-2">
  {#each pokemones as pokemon}
    <FlipCard pokemon_id={pokemon.id} pokemon_url={pokemon.url} />
  {/each}
</div>

<style>
  .grid-cards-5 {
    margin: 0 auto;
    width: 90vw;
    display: grid;
    grid-template-columns: repeat(5, minmax(250px, 1fr));
    grid-template-rows: 400px 400px;
    grid-gap: 2%;
    padding: 0 1%;
  }
  .grid-cards-3 {
    margin: 0 auto;
    width: 70vw;
    display: grid;
    grid-template-columns: repeat(3, minmax(250px, 1fr));
    grid-template-rows: 55vh;
    grid-gap: 5%;
    padding: 0 3%;
  }
  .grid-cards-2 {
    margin: 0 auto;
    width: 50vw;
    display: grid;
    grid-template-columns: repeat(2, minmax(250px, 1fr));
    grid-template-rows: 55vh;
    grid-gap: 6%;
    padding: 0 3%;
  }
</style>
