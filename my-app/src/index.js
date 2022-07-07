import ReactDOM from "react-dom";
import App from "./components/App"
import { createRoot } from 'react-dom/client';
import "./styles/global.css"
const container = document.getElementById('root');
const root = createRoot(container)
root.render(<App/>);
