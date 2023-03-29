<script>
  import CardGrill from './components/CardGrill.svelte';
  import Header from './components/Header.svelte';
  import StatusBar from './components/StatusBar.svelte';
  import WinLost from './components/WinLost.svelte';

  import { game, level, newgame } from './store/store';
    import MenuView from './views/MenuView.svelte';

  level.setLevel(8);
</script>

<header>
  <Header />
  <StatusBar />
</header>

<main>
  {#if $newgame}
    <MenuView />
  {:else}
    {#if $game}
      <CardGrill />
    {:else}
      <WinLost />
    {/if}
  {/if}
</main>

<style>
  header {
    margin-bottom: 40px;
  }
</style>
