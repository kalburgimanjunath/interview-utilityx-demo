import { useDraggable } from "@dnd-kit/core";
import { List, Paperclip } from "react-bootstrap-icons";
export default function Task({ task }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });
  const style = transform
    ? { transform: `translate(${transform.x}px,${transform.y}px)` }
    : undefined;
  return (
    <div
      className="bg-white rounded-md p-2 mt-2 mb-2"
      style={style}
      ref={setNodeRef}
      {...listeners}
      {...attributes}
    >
      <div className="text-black-800 text-sm">{task.title}</div>
      <div>{task.description}</div>
      <div className="icons flex">
        <span>
          <List />
        </span>
        <span>
          <Paperclip />
        </span>
      </div>
    </div>
  );
}
