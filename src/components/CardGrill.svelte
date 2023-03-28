<script>
  // import Card from './Card.svelte';
  import FlipCard from './FlipCard.svelte';
  import {createPokemonSet} from '../helpers/createPokemonSet'

  const pokemones = [...createPokemonSet(3)].sort( () => Math.random() - 0.5);

</script>

<div class="grid-cards">
  {#each pokemones as pokemon}
    <FlipCard pokemon_id={pokemon.id} pokemon_url={pokemon.url} />
  {/each}
</div>

<style>
  .grid-cards {
    margin: 0 auto;
    width: 70vw;
    display: grid;
    grid-template-columns: repeat(3, minmax(250px, 1fr));
    grid-template-rows: 55vh;
    grid-gap: 5%;
    padding: 0 3%;
  }
</style>
