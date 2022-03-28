import React from "react";
import Navbar from "./components/layout/Navbar";
import Todo from "./pages/Todo";

const App: React.FC = (props) => {
  return (
    <div>
      <Navbar />
      <Todo />
    </div>
  );
};

export default App;
