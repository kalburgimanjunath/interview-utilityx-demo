import {
  DndContext,
  DragEndEvent,
  useDraggable,
  useDroppable,
} from "@dnd-kit/core";
import { useState } from "react";
import Task from "./Task";
import Column from "./Column";
import Header from './Header'

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
      title: "title 1",
      description: "description 1",
      status: "TO_DO",
    },
    {
      id: 2,
      title: "title 2",
      description: "description 2",
      status: "TO_DO",
    },
    {
      id: 3,
      title: "title 3",
      description: "description 3",
      status: "IN_PROGRESS",
    },
    {
      id: 4,
      title: "title 4",
      description: "description 4",
      status: "DONE",
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
    <main className="flex gap-8">
      <Header/>
      <DndContext onDragEnd={handleDragEnd}>
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
      </DndContext>
    </main>
  );
}

export default App;
