<script>
  // import '../css/cards.css';
  import '../css/flip.css';

  const id = 25;
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  const flipCard = () => {
    console.log('flip card');
  };
</script>

<div class="card">
  <div class="card-back" />
  <div class="card-front" />
</div>

<style>
  .card {
    /* background-position: 50% -100%; */
    /* height: 400px; */
    /* transition: transform 300ms ease-in-out; */
    align-items: center;
    aspect-ratio: 2/3;
    border-radius: 5px;
    border: 3px solid rgba(46, 46, 46, 0.5);
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 250px;
  }
  .photo-card {
    width: 70%;
    height: 100%;
    object-fit: cover;
  }
  .card:hover {
    transform: translate(2px, 2px);
    cursor: pointer;
  }
  .card-shadow {
    box-shadow: 0px 0px 30px 10px rgba(0, 0, 0, 0.6);
  }
  .card-front {
    border: 15px solid white;
    background-color: red;
    background-image: url(assets/pokeball.svg);

    position: absolute;
    transform-origin: center;
    transition: 1s transform;
    backface-visibility: hidden;
  }
  .card-back {
    background-color: #5e5e5e;
    /* background-image: url(assets/images/pokeball-gray.svg); */
    background-image: url(assets/images/pika1.svg);
    background-size: 60% 60%;
    background-repeat: no-repeat;
    background-position: center;

    transition: 1s transform;

    position: absolute;
    transform-origin: center;
    transform: rotateY(-180deg);
    backface-visibility: hidden;
    border: 10px solid white;
  }
  .card:hover {
    box-shadow: 0px 0px 50px 10px rgba(0, 0, 0, 0.6);
    background-image: url(assets/images/pokeball.svg);
    background-color: rgba(0, 84, 210, 0.792);
  }
/*
  .card:hover .card-front {
    transform: rotateY(-180deg) ;
}
.card:hover .card-back {
  transform: rotateY(0deg);
} */
</style>
