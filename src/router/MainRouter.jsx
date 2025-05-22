import { BrowserRouter, Routes,Route } from "react-router-dom"
import { GetPoke } from "../components/GetPoke/GetPoke.jsx"
import { Crabs } from "../pages/Crabs.jsx"
export const MainRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<GetPoke/>}/>
                <Route path="/crabs" element={<Crabs/>}/>
            </Routes>
        </BrowserRouter>
    )
}