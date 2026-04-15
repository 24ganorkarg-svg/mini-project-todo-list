import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddTask from "./components/AddTask";
import ViewTasks from "./components/ViewTasks";
import { useState } from "react";
import type { Task } from "./types";
import "./App.css";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <BrowserRouter>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/add"
            element={<AddTask tasks={tasks} setTasks={setTasks} />}
          />
          <Route
            path="/view"
            element={<ViewTasks tasks={tasks} setTasks={setTasks} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;