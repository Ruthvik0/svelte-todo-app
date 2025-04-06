<script lang="ts">
  import Trash from "@lucide/svelte/icons/trash";
  import { type Task } from "../db/db";

  import { task as taskState } from "../state.svelte";
</script>

<section>
  {#snippet Task(task: Task)}
    <article>
      <input
        type="checkbox"
        checked={task.done}
        onchange={() => taskState.toggleDone(task.id, !task.done)}
      />
      <span class:done={task.done}>{task.title}</span>
      <Trash
        style="cursor: pointer;"
        onclick={() => taskState.removeTask(task.id)}
      />
    </article>
  {/snippet}

  {#if taskState.tasks.length <= 0}
    <p>Add new tasks</p>
  {/if}

  {#each taskState.tasks as task}
    {@render Task(task)}
  {/each}
</section>

<style>
  section {
    max-height: 70vh;
    overflow-y: scroll;
  }

  article {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  span {
    flex-grow: 1;
    text-transform: capitalize;
    align-self: center;
  }

  .done {
    text-decoration: line-through;
    color: gray;
  }
</style>
