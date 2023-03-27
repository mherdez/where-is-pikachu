<script>
</script>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">


<div class="container">
  <div class="lives">
    <i class="material-icons live">favorite</i>
    <i class="material-icons live">favorite</i>
    <i class="material-icons">favorite</i>
    <!-- <i class="material-icons">favorite_border</i> -->
  </div>

  <div class="collection">
    <img class="pika-collection pika-ok" src="assets/images/pika1.svg" alt="">
    <img class="pika-collection" src="assets/images/pika2.svg" alt="">
    <img class="pika-collection" src="assets/images/pika3.svg" alt="">
    <img class="pika-collection" src="assets/images/pika4.svg" alt="">
    <img class="pika-collection" src="assets/images/pika5.svg" alt="">
  </div>
</div>

<style>
  .container {
    padding: 10px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .material-icons {
    font-size: 3rem;
    color: rgba(119, 119, 119, 0.688);
    -webkit-text-stroke: 3px rgb(94, 94, 94);
  }
  .live {
    -webkit-text-stroke: 3px black;
    color: red;
  }
  .collection {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .pika-collection {
    width: 90px;
    height: 90px;
    filter: grayscale(100%);
    margin-right: 20px;
    border: 3px solid rgb(255, 221, 0);
    padding: 7px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.566);
    cursor: pointer;
  }
  .pika-ok {
    filter: grayscale(0);
  }
</style>