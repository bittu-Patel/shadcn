"use client"
import { QueryClient } from '@'
import { useState } from "react"

const Providers = () => {
    const [queryClient] = useState(() => new QueryClient())
    const [trpcClient] = useState(() => trpc.createClient)
}