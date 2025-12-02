export default function Page() {
  return (
    <main style={{ display: "grid", placeItems: "center", minHeight: "60vh" }}>
      <div>
        <h1>Next Supabase Auth Starter</h1>
        <p>Escolha uma área</p>
        <nav style={{ display: "flex", gap: 12 }}>
          <a href="/login">Entrar</a>
          <a href="/signup">Criar conta</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/pricing">Preços</a>
        </nav>
      </div>
    </main>
  )
}
