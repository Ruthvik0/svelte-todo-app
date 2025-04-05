<script lang="ts">
  import { addTask } from "../db/db";

  let newTask : string = $state("");

  let { loadAllTasks } : {loadAllTasks: () => Promise<void>} = $props()

  async function formSubmitted(e: Event) {
    e.preventDefault();
    await addTask(newTask);
    newTask = "";
    await loadAllTasks()
  }
</script>

<form onsubmit={formSubmitted}>
  <fieldset role="group">
    <input
      name="email"
      type="text"
      bind:value={newTask}
      placeholder="Go get milk"
      autocomplete="off"
    />
    <input type="submit" value="Add" />
  </fieldset>
</form>
