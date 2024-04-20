<script>
  import firebase from "firebase/compat/app";
  import { onMount } from "svelte";
  import { updateGame } from "../api requests/game";
  import { navigate } from "svelte-routing";
  import { isPlayer, selectPlayer } from "../lib/PlayerStore";

  const currentUrl = window.location.href;
  const url = new URL(currentUrl);
  const gameId = url.pathname.split("/").pop();
  const db = firebase.database();
  const gameRef = db.ref(`games/${gameId}`);

  let gameData = {};
  onMount(() => {
    const listenerRef = db.ref("games").orderByChild("gameId").equalTo(gameId);
    const onGameUpdated = (snapshot) => {
      const data = snapshot.val();
      if (data) {
        gameData = Object.values(snapshot.val())[0];
      }
    };
    const listener = listenerRef.on("value", onGameUpdated);
    return () => {
      listenerRef.off("value", listener);
    };
  });

  function handlePlayer1() {
    selectPlayer(1);
    updateGame({ gameId, player1: true });
  }

  function handlePlayer2() {
    selectPlayer(2);
    updateGame({ gameId, player2: true });
  }

  const handleShare = () => {
    navigator.clipboard
      .writeText(`https://cakenekt-4-svelte.netlify.app/New-Game/${gameId}`)
      .then(() => {
        window.alert("Game Link Copied!");
      });
  };

  $: {
    if (gameData.player1 && gameData.player2) {
      navigate(`/Game/${gameId}`, { replace: true });
    }
  }
</script>

<main>
  <div class="new-game-container center-container">
    <button on:click={handleShare}>Share Link</button>

    {#if !gameData.player1}
      <button class="width300" on:click={handlePlayer1}> Join Player 1 </button>
    {:else}
      <button class="width300" disabled> Player 1 has joined ⚔️ </button>
    {/if}

    {#if !gameData.player2}
      <button class="width300" on:click={handlePlayer2}> Join Player 2 </button>
    {:else}
      <button class="width300" disabled> Player 2 has joined 🧙‍♂️ </button>
    {/if}
  </div>
</main>
