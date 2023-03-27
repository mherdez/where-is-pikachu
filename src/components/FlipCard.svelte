<script>
  import '../css/cards.css';

  export let pokemon_id;

  let viewCard = false;

  const flipCard = (e) => {
    const id = e.currentTarget.id;
    console.log(id)
    const front =  document.querySelector(`#${id} .flipFront`)
    const back =  document.querySelector(`#${id} .flipBack`)
    front.style.transform = 'rotateY(-180deg)';
    back.style.transform = 'rotateY(0deg)';
    viewCard = true;
  };
  const endFlipCard = (e) => {
    const id = e.currentTarget.id;
    console.log(id)
    const front =  document.querySelector(`#${id} .flipFront`)
    const back =  document.querySelector(`#${id} .flipBack`)
    if( viewCard ) {
      front.style.transform = 'rotateY(0deg)';
      back.style.transform = 'rotateY(180deg)';
    }
  };
</script>

<div
  class="wrap"
  on:click={flipCard}
  on:pointerleave={endFlipCard}
  on:keydown={flipCard}
  id='cardId{pokemon_id.id}'
>
  <div class="card flipFront"/>
  <div class="card flipBack blue-card">
    <img src="/assets/images/{pokemon_id.img}.svg" class="imagen" alt="" />
  </div>
</div>

<style>
  .wrap {
    align-items: center;
    cursor: pointer;
    display: flex;
    height: 450px;
    justify-content: center;
    position: relative;
  }

  .card {
    backface-visibility: hidden;
    height: 100%;
    position: absolute;
    transform-origin: center;
    transition: 1s transform;
    /* width: 70%; */
    border-radius: 10px;
    aspect-ratio: 9/14;
  }
  .flipFront {
    background-color: #555;
    background-image: url('/assets/images/pokeball-gray.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 70%;
    border: 2px solid rgba(14, 14, 14, 0.861);
  }
  .flipBack {
    align-items: center;
    border: 20px solid white;
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
    width: 80%;
    object-fit: cover;
    object-position: center;
  }

</style>
