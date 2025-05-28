import { useDraggable } from "@dnd-kit/core";

export default function Task({ task }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });
  const style = transform
    ? { transform: `translate(${transform.x}px,${transform.y}px)` }
    : undefined;
  return (
    <div style={style} ref={setNodeRef} {...listeners} {...attributes}>
      <div>{task.title}</div>
      <div>{task.description}</div>
    </div>
  );
}
