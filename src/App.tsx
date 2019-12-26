import React from "react";
import "./App.css";
import Header from "./Header";
import MentalArithmetic from "./MentalArithmetic";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <MentalArithmetic />
    </div>
  );
};

export default App;
