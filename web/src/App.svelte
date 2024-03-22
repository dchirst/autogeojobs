<script lang="ts">
  import Signup from "./lib/Signup.svelte";
  import Companies from "./lib/Companies.svelte"
  import Content from "./lib/Content.svelte";
  import DeprecationMessage from "./lib/DeprecationMessage.svelte";
</script>

<main class="w-full">
  <h1>AutoGeoJobs</h1>
  <h2>A bi-weekly auto-generated newsletter for jobs in the geospatial industry</h2>
  <DeprecationMessage/>
  <Signup/>
  <Content/>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>