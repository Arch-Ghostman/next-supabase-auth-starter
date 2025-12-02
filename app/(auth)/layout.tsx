import type { ReactNode } from "react"
export default function AuthLayout({ children }: { children: ReactNode }) {
  return <section style={{ maxWidth: 420, margin: "40px auto" }}>{children}</section>
}
