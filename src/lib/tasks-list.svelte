<script lang="ts">
  import Trash from "@lucide/svelte/icons/trash";
  import { type Task } from "../db/db";

  type Props = {
    toggleDone: (id: number, done: boolean) => Promise<void>;
    removeTask: (id: number) => Promise<void>;
    tasks: Task[];
  };

  let { toggleDone, removeTask, tasks }: Props = $props();
</script>

<section>
  {#snippet Task(task: Task)}
    <article>
      <input
        type="checkbox"
        checked={task.done}
        onchange={() => toggleDone(task.id, !task.done)}
      />
      <span class:done={task.done}>{task.title}</span>
      <Trash style="cursor: pointer;" onclick={() => removeTask(task.id)} />
    </article>
  {/snippet}

  {#if tasks.length <= 0}
    <p>Add new tasks</p>
  {/if}

  {#each tasks as task}
    {@render Task(task)}
  {/each}
</section>

<style>
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
