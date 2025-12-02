import { useState } from "react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div>
      <h2>Entrar</h2>
      <Input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
      <Input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
      <Button type="submit">Continuar</Button>
    </div>
  )
}
