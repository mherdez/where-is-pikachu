<script>
  import {newgame, game, level, hearts, collection, pikachu} from '../store/store'

  const setGame = (lvl) => {
    level.setLevel(lvl)
    newgame.setNewGame(false)
    hearts.setHeart(3)
    game.setGame(true)
    collection.resetCollection()
    pikachu.resetPika()
  }
</script>


<div class="container">
  <h1>Menu</h1>
  <div class="levels">
    <div class="lvl" on:click={() => setGame(2)}>Fácil</div>
    <div class="lvl" on:click={() => setGame(3)}>Normal</div>
    <div class="lvl" on:click={() => setGame(5)}>Difícil</div>
    <div class="lvl" on:click={() => setGame(8)}>Experto</div>
  </div>
</div>

<style>
  .container {
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: -10px auto;
    border: 4px solid rgb(248, 205, 16);
    padding: 30px;
    border-radius: 8px;
    box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.5);
    text-align: center;
  }
  h1 {
    text-align: center;
    font-family: 'Pokemon Solid', sans-serif;
    letter-spacing: 3px;
    text-shadow: 5px 5px 4px rgba(0, 0, 0, 0.3);

    -webkit-text-stroke: 2px rgb(0, 71, 129);
    color: rgb(242, 198, 0);
    font-size: 3.5rem;
    text-shadow: 10px 10px 13px rgba(0, 0, 0, 0.6);
    margin: 15px;
  }
  .lvl {
    box-sizing: border-box;
    margin: 30px;
    font-family: sans-serif;
    letter-spacing: 2px;

    font-size: 1.2rem;
    padding: 13px 90px;
    background-color: rgb(0, 187, 255);
    border: 3px solid rgb(0, 71, 129);
    color: rgb(0, 71, 129);
    font-weight: bold;
    border-radius: 5px;
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