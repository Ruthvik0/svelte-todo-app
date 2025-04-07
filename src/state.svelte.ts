import { deleteTask, getAllTasks, updateTask, type Task } from "./db/db";

class Tasks {
  private tasks: Task[] = $state([]);
  searchValue: string = $state("");

  filteredTasks: Task[] = $derived(
    this.tasks.filter((t) =>
      t.title.toLowerCase().includes(this.searchValue.toLowerCase())
    )
  );

  async loadAllTasks() {
    this.tasks = await getAllTasks();
  }

  async removeTask(id: number) {
    await deleteTask(id);
    await this.loadAllTasks();
  }

  async toggleDone(id: number, done: boolean) {
    await updateTask(id, { done });
    await this.loadAllTasks();
  }
}

export const task = new Tasks();
