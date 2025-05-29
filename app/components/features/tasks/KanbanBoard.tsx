"use client";

import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import { useState } from "react";
import { GripVertical, Plus } from "lucide-react";
import { Card } from "@/app/components/ui/Card";

type Task = {
  id: string;
  content: string;
};

type Column = {
  id: string;
  title: string;
  tasks: Task[];
};

type ColumnType = "todo" | "doing" | "done";

type Columns = {
  [key in ColumnType]: Column;
};

export default function KanbanBoard() {
  const [columns, setColumns] = useState<Columns>({
    todo: {
      id: "todo",
      title: "A Fazer",
      tasks: [
        { id: "1", content: "Revisar orçamento do cliente X" },
        { id: "2", content: "Enviar proposta para cliente Y" },
      ],
    },
    doing: {
      id: "doing",
      title: "Em Andamento",
      tasks: [{ id: "3", content: "Desenvolver projeto solar" }],
    },
    done: {
      id: "done",
      title: "Concluído",
      tasks: [{ id: "4", content: "Reunião com equipe comercial" }],
    },
  });

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = columns[source.droppableId as ColumnType];
    const finish = columns[destination.droppableId as ColumnType];

    if (start === finish) {
      const newTaskIds = Array.from(start.tasks);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, start.tasks[source.index]);

      const newColumn = {
        ...start,
        tasks: newTaskIds,
      };

      setColumns({
        ...columns,
        [newColumn.id]: newColumn,
      });
      return;
    }

    // Moving from one list to another
    const startTaskIds = Array.from(start.tasks);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      tasks: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.tasks);
    finishTaskIds.splice(destination.index, 0, start.tasks[source.index]);
    const newFinish = {
      ...finish,
      tasks: finishTaskIds,
    };

    setColumns({
      ...columns,
      [newStart.id]: newStart,
      [newFinish.id]: newFinish,
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {(Object.keys(columns) as ColumnType[]).map((columnId) => {
          const column = columns[columnId];
          return (
            <div key={column.id} className="flex flex-col h-full">
              <Card className="flex-1">
                <div className="p-3 border-b border-gray-200 dark:border-gray-600 flex justify-between items-center">
                  <h3 className="font-medium">{column.title}</h3>
                  <button className="text-amber-600 hover:text-amber-700">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <Droppable droppableId={column.id}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="p-2 min-h-[200px]"
                    >
                      {column.tasks.map((task, index) => (
                        <Draggable
                          key={task.id}
                          draggableId={task.id}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="bg-white dark:bg-gray-800 p-3 mb-2 rounded shadow-sm flex items-start"
                            >
                              <GripVertical className="h-4 w-4 text-gray-400 mr-2 mt-0.5" />
                              <div>{task.content}</div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </Card>
            </div>
          );
        })}
      </div>
    </DragDropContext>
  );
}
