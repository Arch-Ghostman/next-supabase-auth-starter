import { useState } from "react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
export function ForgotPasswordForm() {
  const [email, setEmail] = useState("")
  return (
    <div>
      <h2>Esqueci minha senha</h2>
      <Input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
      <Button type="submit">Enviar</Button>
    </div>
  )
}
