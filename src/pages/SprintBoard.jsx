import React from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import useTasks from '../hooks/useTasks';
import styles    from './SprintBoardPage.module.css';

const columns = [
  'Not Started',
  'In Progress',
  'Completed',
];

export default function SprintBoardPage() {
  const { tasks, updateStatus } = useTasks();

  function onDragEnd(result) {
    const { source, destination, draggableId } = result;
    if (!destination) return;

    const taskIndex = Number(draggableId);
    const newStatus = columns[destination.droppableId];
    updateStatus(taskIndex, newStatus);
  }

  return (
    <div className={styles.container}>
      <h1>Sprint Board</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className={styles.board}>
          {columns.map((col, colIndex) => (
            <Droppable droppableId={String(colIndex)} key={col}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={styles.column}
                >
                  <h2>{col}</h2>
                  {tasks
                    .map((task, i) => ({ ...task, id: i }))
                    .filter(t => t.status === col)
                    .map((t, idx) => (
                      <Draggable
                        key={t.id}
                        draggableId={String(t.id)}
                        index={idx}
                      >
                        {(prov) => (
                          <div
                            ref={prov.innerRef}
                            {...prov.draggableProps}
                            {...prov.dragHandleProps}
                            className={styles.card}
                            style={prov.draggableProps.style}
                          >
                            <strong>{t.name}</strong>
                            <p>{t.description}</p>
                          </div>
                        )}
                      </Draggable>
                    ))
                  }
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}
