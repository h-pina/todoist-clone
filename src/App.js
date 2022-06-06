import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ProjectWindow from "./components/Project";

import { useState } from "react";

//Create Project WIndow --> DONE
//Create Section Card --> Done
//Create Mini Task --> Done
//Create Modal Expanded Task
//Create Header Menu --> Searchbar & Sandwitch
//Create Sidebar menu
//

function App() {
  const [sideBarShow, setSideBarSHow] = useState(false);

  const updateShowValue = () => {
    // tem alguma coisa errada nessa funcao man
    setSideBarSHow(!sideBarShow);
  };

  return (
    <>
      <Header updateCallback={updateShowValue} />
      <div className="content">
        <Sidebar show={sideBarShow} />
        <ProjectWindow sidebarOn={sideBarShow} />
      </div>
    </>
  );
}

export default App;
