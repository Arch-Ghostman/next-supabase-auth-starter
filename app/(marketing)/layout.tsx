import type { ReactNode } from "react"
import { Navbar } from "../../components/layout/navbar"
import { Footer } from "../../components/layout/footer"
export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      <main style={{ maxWidth: 960, margin: "24px auto", padding: 12 }}>{children}</main>
      <Footer />
    </div>
  )
}
