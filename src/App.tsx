import {
  DndContext,
  DragEndEvent,
  useDraggable,
  useDroppable,
} from "@dnd-kit/core";
import { useState } from "react";
import Column from "./components/Column";
import Header from "./components/Header";

function App() {
  const COLUMNS = [
    { id: "RESOURCES", title: "Resources" },
    { id: "TO_DO", title: "Todo" },
    { id: "IN_PROGRESS", title: "In Progress" },
    { id: "DONE", title: "DONE" },
  ];
  const INITIAL_TASKS = [
    {
      id: 1,
      title: "Design login page",
      description:
        "Create a responsive UI for the login page with form validation.",
      status: "TO_DO",
    },
    {
      id: 2,
      title: "Setup database schema",
      description:
        "Define tables and relationships for users, tasks, and projects.",
      status: "TO_DO",
    },
    {
      id: 3,
      title: "Implement authentication",
      description:
        "Add JWT-based authentication with login and registration APIs.",
      status: "IN_PROGRESS",
    },
    {
      id: 4,
      title: "Write unit tests",
      description:
        "Ensure coverage for critical service and utility functions.",
      status: "DONE",
    },
    {
      id: 5,
      title: "Create Kanban board",
      description: "Build draggable columns and tasks using @dnd-kit/core.",
      status: "IN_PROGRESS",
    },
    {
      id: 6,
      title: "Set up CI/CD pipeline",
      description:
        "Configure GitHub Actions to run tests and deploy to Vercel.",
      status: "TO_DO",
    },
    {
      id: 7,
      title: "Fix layout issues",
      description: "Resolve flexbox overflow and padding inconsistencies.",
      status: "DONE",
    },
    {
      id: 8,
      title: "Write API documentation",
      description: "Use Swagger/OpenAPI to document all backend endpoints.",
      status: "TO_DO",
    },
    {
      id: 9,
      title: "Optimize image loading",
      description: "Implement lazy loading for dashboard thumbnails.",
      status: "IN_PROGRESS",
    },
    {
      id: 10,
      title: "Conduct user testing",
      description: "Schedule sessions with 3 users and collect feedback.",
      status: "TO_DO",
    },
  ];

  const [tasks, setTasks] = useState(INITIAL_TASKS);
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over) return;

    const taskId = Number(active.id);
    const newStatus = over.id;

    console.log("active.id:", active.id);
    console.log("over.id:", over.id);

    setTasks((prevTask) =>
      prevTask.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  }

  return (
    <main className="p-2 text-white mx-auto bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-[#4338ca] via-[#6366f1] to-[#a5b4fc]">
      <Header />
      <DndContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-4 gap-2">
          {COLUMNS.map((column) => {
            return (
              <Column
                key={column.id}
                column={column}
                tasks={tasks.filter((task) => {
                  return task.status === column.id;
                })}
                title={column.title}
              />
            );
          })}
        </div>
      </DndContext>
    </main>
  );
}

export default App;
