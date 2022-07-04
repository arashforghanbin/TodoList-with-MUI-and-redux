import React from "react";
import { useSelector } from "react-redux";
import Header from "./components/common/Header";
import AddTaskModal from "./components/custom/AddTaskModal";
import EnhancedTable from "./components/custom/Table";
import ViewTaskModal from "./components/custom/ViewTaskModal";

function App() {
  const openNewTaskModal = useSelector(
    (state) => state.openModalReducer.isNewTaskOpen
  );
  const openViewTaskModal = useSelector(
    (state) => state.openModalReducer.isViewTaskOpen
  );

  return (
    <div className="App">
      <Header />
      <EnhancedTable />
      <AddTaskModal openModal={openNewTaskModal} />
      <ViewTaskModal openModal={openViewTaskModal} />
    </div>
  );
}

export default App;
