import { useSupabase } from "../../components/providers/supabase-provider"
export function useSupabaseClient() {
  return useSupabase()
}
