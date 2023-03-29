<script>
  import { collection, hearts, newgame } from '../store/store';

  const menu = () => {
    newgame.setNewGame(true)
  }
</script>

{#if $collection.length === 5}
<img src="assets/images/pika.png" alt="" />
<h1 class="blue">You Win</h1>
{/if}
{#if $hearts <= 0}
<h1>You Lost</h1>
{/if}
{#if $collection.length === 5 || $hearts <= 0}
<div class="container">
  <div class="lvl" on:click={menu}>Volver al menú principal</div>
</div>
{/if}

<style>
  h1 {
    font-size: 8rem;
    text-align: center;
    margin-top: 5%;
    color: rgb(255, 0, 0);
    text-shadow: 10px 10px 20px rgba(0, 0, 0, 0.602);
    -webkit-text-stroke: 2px white;
    word-spacing: 20px;
  }

  .blue {
    margin-top: 0;
    color: rgb(0, 145, 255);
  }
  img {
    display: block;
    margin: 0 auto;
    width: 250px;
  }
  .container {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 3rem auto;
    /* border: 5px solid rgb(248, 205, 16); */
    /* padding: 40px; */
    /* border-radius: 10px; */
    /* box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.5); */
  }

  .lvl {
    box-sizing: border-box;
    margin: 30px;
    font-family: sans-serif;

    font-size: 1.5rem;
    padding: 15px 10%;
    background-color: rgb(0, 187, 255);
    border: 3px solid rgb(0, 71, 129);
    color: rgb(0, 71, 129);
    border-radius: 5px;
    text-align: center;
  }
  .lvl:hover {
    box-sizing: border-box;
    text-shadow: 5px 5px 4px rgba(0, 0, 0, 0.3);
    color: white;
    box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    background-color: rgb(242, 198, 0);
    border: 3px solid white;
  }
</style>
