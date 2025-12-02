export function Sidebar() {
  return (
    <aside style={{ width: 240, borderRight: "1px solid #eee", padding: 12 }}>
      <nav style={{ display: "grid", gap: 8 }}>
        <a href="/dashboard">Dashboard</a>
        <a href="/profile">Perfil</a>
        <a href="/settings">Configurações</a>
        <a href="/admin">Admin</a>
      </nav>
    </aside>
  )
}
