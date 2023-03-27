<script>
  // import Card from './Card.svelte';
  import FlipCard from './FlipCard.svelte';
  import {createPokemonSet} from '../helpers/createPokemonSet'

  const pokemones = [...createPokemonSet(3)];

  console.log(pokemones)
</script>

<div class="grid-cards">
  {#each pokemones as pokemon}
    <FlipCard pokemon_id={pokemon.id} pokemon_url={pokemon.url} />
  {/each}
</div>

<style>
  .grid-cards {
    margin: 0 auto;
    /* width: 100%; PARA 5 CARTAS*/
    width: 65%;
    display: grid;
    /* grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); */
    grid-template-columns: repeat(3, minmax(100px, 1fr));
    /* grid-gap: 20px; */
    padding: 10px;
  }
</style>
