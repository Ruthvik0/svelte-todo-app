# Todo App

A simple, efficient, and responsive Todo app built with the latest version of **Svelte 5**. The app allows users to manage their tasks with flexibility in terms of UI and functionality.

## Features

- **Light / Dark Theme Toggle**  
  Choose between light and dark themes for a more personalized experience.

- **Task View Modes**
  - **List View**: View your tasks in a simple list format.
  - **Kanban View**: Organize tasks into boards for a more visual and interactive experience.

- **Local Storage with IndexedDB (via Dexie.js)**  
  All data is stored locally in the browser using **IndexedDB**. For managing IndexedDB, the app uses **Dexie.js**, a powerful and easy-to-use wrapper for IndexedDB. No data is stored in the cloud, ensuring your tasks stay private and offline.

- **Drag and Drop Functionality**  
  The app supports drag-and-drop interactions in the **Kanban View**, powered by the **svelte-dnd-action** library for smooth, intuitive task management.

- **Icons via Lucide**  
  The app uses **Lucide Icons** for a modern, consistent, and customizable icon set throughout the UI. Icons are sourced from [Lucide.dev](https://lucide.dev/) for clean, scalable visuals.

## Upcoming Features

- **Offline Functionality**  
  The app will be enhanced to work offline, allowing users to add and manage tasks without an active internet connection.

- **Task Categories**  
  Users will be able to categorize tasks into different groups (e.g., Work, Personal, Shopping, etc.), making it easier to organize and manage tasks.

## Tech Stack

- **Svelte 5**: The latest version of Svelte used to build the app for a modern, reactive UI.
- **Dexie.js**: A wrapper for IndexedDB to manage local data storage efficiently.
- **Pico CSS**: A minimalistic, responsive CSS framework used for styling the app, including the light/dark theme support.
- **svelte-dnd-action**: A library for implementing drag-and-drop functionality in Svelte apps.
- **Lucide Icons**: A clean, customizable set of icons integrated throughout the app.
- **Service Workers (Planned)**: For offline functionality in the future.

## How to Run the App

1. Clone this repository:
    ```bash
    git clone https://github.com/Ruthvik0/svelte-todo-app.git
    ```

2. Navigate to the project directory:
    ```bash
    cd svelte-todo-app
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Run the app locally:
    ```bash
    npm run dev
    ```

5. Open your browser and go to `http://localhost:5173` to see the app in action.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Contributing

Feel free to fork this repository, create issues, and submit pull requests! Contributions are always welcome.

---

Stay tuned for future updates and features!
