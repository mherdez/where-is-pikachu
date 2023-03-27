<script>
  // import Card from './Card.svelte';
    import FlipCard from './FlipCard.svelte';
</script>

<div class="grid-cards">
  <!-- TODO: Componer el document.selectquery porq solo selecciona la primera carta cuando das click a cualquiera -->
  <FlipCard />
  <FlipCard />
  <FlipCard />
</div>

<style>

  .grid-cards {
    margin: 0 auto;
    max-width: 900px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 50px;
    padding: 10px;
  }
</style>





