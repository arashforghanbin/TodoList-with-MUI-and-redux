import React from "react";
import { Provider, useSelector } from "react-redux";
import Header from "./components/common/Header";
import AddTaskModal from "./components/custom/AddTaskModal";
import EnhancedTable from "./components/custom/Table";

function App() {
  const openNewTaskModal = useSelector(
    (state) => state.newTaskModal.isNewTaskOpen
  );

  return (
    <div className="App">
      <Header />
      <EnhancedTable />
      <AddTaskModal openModal={openNewTaskModal} />
    </div>
  );
}

export default App;
