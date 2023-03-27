<script>
  import '../css/cards.css';

  // export let carta;
  let viewCard = false;

  const flipCard = () => {
    const front = document.querySelector('.flipFront');
    const back = document.querySelector('.flipBack');
    front.style.transform = 'rotateY(-180deg)';
    back.style.transform = 'rotateY(0deg)';
    viewCard = true;
  };
  const endFlipCard = () => {
    const front = document.querySelector('.flipFront');
    const back = document.querySelector('.flipBack');
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
>
  <div class="card flipFront" />
  <!-- <div class="card flipBack blue-card "> -->
  <div class="card flipBack blue-card">
    <img src="/assets/images/pika1.svg" class="imagen" alt="" />
  </div>
</div>

<style>
  .wrap {
    align-items: center;
    cursor: pointer;
    display: flex;
    height: 400px;
    justify-content: center;
    position: relative;
  }

  .card {
    backface-visibility: hidden;
    height: 100%;
    position: absolute;
    transform-origin: center;
    transition: 1s transform;
    width: 100%;
    border-radius: 10px;
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
    width: 90%;
    object-fit: cover;
    object-position: center;
  }

</style>
