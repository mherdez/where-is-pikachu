<script>
    import CardGrill from './components/CardGrill.svelte';
    import Header from './components/Header.svelte';
    import StatusBar from './components/StatusBar.svelte';

    import { createPokemonSet } from './helpers/createPokemonSet'
    import {pikachu} from './store/store'



   createPokemonSet(2)
  //  {pikachu.setPika('pika1')}

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
    margin-bottom: 40px;
  }
</style>