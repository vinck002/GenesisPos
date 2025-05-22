import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Root from './routes/root'
import {RouterProvider} from "react-router-dom";
import AppRouter from "./routes/AppRoutes";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={AppRouter} />
      {/*<App />*/}
  </StrictMode>
)
