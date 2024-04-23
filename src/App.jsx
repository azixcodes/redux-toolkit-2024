import React from "react";
import Counter from "./components/Counter";
import { Provider } from "react-redux";
import { store } from "./store";
import Test from "./components/Test";
import AddTodo from "./components/AddTodo";
const App = () => {
  return (
    <Provider store={store}>
      <div className="flex items-center flex-col py-2">
        <AddTodo />
        <Counter />
        <Test />
      </div>
    </Provider>
  );
};

export default App;
