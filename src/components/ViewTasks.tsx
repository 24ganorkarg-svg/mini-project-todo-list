import type { Task } from "../types";

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const ViewTasks: React.FC<Props> = ({ tasks, setTasks }) => {
  const deleteTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="glass-card animate-fade-in">
      <div className="form-header">
        <h2>Your Tasks</h2>
      </div>

      {tasks.length === 0 ? (
        <div className="empty-state animate-fade-in">
          <p>No tasks available. Add some tasks to get started!</p>
        </div>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id} className="task-item animate-fade-in">
              <span className="task-title">{task.title}</span>
              <button 
                className="btn-delete"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ViewTasks;