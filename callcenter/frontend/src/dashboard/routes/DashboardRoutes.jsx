import { Route, Routes } from "react-router-dom"
import { Dashboard, Agents, CreateTicket, TicketsList } from "../pages"

export const DashboardRoutes = () => {
  return (
    <>
    
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/agents" element={<Agents />} />
            <Route path="/create-ticket" element={<CreateTicket />} />
            <Route path="/tickets" element={<TicketsList />} />
        </Routes>

    </>
  )
}
