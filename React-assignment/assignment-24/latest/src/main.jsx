import { createRoot } from 'react-dom/client'
import Home from "./home";
import About from "./about";
import Contact from "./contact";

const root = createRoot(document.getElementById('root'));

const pathname = window.location.pathname;
console.log("Current Path:", pathname);

if(pathname === "/"){
    root.render(<Home/>)
} else if(pathname === "/about"){
    root.render(<About/>)
} else if(pathname === "/contact" || pathname === "/contact/"){
    root.render(<Contact/>)
}