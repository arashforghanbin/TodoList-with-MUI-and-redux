import React from "react";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Header from "./components/common/Header";
import AddTaskModal from "./components/custom/AddTaskModal";
import EnhancedTable from "./components/custom/Table";
import { persistor, store } from "./redux/store/store";

function App() {
  const openNewTaskModal = useSelector((state) => state.newTaskModal.isNewTaskOpen);


  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="App">
          {}
          <Header />
          <EnhancedTable />
          <AddTaskModal openModal={openNewTaskModal} />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
