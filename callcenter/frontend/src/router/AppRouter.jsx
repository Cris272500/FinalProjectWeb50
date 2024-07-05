import { Navigate, Route, Routes } from "react-router-dom"
import { Landing } from "../auth/pages/Landing"
import { DashboardRoutes } from "../dashboard/routes/DashboardRoutes"
import { Login, Register } from "../auth/pages"

export const AppRouter = () => {

    // Creating a component to protect routes that need authentication
    const PrivateRoute = ({ children }) => {
        const access_token = sessionStorage.getItem("access_token")
        return access_token ? children : <Navigate to="/login" replace />
    }

  return (
    <>
    
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Landing />} />

            <Route path="/*" element={<DashboardRoutes />} />

            
            

            {/* <Route path="/*" element={
                <PrivateRoute>
                    <DashboardRoutes />
                </PrivateRoute>
            } /> */}
            
        </Routes>

    </>
  )
}
