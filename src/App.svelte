<script>
  // @ts-nocheck
  import Home from "./components/Home.svelte";
  import { Router, Link, Route } from "svelte-routing";
  import NewGame from "./components/NewGame.svelte";
  import Cakenekt4 from "./components/Cakenekt4.svelte";

  export let url = "";
</script>

<Router {url}>
  <div>
    <Route path="/"><Home /></Route>
    <Route path="/New-Game/:gameId"><NewGame /></Route>
    <Route path="/Game/:gameId"><Cakenekt4 /></Route>
  </div>
</Router>
