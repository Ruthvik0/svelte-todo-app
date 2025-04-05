<script lang="ts">
  import { addTask } from "../db/db";

  let newTask: string = $state("");
  let invalidTask: "false" | "true" = $state("false");

  let { loadAllTasks }: { loadAllTasks: () => Promise<void> } = $props();

  async function formSubmitted(e: Event) {
    e.preventDefault();

    await addTask(newTask);
    newTask = ""; // Reset the input field after adding
    await loadAllTasks(); // Load all tasks after adding
  }

  $effect(() => {
    invalidTask = newTask.trim() === "" ? "true" : "false";
  });
</script>

<form onsubmit={formSubmitted}>
  <fieldset role="group">
    <input
      id="newTask"
      name="task"
      type="text"
      bind:value={newTask}
      placeholder="Go get milk"
      autocomplete="off"
      aria-invalid={invalidTask}
    />
    <input disabled={invalidTask === "true"} type="submit" value="Add" />
  </fieldset>
</form>
