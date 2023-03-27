<script>
    import CardGrill from './components/CardGrill.svelte';
    import Header from './components/Header.svelte';
    import StatusBar from './components/StatusBar.svelte';

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
    margin-bottom: 100px;
  }
</style>