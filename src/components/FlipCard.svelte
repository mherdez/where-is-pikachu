<script>
  import '../css/cards.css';
  import { pikachu, hearts, game, collection } from '../store/store';

  export let pokemon_id;
  export let pokemon_url;

  let viewCard = false;

  const flipCard = (e) => {
    const id = e.currentTarget.id;
    const front = document.querySelector(`#${id} .flipFront`);
    const back = document.querySelector(`#${id} .flipBack`);
    front.style.transform = 'rotateY(-180deg)';
    back.style.transform = 'rotateY(0deg)';
    setTimeout(() => {
      if (id.includes('p')) {
        collection.setCollection(`pika${id.slice(-1)}`);
        pikachu.setPika(id.slice(-1));
        // console.log($pikachu, $collection);
      } else {
        hearts.updateHeart();
      }
      viewCard = true;
    }, 500);
  };
  const endFlipCard = (e) => {
    const id = e.currentTarget.id;
    const front = document.querySelector(`#${id} .flipFront`);
    const back = document.querySelector(`#${id} .flipBack`);
    // console.log($hearts)
    if (viewCard) {
      front.style.transform = 'rotateY(0deg)';
      back.style.transform = 'rotateY(180deg)';
      game.setGame(!$game);
      if ($hearts <= 0) {
        // console.log('You lost');
        return;
      }
      if ($collection.length == 5) {
        // console.log('You won');
        return;
      }
      setTimeout(() => {
        game.setGame(!$game);
      }, 0);
    }
  };
</script>

<div
  class="wrap"
  on:click={flipCard}
  on:pointerleave={endFlipCard}
  on:keydown={flipCard}
  id="cardId{pokemon_id}"
>
  <div class="card flipFront" />
  <div
    class="card flipBack {pokemon_id.toString().includes('p')
      ? 'blue-card'
      : 'gray-card'}"
  >
    <img src={pokemon_url} class="imagen" alt="" />
  </div>
</div>

<style>
  .wrap {
    align-items: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    position: relative;
  }

  .card {
    backface-visibility: hidden;
    position: absolute;
    transform-origin: center;
    transition: 1s transform;
    border-radius: 15px;
    width: 100%;
    height: 100%;
  }
  .flipFront {
    background-color: #555;
    background-image: url(/assets/images/pokeball-gray.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 70%;
    border: 2px solid rgba(14, 14, 14, 0.861);
  }
  .flipBack {
    align-items: center;
    border: 1rem solid white;
    display: flex;
    justify-content: center;
    transform: rotateY(-180deg);
    box-shadow: 0px 0px 50px 10px rgba(0, 0, 0, 0.6);
  }

  .wrap:hover .flipFront {
    box-shadow: 0px 0px 50px 10px rgba(0, 0, 0, 0.6);
    background-color: rgba(0, 84, 210, 0.792);
    background-image: url(/assets/images/pokeball.svg);
  }

  .imagen {
    max-width: 90%;
    object-fit: cover;
    object-position: center;
  }

  @media screen and (min-width: 768px) {
    .card {
      /* min-height: 80%; */
    }
  }
</style>