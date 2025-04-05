<script lang="ts">
  import "@picocss/pico";
  import { deleteTask, getAllTasks, updateTask, type Task } from "./db/db";

  import Navbar from "./lib/navbar.svelte";
  import Taskform from "./lib/task-form.svelte";
  import TaskList from "./lib/tasks-list.svelte";
  import Kanban from "./lib/kanban.svelte";

  let tasks: Task[] = $state([]);
  let viewList: boolean = $state(true);
  const tasksCompleted = $derived(tasks.filter((task) => task.done));
  const tasksNotCompleted = $derived(tasks.filter((task) => !task.done));

  async function loadAllTasks() {
    tasks = await getAllTasks();
  }

  async function removeTask(id: number) {
    await deleteTask(id);
    await loadAllTasks();
  }

  function toggleView() {
    viewList = !viewList;
  }
  async function toggleDone(id: number, done: boolean) {
    await updateTask(id, { done });
    await loadAllTasks();
  }

  $effect(() => {
    loadAllTasks();
  });
</script>

<main class="container-fluid" style="max-width: 800px;">
  <Navbar {toggleView} />
  <Taskform {loadAllTasks} />
  {#if viewList}
    <TaskList {toggleDone} {removeTask} {tasks} />
  {:else}
    <Kanban {toggleDone} {removeTask} {tasksNotCompleted} {tasksCompleted} />
  {/if}
</main>
