<script lang="ts">
  import "@picocss/pico";
  import "./app.css";

  import { task } from "./state.svelte";

  import Navbar from "./lib/navbar.svelte";
  import Taskform from "./lib/task-form.svelte";
  import TaskList from "./lib/tasks-list.svelte";
  import Kanban from "./lib/kanban.svelte";

  let viewList: boolean = $state(true);

  $effect(() => {
    task.loadAllTasks();
  });
</script>

<main class="container-fluid" style="max-width: 800px;">
  <Navbar bind:viewList />
  <Taskform />
  {#if viewList}
    <TaskList />
  {:else}
    <Kanban />
  {/if}
</main>
