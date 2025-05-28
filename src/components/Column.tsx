import { useDroppable } from "@dnd-kit/core";
import Task from "./Task";
import { ThreeDots } from "react-bootstrap-icons";
const Column = ({ column, tasks, title }) => {
  const { setNodeRef } = useDroppable({
    id: column.id,
  });
  return (
    <div className="bg-gray-300 text-black rounded-lg p-2">
      <div className="font-bold text-xl text-black flex justify-between">
        <span>{column.title}</span>
        <span>
          <ThreeDots />
        </span>
      </div>
      <div ref={setNodeRef}>
        {tasks &&
          tasks.map((task) => {
            return <Task task={task} key={task.id} />;
          })}
      </div>
    </div>
  );
};
export default Column;
