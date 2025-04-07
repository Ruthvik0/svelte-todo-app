<script lang="ts">
  import { task } from "../state.svelte";
</script>

<input
  type="search"
  bind:value={task.searchValue}
  name="search"
  autocomplete="off"
  placeholder="Search"
  aria-label="Search"
/>
