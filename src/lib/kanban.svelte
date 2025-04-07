<script lang="ts">
  import { dndzone } from "svelte-dnd-action";
  import Trash from "@lucide/svelte/icons/trash";
  import type { Task } from "../db/db";

  import { task as taskState } from "../state.svelte";

  let tasksCompleted: Task[] = $derived(
    taskState.filteredTasks.filter((t) => t.done)
  );
  let tasksNotCompleted: Task[] = $derived(
    taskState.filteredTasks.filter((t) => !t.done)
  );

  function todoHandleDndConsider(e: any) {
    tasksNotCompleted = e.detail.items;
  }

  // Update the task state when it is moved
  function todoHandleDndFinalize(e: any) {
    let todo = e.detail.items;
    const movedTask = todo[0];
    if (movedTask) {
      taskState.toggleDone(movedTask.id, false);
    }
  }

  function completedHandleDndConsider(e: any) {
    tasksCompleted = e.detail.items;
  }

  // Update the task state when it is moved
  function completedHandleDndFinalize(e: any) {
    let todo = e.detail.items;
    const movedTask = todo[0];
    if (movedTask) {
      taskState.toggleDone(movedTask.id, true);
    }
  }
</script>

<div class="grid">
  <section>
    <h4>Todo</h4>
    <div
      style="min-height: 10rem;"
      use:dndzone={{ items: tasksNotCompleted }}
      onconsider={todoHandleDndConsider}
      onfinalize={todoHandleDndFinalize}
    >
      {#each tasksNotCompleted as item (item.id)}
        <article class="card">
          <span>
            {item.title}
          </span>
          <Trash
            style="cursor: pointer;"
            onclick={() => taskState.removeTask(item.id)}
          />
        </article>
      {/each}
    </div>
  </section>

  <section>
    <h4>Completed</h4>
    <div
      style="min-height: 10rem;"
      use:dndzone={{ items: tasksCompleted }}
      onconsider={completedHandleDndConsider}
      onfinalize={completedHandleDndFinalize}
    >
      {#each tasksCompleted as item (item.id)}
        <article class="card">
          <span>
            {item.title}
          </span>
          <Trash
            style="cursor: pointer;"
            onclick={() => taskState.removeTask(item.id)}
          />
        </article>
      {/each}
    </div>
  </section>
</div>

<style>
  .card {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .card span {
    flex-grow: 3;
    text-transform: capitalize;
  }

  section {
    max-height: 60vh;
    overflow-y: scroll;
  }

  @media (max-width: 770px) {
    section {
      max-height: 35vh;
      overflow-y: scroll;
    }
  }
</style>
