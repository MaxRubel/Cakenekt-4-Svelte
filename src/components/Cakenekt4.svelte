<script>
  // @ts-nocheck

  import GameBoard from "./GameBoard.svelte";
  import gameBoardImage from "../assets/roughGameBoard.png";
  import Blackpiece from "./Blackpiece.svelte";
  import Redpiece from "./Redpiece.svelte";
  import firebase from "firebase/compat/app";
  import { onMount } from "svelte";
  import { updateGame } from "../api requests/game";
  import "../stlyes/cakenekt4.css";
  import "../stlyes/game.css";
  import "../stlyes/globals.css";
  import { checkForWinner } from "../utils/checkForWinner";
  import Chat from "./Chat.svelte";
  import { isPlayer } from "../lib/PlayerStore";
  import { navigate } from "svelte-routing";

  let gameState = { turn: "black" };
  const currentUrl = window.location.href;
  const url = new URL(currentUrl);
  const gameId = url.pathname.split("/").pop();
  const db = firebase.database();
  let isPlayerNo;
  let canUpdate = false;

  const unsubscribe = isPlayer.subscribe((value) => {
    isPlayerNo = value;
  });

  let gameBoard = [
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
  ];

  let winner = null;

  const checkForOpenSpot = () => {
    //array check
    for (let i = 0; i < gameBoard[gameState.playingCol].length; i++) {
      if (!gameBoard[gameState.playingCol][i]) {
        return i;
      }
    }
    return false;
  };

  const switchTurns = (lastChange) => {
    if (gameState.turn === "red") {
      gameState = {
        ...gameState,
        turn: "black",
        lastChange,
        playingCol: 3,
      };
    } else {
      gameState = {
        ...gameState,
        turn: "red",
        lastChange,
        playingCol: 3,
      };
    }
  };

  const sendIt = () => {
    const spot = checkForOpenSpot();
    if (spot !== false) {
      const newGameboard = [...gameBoard];
      newGameboard[gameState.playingCol][spot] = gameState.turn;
      gameBoard = newGameboard;
      const lastChange = `${gameState.playingCol}/${spot}/${gameState.turn}`;
      if (checkForWinner(newGameboard, gameState.turn)) {
        gameState = { ...gameState, state: "won", lastChange };
      } else {
        switchTurns(lastChange);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (
      gameState.state === "won" ||
      isPlayerNo === 0 ||
      e.target.id === "chatInput" ||
      (isPlayerNo === 1 && gameState.turn === "red") ||
      (isPlayerNo === 2 && gameState.turn === "black")
    ) {
      return;
    }
    canUpdate = true;
    if (e.key === "ArrowLeft" || e.key === "a") {
      gameState = {
        ...gameState,
        playingCol: gameState.playingCol > 0 ? gameState.playingCol - 1 : 0,
      };
    }

    if (e.key === "ArrowRight" || e.key === "d") {
      gameState = {
        ...gameState,
        playingCol:
          gameState.playingCol < 6
            ? gameState.playingCol + 1
            : gameState.playingCol,
      };
    }
    if (e.key === "ArrowDown") {
      sendIt();
    }
  };

  const handlePlayAgain = () => {
    gameBoard = [
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
    ];
    canUpdate = true;
    gameState = {
      ...gameState,
      state: "playing",
      playingCol: 3,
      turn: gameState.turn === "red" ? "black" : "red",
      lastChange: null,
    };
  };

  $: {
    if (canUpdate) {
      updateGame({ gameId, ...gameState });
      canUpdate = false;
    }
  }

  onMount(() => {
    document.body.style.zoom = 0.75;
    const listenerRef = db.ref("games").orderByChild("gameId").equalTo(gameId);
    const onGameUpdated = (snapshot) => {
      const data = snapshot.val();
      if (data) {
        gameState = Object.values(snapshot.val())[0];
        if (gameState.lastChange) {
          const [col, row, player] = gameState.lastChange.split("/");
          const updateGameBoard = [...gameBoard];
          updateGameBoard[col][row] = player;
          gameBoard = updateGameBoard;
        } else {
          gameBoard = [
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
          ];
        }
      }
    };
    const listener = listenerRef.on("value", onGameUpdated);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.zoom = 1;
      listenerRef.off("value", listener);
      document.removeEventListener("keydown", handleKeyDown);
    };
  });
</script>

<main>
  <div>
    <div class="centered-text">
      {#if gameState.state === "playing"}
        <h2>
          {gameState.turn === "black" ? "Player 1's Turn" : "Player 2's Turn"}
        </h2>
      {:else}
        <h2>
          {gameState.turn} wins!
        </h2>
      {/if}
    </div>
    {#if gameState.state === "playing"}
      {#if gameState.turn === "black"}
        <Blackpiece playingCol={gameState.playingCol} />
      {:else}
        <Redpiece playingCol={gameState.playingCol} />
      {/if}
    {:else}
      <button class="end-button" on:click={handlePlayAgain}>
        play again?
      </button>
    {/if}
    <div class="game-grid">
      <img src={gameBoardImage} alt="the game board" />
      <div class="pieces-div">
        <GameBoard {gameBoard} />
      </div>
      <Chat {gameId} isPlayer={isPlayerNo} />
    </div>
    <button
      class="homeButton"
      on:click={() => {
        navigate("/");
      }}
    >
      Home
    </button>
  </div>
</main>

<style>
  .end-button {
    font-size: 20px;
    margin: 36px 0px;
  }

  .homeButton {
    margin: 30px 0px;
  }
</style>
