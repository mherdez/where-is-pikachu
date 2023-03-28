<script>
  import CardGrill from './components/CardGrill.svelte';
  import Header from './components/Header.svelte';
  import StatusBar from './components/StatusBar.svelte';
  import WinLost from './components/WinLost.svelte';

  import { game } from './store/store';
</script>

<header>
  <Header />
  <StatusBar />
</header>

<main>
  {#if $game}
    <CardGrill />
  {:else}
    <WinLost />
  {/if}
</main>

<style>
  header {
    margin-bottom: 40px;
  }
</style>
