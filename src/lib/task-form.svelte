<script lang="ts">
  import { addTask } from "../db/db";

  let newTask: string = $state("");
  let invalidTask: boolean = $state(true);

  import { task } from "../state.svelte";

  function onInputChange() {
    invalidTask = newTask.trim() === "";
  }

  async function formSubmitted(e: Event) {
    e.preventDefault();
    if (newTask === "") {
      return;
    }
    await addTask(newTask);
    newTask = "";
    await task.loadAllTasks(); // Load all tasks after adding
  }
</script>

<form onsubmit={formSubmitted}>
  <fieldset role="group">
    <input
      oninput={() => onInputChange()}
      id="newTask"
      name="task"
      type="text"
      bind:value={newTask}
      placeholder="Go get milk"
      autocomplete="off"
    />
    <input disabled={invalidTask} type="submit" value="Add" />
  </fieldset>
</form>
