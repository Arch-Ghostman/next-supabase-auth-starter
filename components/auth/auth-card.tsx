import type { ReactNode } from "react"
import { Card } from "../ui/card"
export function AuthCard({ children }: { children: ReactNode }) {
  return <Card>{children}</Card>
}
