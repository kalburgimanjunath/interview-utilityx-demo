import { useDroppable } from "@dnd-kit/core";
import Task from "./Task";

const Column = ({ column, tasks, title }) => {
  const { setNodeRef } = useDroppable({
    id: column.id,
  });
  return (
    <>
      <div className="font-bold">{column.title}</div>
      <div ref={setNodeRef}>
        {tasks &&
          tasks.map((task) => {
            return <Task task={task} key={task.id} />;
          })}
      </div>
    </>
  );
};
export default Column;
