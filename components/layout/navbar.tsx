export function Navbar() {
  return (
    <header style={{ display: "flex", justifyContent: "space-between", padding: 12, borderBottom: "1px solid #eee" }}>
      <a href="/">Next Supabase</a>
      <nav style={{ display: "flex", gap: 12 }}>
        <a href="/features">Recursos</a>
        <a href="/pricing">Preços</a>
        <a href="/login">Entrar</a>
      </nav>
    </header>
  )
}
