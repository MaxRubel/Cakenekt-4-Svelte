<script>
  import { createNewGame, updateGame } from "../api requests/game";
  import { navigate } from "svelte-routing";
  import "../stlyes/globals.css";

  const handleNewGame = () => {
    const payload = {
      player1: false,
      player2: false,
      turn: "black",
      state: "playing",
      playingCol: 3,
    };

    createNewGame(payload).then(({ name }) => {
      updateGame({ gameId: name }).then(() => {
        navigate(`/New-Game/${name}`, { replace: true });
      });
    });
  };
</script>

<main>
  <div class="center-container">
    <div class="big-shrimp">🍤🍤🍤🍤</div>
    <div id="button div">
      <button
        type="button"
        on:click={() => {
          handleNewGame();
        }}
      >
        Create A New Game
      </button>
    </div>
  </div>
</main>

<style>
</style>
