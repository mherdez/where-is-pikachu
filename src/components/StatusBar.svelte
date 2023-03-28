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
    <img id="pika1" class="pika-collection" src="assets/images/pika1.svg" alt="">
    <img id="pika2" class="pika-collection" src="assets/images/pika2.svg" alt="">
    <img id="pika3" class="pika-collection" src="assets/images/pika3.svg" alt="">
    <img id="pika4" class="pika-collection" src="assets/images/pika4.svg" alt="">
    <img id="pika5" class="pika-collection" src="assets/images/pika5.svg" alt="">
  </div>
</div>

<style>
  .container {
    padding: 10px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    margin: 0 auto;
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
    align-items: center;
    display: flex;
    justify-content: center;
  }
  .pika-collection {
    border: 3px solid rgb(255, 221, 0);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.566);
    cursor: pointer;
    filter: grayscale(100%);
    height: 80px;
    margin-right: 25px;
    padding: 8px;
    width: 80px;
    background-color: rgb(0, 174, 255);
  }
  .pika-ok {
    filter: grayscale(0);
  }
</style>