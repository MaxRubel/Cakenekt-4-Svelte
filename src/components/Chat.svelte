<script>
  // @ts-nocheck

  import { onMount } from "svelte";
  import firebase from "firebase/compat/app";
  import uniqid from "uniqid";
  import MessageCard from "./MessageCard.svelte";
  import createNewMessage from "../api requests/chat";

  export let gameId;
  export let isPlayer;

  const db = firebase.database();
  let messages = [];
  let messageValue;
  let scrollHere;

  onMount(() => {
    const messagesRef = db
      .ref("messages")
      .orderByChild("gameId")
      .equalTo(gameId);

    const onMessageAdded = (snapshot) => {
      const newMessage = snapshot.val();
      if (newMessage) {
        messages = [...messages, newMessage];
        requestAnimationFrame(() => {
          scrollHere.scrollIntoView({ behavior: "smooth" });
        });
      }
    };

    const addedListener = messagesRef.on("child_added", onMessageAdded);

    return () => {
      messagesRef.off("child_added", addedListener);
    };
  });

  const handleChange = (e) => {
    messageValue = e.target.value;
  };

  const handleSubmit = () => {
    const payload = {
      gameId,
      player: isPlayer,
      id: uniqid(),
      message: messageValue,
      timeStamp: new Date().toString(),
    };
    createNewMessage(payload).then(() => {
      messageValue = "";
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };
</script>

<main>
  <div class="messages-container">
    <div class="text-message">
      {#if messages.length < 3}
        Host: Use the arrow keys to move left + right
        <br />
        Host: Press the down arrow to send it
      {/if}
    </div>
    {#each messages as message (message.id)}
      <MessageCard {message} />
    {/each}
    <div bind:this={scrollHere}>
      <!-- This is the element that will be scrolled into view -->
    </div>
  </div>

  <form on:submit|preventDefault={handleSubmit}>
    <div class="input-container">
      <textarea
        id="chatInput"
        class="chat-message-input"
        style="width: 796px; font-size: 20px;"
        name="message"
        bind:value={messageValue}
        on:change={handleChange}
        on:keydown={handleKeyDown}
        placeholder="Type something..."
      />
    </div>
  </form>
</main>

<style>
  .messages-container {
    height: 25vh;
    font-size: 20px;
    text-align: left;
  }
</style>
