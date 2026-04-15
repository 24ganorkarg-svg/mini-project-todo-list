import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import type { Task } from "../types";

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const AddTask: React.FC<Props> = ({ tasks, setTasks }) => {
  const [task, setTask] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!task.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      title: task,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  return (
    <div className="glass-card animate-fade-in">
      <div className="form-header">
        <h2>Add a New Task</h2>
      </div>

      <form onSubmit={handleSubmit} className="task-form">
        <input
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="What needs to be done?"
          className="task-input"
        />
        <button type="submit" className="btn-primary">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;