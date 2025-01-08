import { useEffect } from "react"
import { Navigate, Route, Routes } from "react-router"
import { onAuthStateChanged } from "firebase/auth"
import { useDispatch, useSelector } from "react-redux"
import { login, logout } from "../store/auth"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"
import { CheckingAuth } from "../ui"
import { FirebaseAuth } from "../firebase/config"

export const AppRouter = () => {

  const { status } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout());
      const { uid, displayName, email } = user;
      dispatch(login({ uid, displayName, email }));
    })
  }, [])

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
