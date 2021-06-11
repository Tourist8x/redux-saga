import React from "react";
import { TheLayout } from "./layout/TheLayout";
import './style/Dashboard.css';
import { initializeIcons } from "@fluentui/react";
initializeIcons();
const App = () => {
    return (
        <TheLayout />
      );
};

export default App;
