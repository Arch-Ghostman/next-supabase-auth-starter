import type { ReactNode } from "react"
export function Card({ children }: { children: ReactNode }) {
  return <div style={{ padding: 16, border: "1px solid #eee", borderRadius: 12 }}>{children}</div>
}
