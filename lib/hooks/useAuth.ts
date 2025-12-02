import { useState } from "react"
export function useAuth() {
  const [session, setSession] = useState<any>(null)
  return { session, setSession }
}
