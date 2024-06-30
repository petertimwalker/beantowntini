import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route
              path="/"
              exact
              element={
                <HomePage
                  title={"BeanTown-tini"}
                  subTitle={"Coming Fall 2024"}
                  text={"Helping Boston find their best espresso martini"}
                />
              }
            />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
