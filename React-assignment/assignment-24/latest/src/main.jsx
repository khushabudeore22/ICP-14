import { createRoot } from "react-dom/client";
import Contact from "./contact";
import Home from "./home";
import About from "./about";

const root = createRoot(document.getElementById("root"));

const pathname = window.location.pathname;
console.log("Current pathname:", pathname);

if (pathname === "/") {
  root.render(<Home />);
} else if (pathname === "/contact/") {
  root.render(<Contact />);
} else if (pathname === "/about") {
  root.render(<About />);
}