import { Navigate, Route, Routes } from "react-router"
import { JounalPage } from "../pages/JounalPage"

export const JournalRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<JounalPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    )
}