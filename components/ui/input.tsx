import type { InputHTMLAttributes } from "react"
export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} style={{ padding: 8, borderRadius: 8, border: "1px solid #ddd", width: "100%" }} />
}
