<script lang="ts">
  import Sun from "@lucide/svelte/icons/sun";
  import Moon from "@lucide/svelte/icons/moon";

  let isDarkMode = $state<boolean>(true);
  let theme = $derived(isDarkMode ? "dark" : "light");
  

  let { toggleView }: { toggleView: () => void } = $props();

  function changeTheme() {
    isDarkMode = !isDarkMode;
    document.documentElement.setAttribute("data-theme", theme);
  }
</script>

<nav>
  <ul>
    <li><strong>Tasks</strong></li>
  </ul>
  <ul>
    <li>
      <fieldset style="margin-bottom: 0;">
        <label>
          <input
            onchange={toggleView}
            name="kanban"
            type="checkbox"
            role="switch"
          />
          Kanban
        </label>
      </fieldset>
    </li>
    <li>
      {#if theme === "dark"}
        <Sun onclick={changeTheme} />
      {:else}
        <Moon onclick={changeTheme} />
      {/if}
    </li>
  </ul>
</nav>
