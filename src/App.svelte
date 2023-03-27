<script>
    import CardGrill from './components/CardGrill.svelte';
    import Header from './components/Header.svelte';
    import StatusBar from './components/StatusBar.svelte';

    import { createPokemonSet } from './helpers/createPokemonSet'

   createPokemonSet(2)

</script>


<header>
  <Header />
  <StatusBar />
</header>

<main>
  <CardGrill />
</main>


<style>
  header {
    margin-bottom: 50px;
  }
</style>