<script>
  // @ts-nocheck

  import Blackpiece from "./Blackpiece.svelte";
  import Redpiece from "./Redpiece.svelte";
  import "../stlyes/cakenekt4.css";
  export let gameBoard;
</script>

<main>
  <div id="col0" class="column">
    <div class="spot00">
      {#if gameBoard[0][0] === "black"}
        <Blackpiece />
      {:else if gameBoard[0][0] === "red"}
        <Redpiece />
      {/if}
    </div>
    <div class="spot01">
      {#if gameBoard[0][1] === "black"}
        <Blackpiece />
      {:else if gameBoard[0][1] === "red"}
        <Redpiece />
      {/if}
    </div>
    <div class="spot02">
      {#if gameBoard[0][2] === "black"}
        <Blackpiece />
      {:else if gameBoard[0][2] === "red"}
        <Redpiece />
      {/if}
    </div>
    <div class="spot03">
      {#if gameBoard[0][3] === "black"}
        <Blackpiece />
      {:else if gameBoard[0][3] === "red"}
        <Redpiece />
      {/if}
    </div>
    <div class="spot04">
      {#if gameBoard[0][4] === "black"}
        <Blackpiece />
      {:else if gameBoard[0][4] === "red"}
        <Redpiece />
      {/if}
    </div>
    <div class="spot05">
      {#if gameBoard[0][5] === "black"}
        <Blackpiece />
      {:else if gameBoard[0][5] === "red"}
        <Redpiece />
      {/if}
    </div>
  </div>
  <div id="col1" class="column">
    <div class="spot10">
      {#if gameBoard[1][0] === "black"}
        <Blackpiece />
      {:else if gameBoard[1][0] === "red"}
        <Redpiece />
      {/if}
    </div>
    <div class="spot11">
      {#if gameBoard[1][1] === "black"}
        <Blackpiece />
      {:else if gameBoard[1][1] === "red"}
        <Redpiece />
      {/if}
    </div>
    <div class="spot12">
      {#if gameBoard[1][2] === "black"}
        <Blackpiece />
      {:else if gameBoard[1][2] === "red"}
        <Redpiece />
      {/if}
    </div>
    <div class="spot13">
      {#if gameBoard[1][3] === "black"}
        <Blackpiece />
      {:else if gameBoard[1][3] === "red"}
        <Redpiece />
      {/if}
    </div>
    <div class="spot14">
      {#if gameBoard[1][4] === "black"}
        <Blackpiece />
      {:else if gameBoard[1][4] === "red"}
        <Redpiece />
      {/if}
    </div>
    <div class="spot15">
      {#if gameBoard[1][5] === "black"}
        <Blackpiece />
      {:else if gameBoard[1][5] === "red"}
        <Redpiece />
      {/if}
    </div>
  </div>
  <div id="col2" class="column">
    <div class="spot20">
      {#if gameBoard[2][0] === "black"}
        <Blackpiece />
      {:else if gameBoard[2][0] === "red"}
        <Redpiece />
      {/if}
    </div>
    <div class="spot21">
      {#if gameBoard[2][1] === "black"}
        <Blackpiece />
      {:else if gameBoard[2][1] === "red"}
        <Redpiece />
      {/if}
    </div>
    <div class="spot22">
      {#if gameBoard[2][2] === "black"}
        <Blackpiece />
      {:else if gameBoard[2][2] === "red"}
        <Redpiece />
      {/if}
    </div>
    <div class="spot23">
      {#if gameBoard[2][3] === "black"}
        <Blackpiece />
      {:else if gameBoard[2][3] === "red"}
        <Redpiece />
      {/if}
    </div>
    <div class="spot24">
      {#if gameBoard[2][4] === "black"}
        <Blackpiece />
      {:else if gameBoard[2][4] === "red"}
        <Redpiece />
      {/if}
    </div>
    <div class="spot25">
      {#if gameBoard[2][5] === "black"}
        <Blackpiece />
      {:else if gameBoard[2][5] === "red"}
        <Redpiece />
      {/if}
    </div>
  </div>
  <div id="col3" class="column">
    <div class="spot30">
      {#if gameBoard[3][0] === "black"}
        <Blackpiece />
      {:else if gameBoard[3][0] === "red"}
        <Redpiece />
      {/if}
    </div>
    <div class="spot31">
      {#if gameBoard[3][1] === "black"}
        <Blackpiece />
      {:else if gameBoard[3][1] === "red"}
        <Redpiece />
      {/if}
    </div>
    <div class="spot32">
      {#if gameBoard[3][2] === "black"}
        <Blackpiece />
      {:else if gameBoard[3][2] === "red"}
        <Redpiece />
      {/if}
    </div>
    <div class="spot33">
      {#if gameBoard[3][3] === "black"}
        <Blackpiece />
      {:else if gameBoard[3][3] === "red"}
        <Redpiece />
      {/if}
    </div>
    <div class="spot34">
      {#if gameBoard[3][4] === "black"}
        <Blackpiece />
      {:else if gameBoard[3][4] === "red"}
        <Redpiece />
      {/if}
    </div>
    <div class="spot35">
      {#if gameBoard[3][5] === "black"}
        <Blackpiece />
      {:else if gameBoard[3][5] === "red"}
        <Redpiece />
      {/if}
    </div>
  </div>
  <div id="col4" class="column">
    <div class="spot40">
      {#if gameBoard[4][0] === "black"}
        <Blackpiece />
      {:else if gameBoard[4][0] === "red"}
        <Redpiece />
      {/if}
    </div>
    <div class="spot41">
      {#if gameBoard[4][1] === "black"}
        <Blackpiece />
      {:else if gameBoard[4][1] === "red"}
        <Redpiece />
      {/if}
    </div>
    <div class="spot42">
      {#if gameBoard[4][2] === "black"}
        <Blackpiece />
      {:else if gameBoard[4][2] === "red"}
        <Redpiece />
      {/if}
    </div>
    <div class="spot43">
      {#if gameBoard[4][3] === "black"}
        <Blackpiece />
      {:else if gameBoard[4][3] === "red"}
        <Redpiece />
      {/if}
    </div>
    <div class="spot44">
      {#if gameBoard[4][4] === "black"}
        <Blackpiece />
      {:else if gameBoard[4][4] === "red"}
        <Redpiece />
      {/if}
    </div>
    <div class="spot45">
      {#if gameBoard[4][5] === "black"}
        <Blackpiece />
      {:else if gameBoard[4][5] === "red"}
        <Redpiece />
      {/if}
    </div>
  </div>
  <div id="col5" class="column">
    <div class="spot50">
      {#if gameBoard[5][0] === "black"}
        <Blackpiece />
      {:else if gameBoard[5][0] === "red"}
        <Redpiece />
      {/if}
    </div>
    <div class="spot51">
      {#if gameBoard[5][1] === "black"}
        <Blackpiece />
      {:else if gameBoard[5][1] === "red"}
        <Redpiece />
      {/if}
    </div>
    <div class="spot52">
      {#if gameBoard[5][2] === "black"}
        <Blackpiece />
      {:else if gameBoard[5][2] === "red"}
        <Redpiece />
      {/if}
    </div>
    <div class="spot53">
      {#if gameBoard[5][3] === "black"}
        <Blackpiece />
      {:else if gameBoard[5][3] === "red"}
        <Redpiece />
      {/if}
    </div>
    <div class="spot54">
      {#if gameBoard[5][4] === "black"}
        <Blackpiece />
      {:else if gameBoard[5][4] === "red"}
        <Redpiece />
      {/if}
    </div>
    <div class="spot55">
      {#if gameBoard[5][5] === "black"}
        <Blackpiece />
      {:else if gameBoard[5][5] === "red"}
        <Redpiece />
      {/if}
    </div>
  </div>
  <div id="col6" class="column">
    <div class="spot60">
      {#if gameBoard[6][0] === "black"}
        <Blackpiece />
      {:else if gameBoard[5][0] === "red"}
        <Redpiece />
      {/if}
    </div>
    <div class="spot61">
      {#if gameBoard[6][1] === "black"}
        <Blackpiece />
      {:else if gameBoard[6][1] === "red"}
        <Redpiece />
      {/if}
    </div>
    <div class="spot62">
      {#if gameBoard[6][2] === "black"}
        <Blackpiece />
      {:else if gameBoard[6][2] === "red"}
        <Redpiece />
      {/if}
    </div>
    <div class="spot63">
      {#if gameBoard[6][3] === "black"}
        <Blackpiece />
      {:else if gameBoard[6][3] === "red"}
        <Redpiece />
      {/if}
    </div>
    <div class="spot64">
      {#if gameBoard[6][4] === "black"}
        <Blackpiece />
      {:else if gameBoard[6][4] === "red"}
        <Redpiece />
      {/if}
    </div>
    <div class="spot65">
      {#if gameBoard[6][5] === "black"}
        <Blackpiece />
      {:else if gameBoard[6][5] === "red"}
        <Redpiece />
      {/if}
    </div>
  </div>
</main>
