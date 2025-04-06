import { deleteTask, getAllTasks, updateTask, type Task } from "./db/db";

class Tasks {
  tasks: Task[] = $state([]);
  tasksCompleted = $derived(this.tasks.filter((task) => task.done));
  tasksNotCompleted = $derived(this.tasks.filter((task) => !task.done));

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
