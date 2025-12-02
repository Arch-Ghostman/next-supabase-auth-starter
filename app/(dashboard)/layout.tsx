import type { ReactNode } from "react"
import { Sidebar } from "../../components/dashboard/sidebar"
export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: "flex", minHeight: "80vh" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: 24 }}>{children}</div>
    </div>
  )
}
