import "./globals.css"
import type { ReactNode } from "react"
import { SupabaseProvider } from "../components/providers/supabase-provider"
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <SupabaseProvider>{children}</SupabaseProvider>
      </body>
    </html>
  )
}
