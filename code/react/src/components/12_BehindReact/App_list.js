import React, { useState, useCallback, useMemo } from "react";

import DemoList from "./components/12_BehindReact/Demo/DemoList";
import Button from "./components/12_BehindReact/UI/Button/Button";
import "./App.css";

function App() {
  const [listTitle, setListTitle] = useState("My List");

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
