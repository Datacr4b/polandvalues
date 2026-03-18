import { createRoot } from "react-dom/client";
import App from "./components/app";
import AppQuestion from "./components/app_question";
import "./main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppResults from "./components/app_results";

const domNode = document.querySelector("#root");
const root = createRoot(domNode);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/test" element={<AppQuestion />} />
            <Route path="/results" element={<AppResults />} />
        </Routes>
    </BrowserRouter>
);
