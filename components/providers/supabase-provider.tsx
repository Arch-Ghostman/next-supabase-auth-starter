"use client"
import { createContext, useContext, useMemo } from "react"
import { createClient } from "@supabase/supabase-js"
const SupabaseContext = createContext<any>(null)
export function SupabaseProvider({ children }: { children: React.ReactNode }) {
  const client = useMemo(() => {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL as string
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
    return createClient(url, key)
  }, [])
  return <SupabaseContext.Provider value={client}>{children}</SupabaseContext.Provider>
}
export function useSupabase() {
  return useContext(SupabaseContext)
}
