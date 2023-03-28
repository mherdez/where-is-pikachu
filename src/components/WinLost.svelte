<script>
  import { collection, hearts } from '../store/store';
</script>

{#if $collection.length === 5}
  <img src="assets/images/pika.png" alt="" />
  <h1 class="blue">YOU WIN !!!</h1>
{/if}
{#if $hearts <= 0}
  <h1>YOU LOST</h1>
{/if}

<style>
  h1 {
    font-size: 8rem;
    text-align: center;
    margin-top: 10%;
    color: red;
    text-shadow: 10px 10px 20px rgba(0, 0, 0, 0.602);
    -webkit-text-stroke: 2px white;
  }

  .blue {
    margin-top: 0;
    color: rgb(0, 145, 255);
  }
  img {
    display: block;
    margin: 0 auto;
    width: 300px;
  }
</style>
