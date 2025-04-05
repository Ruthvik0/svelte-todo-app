<script lang="ts">
  import { dndzone } from "svelte-dnd-action";
  import type { Task } from "../db/db";
  import Trash from "@lucide/svelte/icons/trash";

  type Props = {
    tasksNotCompleted: Task[];
    tasksCompleted: Task[];
    toggleDone: (id: number, done: boolean) => Promise<void>;
    removeTask: (id: number) => Promise<void>;
  };

  let { tasksNotCompleted, tasksCompleted, toggleDone, removeTask }: Props =
    $props();

  function todoHandleDndConsider(e: any) {
    tasksNotCompleted = e.detail.items;
  }

  // Update the task state when it is moved
  function todoHandleDndFinalize(e: any) {
    let todo = e.detail.items;
    const movedTask = todo[0];
    if (movedTask) {
      toggleDone(movedTask.id, false);
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
      toggleDone(movedTask.id, true);
    }
  }
</script>

<div class="grid">
  <section>
    <h1>Todo</h1>
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
          <Trash style="cursor: pointer;" onclick={() => removeTask(item.id)} />
        </article>
      {/each}
    </div>
  </section>

  <section>
    <h1>Completed</h1>
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
          <Trash style="cursor: pointer;" onclick={() => removeTask(item.id)} />
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
    max-height: 70vh;
    overflow-y: scroll;
  }

  @media (max-width: 770px) {
    section {
      max-height: 35vh;
      overflow-y: scroll;
    }
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #0172ad;
    border-radius: 10px; /* rounded corners */
    height: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent; /* transparent track */
  }
</style>
