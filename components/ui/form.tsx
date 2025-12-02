import type { ReactNode } from "react"
export function Form({ children, onSubmit }: { children: ReactNode; onSubmit?: () => void }) {
  return (
    <form onSubmit={e => { e.preventDefault(); onSubmit && onSubmit() }} style={{ display: "grid", gap: 12 }}>
      {children}
    </form>
  )
}
