export function StatsCards() {
  return (
    <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(3, 1fr)" }}>
      <div style={{ padding: 12, border: "1px solid #eee", borderRadius: 8 }}>Stat 1</div>
      <div style={{ padding: 12, border: "1px solid #eee", borderRadius: 8 }}>Stat 2</div>
      <div style={{ padding: 12, border: "1px solid #eee", borderRadius: 8 }}>Stat 3</div>
    </div>
  )
}
