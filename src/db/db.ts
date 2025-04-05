import Dexie, { type EntityTable } from "dexie";

// Define Database Schema
class TodoDB extends Dexie {
  task: EntityTable<Task, "id">;

  constructor() {
    super("todoDB");

    this.version(1).stores({
      task: "++id, title, done",
    });

    this.task = this.table("task");
  }
}

// Define Data Models
export interface Task {
  id: number;
  title: string;
  done: boolean;
}

export const db = new TodoDB();

/** Add a new task */
export async function addTask(title: string) {
  return await db.task.add({
    title,
    done: false,
  });
}

/** Update a task (toggle done, update title) */
export async function updateTask(id: number, updates: Partial<Task>) {
  return await db.task.update(id, updates);
}

/** Delete a task */
export async function deleteTask(id: number) {
  return await db.task.delete(id);
}

/** Get All Tasks*/
export async function getAllTasks() {
  return await db.task.reverse().toArray();
}