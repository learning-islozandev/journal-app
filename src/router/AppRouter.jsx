import { Navigate, Route, Routes } from "react-router"

import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"
import { CheckingAuth } from "../ui"
import useCheckAuth from "../hooks/useCheckAuth"

export const AppRouter = () => {

  const  status  = useCheckAuth();
  if (status === 'checking') {
    return <CheckingAuth />
  }

  return (
    <Routes>

      {
        // If the user is authenticated, the AuthRoutes will be displayed, otherwise the JournalRoutes will be displayed.
        (status === 'authenticated')
          ? <Route path="/*" element={<JournalRoutes />} />
          : <Route path="/auth/*" element={<AuthRoutes />} />

      }


      <Route path="/*" element={<Navigate to='/auth/login' />} />

      {/* <Route path="/auth/*" element={<AuthRoutes />} /> */}
      {/* <Route path="/*" element={<JournalRoutes />} /> */}
    </Routes>
  )
}
