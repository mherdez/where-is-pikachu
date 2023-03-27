<script>
  // import Card from './Card.svelte';
    import FlipCard from './FlipCard.svelte';

    // const pika = ['pika1','pika2','pika3','pika4','pika5'];
    const pika = [1,2,3,4,5].sort( (a,b) => Math.random() - 0.5);

    const pokemon_id = () => {
      const id = pika.shift();
      return {
        id: id,
        img: 'pika'+id
      }
    };
</script>


<div class="grid-cards">
  <FlipCard pokemon_id = {pokemon_id()}/>
  <FlipCard pokemon_id = {pokemon_id()}/>
  <FlipCard pokemon_id = {pokemon_id()}/>
</div>

<style>

  .grid-cards {
    margin: 0 auto;
    /* width: 100%; PARA 5 CARTAS*/
    width: 65%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* grid-gap: 20px; */
    padding: 10px;
  }
</style>





