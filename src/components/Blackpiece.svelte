<script>
  import blackChip from "../assets/blackChip.png";
  let padding;
  export let playingCol;

  $: {
    switch (playingCol) {
      case 0:
        padding = "5px";
        break;
      case 1:
        padding = "118px";
        break;
      case 2:
        padding = "225px";
        break;
      case 3:
        padding = "339px";
        break;
      case 4:
        padding = "450px";
        break;
      case 5:
        padding = "560px";
        break;
      case 6:
        padding = "673px";
        break;
    }
  }
</script>

<main>
  <div class="piece" style="padding-left: {padding}">
    <img src={blackChip} alt="Black checkers piece" />
  </div>
</main>

<style>
  .piece {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 6px;
  }
</style>
