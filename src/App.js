import "./App.css";
import React from "react";
import { Router } from "./routes";
import { Header } from "./components/header";
import { Footer } from "./components/footer/index.jsx";

function App() {
  return (
    <div>
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
