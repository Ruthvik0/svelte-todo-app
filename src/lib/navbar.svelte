<script lang="ts">
  import Sun from "@lucide/svelte/icons/sun";
  import Moon from "@lucide/svelte/icons/moon";
  import Info from "@lucide/svelte/icons/info";
  import X from "@lucide/svelte/icons/x";

  let isDarkMode = $state<boolean>(true);
  let theme = $derived(isDarkMode ? "dark" : "light");
  let showInfoModal: boolean = $state(false);

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
      <fieldset style="margin-bottom: 0;margin-top: 10px;">
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
        <Sun style="cursor: pointer;" onclick={changeTheme} />
      {:else}
        <Moon style="cursor: pointer;" onclick={changeTheme} />
      {/if}
    </li>
    <li>
      <Info style="cursor: pointer;" onclick={() => (showInfoModal = true)} />
    </li>
  </ul>
</nav>

<!-- info modal -->
<dialog open={showInfoModal}>
  <article>
    <header class="modal-head">
      <p>
        <strong>Info</strong>
      </p>
      <p>
        <X style="cursor: pointer;" onclick={() => (showInfoModal = false)} />
      </p>
    </header>
    <details name="info">
      <summary>Yo, do you store my data? 🤔</summary>
      <p>
        Chill, we don’t store any of your data! 🚫 All your tasks are saved in
        your browser's IndexedDB using <strong>Dexie.js</strong>. Your data
        stays with you and <strong>only you</strong>, no shady business 💻💾.
      </p>
    </details>

    <hr />

    <details name="info">
      <summary>Can other peeps see my tasks? 😱</summary>
      <p>
        NOPE! Your tasks are like your secret stash 🤫. They are only visible to
        you! Even if you switch to a different browser, it’s like starting
        fresh. Ain’t nobody gonna see your stuff 👀✌️.
      </p>
    </details>

    <hr />

    <details name="info">
      <summary>So what tech are you using? 🤓</summary>
      <p>We’re using the coolest stuff around 😎:</p>
      <ul>
        <li>
          <strong>Svelte 5</strong> – The <strong>hottest</strong> framework for
          creating fast and reactive UIs ⚡️
        </li>
        <li>
          <strong>Dexie.js</strong> – This handles all your local storage needs with
          IndexedDB. Privacy vibes, 100% 🔒
        </li>
        <li>
          <strong>Pico CSS</strong> – Light, minimal, and responsive CSS framework
          for that smooth UI ✨
        </li>
        <li>
          <strong>svelte-dnd-action</strong> – For all those smooth drag-and-drop
          interactions in Kanban view 🖱️
        </li>
        <li>
          <strong>Service Workers (Planned)</strong> – So you can use the app offline
          soon 😜
        </li>
      </ul>
      <p>
        For all the deets, yeet! to <a
          href="https://github.com/Ruthvik0/svelte-todo-app"
          target="_blank">GitHub repo</a
        > and get the full scoop 🚀.
      </p>
    </details>
  </article>
</dialog>

<style>
  .modal-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
