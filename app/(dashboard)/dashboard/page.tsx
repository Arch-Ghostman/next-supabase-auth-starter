import { StatsCards } from "../../../components/dashboard/stats-cards"
import { ActivityFeed } from "../../../components/dashboard/activity-feed"
export default function Page() {
  return (
    <div>
      <h2>Dashboard</h2>
      <StatsCards />
      <ActivityFeed />
    </div>
  )
}
