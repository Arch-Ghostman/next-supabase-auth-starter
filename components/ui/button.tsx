import type { ButtonHTMLAttributes, ReactNode } from "react"
type Props = ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }
export function Button({ children, ...props }: Props) {
  return (
    <button {...props} style={{ padding: "8px 12px", borderRadius: 8, border: "1px solid #ddd" }}>
      {children}
    </button>
  )
}
