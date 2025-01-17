import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

/* importação das paginas */
import Home from './pages/home/home.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
);
