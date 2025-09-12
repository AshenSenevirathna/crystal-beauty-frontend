import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import ProductCard from './components/productCard'
import AdminPage from "./pages/adminPage"
import HomePage from "./pages/HomePage"

function App() {

  return (
    <BrowserRouter>
      <div className="w-full h-[100vh] bg-red-600">

        <Routes path="/">
        <Route path="/*" element={<HomePage/>}></Route>
        <Route path="/register" element={<h1>Register page</h1>}></Route>
        <Route path="/admin/*" element={<AdminPage/>}></Route>
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App
