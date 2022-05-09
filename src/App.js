import React from "react";
import "./styles.css";
import { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Tasklist from "./components/TaskList/Tasklist";

const task = {
  id: 0,
  title: "Nova Tarefa",
  state: "pendente"
};

let idAcc = 0;
const generateId = () => {
  idAcc = idAcc + 1;
  return idAcc;
};

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state
    };
    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };

  const updateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((existingTasks) => {
      return existingTasks.filter((task) => task.id !== id);
    });
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Tasklist
          title="Pendente"
          taskState="Pendente"
          onAddTask={addTask}
          tasks={tasks.filter((t) => t.state === "Pendente")}
          onTaskUpdade={updateTask}
          onDeleteTask={deleteTask}
        />
        <Tasklist
          title="Fazendo"
          taskState="Fazendo"
          onAddTask={addTask}
          tasks={tasks.filter((t) => t.state === "Fazendo")}
          onTaskUpdade={updateTask}
          onDeleteTask={deleteTask}
        />
        <Tasklist
          title="Completa"
          taskState="Completa"
          onAddTask={addTask}
          tasks={tasks.filter((t) => t.state === "Completa")}
          onTaskUpdade={updateTask}
          onDeleteTask={deleteTask}
        />
      </div>
    </div>
  );
}
