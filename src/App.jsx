import { useState } from 'react'
import './App.css'
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./routes/AppRoutes.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="text-center">

            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <span className="text-2xl col-span-1 bg-blend-color font-mono size-2 text-cyan-500">{count}</span>

            <div>
                <button className=" hover:bg-amber-300 border-1 bg-blue-500 aria-busy rounded-t-lg p-1 rounded-sm text-amber-50"
                onClick={() => setCount(count + 1)}>
                 Increase</button>

                <button className=" hover:bg-red-700 border-1 bg-blue-500 aria-busy rounded-t-lg p-1 rounded-sm text-amber-50"
                        onClick={() => setCount(count - 1)}>
                    Decrease</button>
            </div>


            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </div>

    </>
  )
}

export default App
