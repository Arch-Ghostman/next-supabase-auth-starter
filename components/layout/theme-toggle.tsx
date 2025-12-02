import { useState } from "react"
export function ThemeToggle() {
  const [dark, setDark] = useState(false)
  return <button onClick={() => setDark(!dark)}>{dark ? "Tema escuro" : "Tema claro"}</button>
}
