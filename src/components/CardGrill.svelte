<script>
  // import Card from './Card.svelte';
    import FlipCard from './FlipCard.svelte';

    const pika = ['pika1','pika2','pika3','pika4','pika5'];

    const pokemon_id = () => {
      const id = Math.floor(Math.random() * 5 );
      return {
        id: id + 1,
        img: pika[id]
      }
    };
</script>




<div class="grid-cards">
  <!-- TODO: Componer el document.selectquery porq solo selecciona la primera carta cuando das click a cualquiera -->
  <FlipCard pokemon_id = {pokemon_id()}/>
  <FlipCard pokemon_id = {pokemon_id()}/>
  <FlipCard pokemon_id = {pokemon_id()}/>
</div>

<style>

  .grid-cards {
    margin: 0 auto;
    width: 70%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* grid-gap: 20px; */
    padding: 10px;
  }
</style>





