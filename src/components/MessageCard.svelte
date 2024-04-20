<script>
  export let message;
</script>

<main>
  <div class="text-message">
    {message.player > 0 ? `Player ${message.player}` : "Spectator"}: {message.message}
  </div>
</main>
