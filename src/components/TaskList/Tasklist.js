import React from "react";
import "./Tasklist.css";
import PropTypes from "prop-types";
/*import { useState } from "react";*/
import TaskItem from "../TaskItem/TaskItem";
import plusIcon from "../../img/plus-icon.svg";

export default function Tasklist({
  title,
  taskState,
  onAddTask,
  tasks,
  onTaskUpdade,
  onDeleteTask
}) {
  const addTask = () => {
    onAddTask("Nova Tarefa", taskState);
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              taskState={task.state}
              onTaskUpdade={onTaskUpdade}
              onDeleteTask={onDeleteTask}
            />
          );
        })}
        {tasks.length === 0 && <div className="empty-list"> Lista Vazia </div>}
        <button className="btn" onClick={addTask}>
          <img src={plusIcon} alt="plus" />
          Adicionar Tarefa
        </button>
      </div>
    </div>
  );
}

Tasklist.protoType = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired
};
