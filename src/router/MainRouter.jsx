import { BrowserRouter, Routes,Route } from "react-router-dom"
import { GetPoke } from "../components/GetPoke/GetPoke.jsx"
import { Crabs } from "../pages/Crabs.jsx"
export const MainRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Crabs/>}/>
                <Route path="/poke" element={<GetPoke/>}/>
            </Routes>
        </BrowserRouter>
    )
}