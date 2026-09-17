import React from "react";
import ReactDOM from "react-dom/client";
import { useRoute } from "./router.jsx";
import Home from "./home.jsx";
import FAQ from "./faq.jsx";
import Contact from "./contact.jsx";
import About from "./about.jsx";

// /about is deliberately unlinked — kept on the record, not navigable.
const ROUTES = {
  "/faq": FAQ,
  "/contact": Contact,
  "/about": About,
};

function App() {
  const path = useRoute();
  const Page = ROUTES[path] || Home;
  return <Page />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
