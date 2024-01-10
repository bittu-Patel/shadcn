"use client"
import { QueryClient } from '@ta'
import { useState } from "react"

const Providers = () => {
    const [queryClient] = useState(() => new QueryClient())
    const [trpcClient] = useState(() => trpc.createClient)
}