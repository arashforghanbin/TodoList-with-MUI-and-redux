import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Header from "./components/common/Header";
import EnhancedTable from "./components/custom/Table";
import { persistor, store } from "./redux/store/store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="App">
          <Header />
          <EnhancedTable />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
