import React from "react";
import ReactDOM from "react-dom/client";
import { useRoute } from "./router.jsx";
import Home from "./home.jsx";
import About from "./about.jsx";

function App() {
  const path = useRoute();
  return path === "/about" ? <About /> : <Home />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
