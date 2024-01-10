"use client"
import { trpc } from '@/trpc/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { httpBatchLink } from '@trpc/client'
import { Children, useState } from "react"

const Providers = () => {
    const [queryClient] = useState(() => new QueryClient())
    const [trpcClient] = useState(() => trpc.createClient({
        links: [
            httpBatchLink({
                url:` ${process.env.NEXT_PUBLIC_SERVER_URL}/api/trpc`,
                fetch(url, options) {
                    return fetch(url, {
                       ...options,
                       credentials: 'include', 
                    })
                }
            })
        ]
    })
    
    )
return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
<QueryClientProvider client={queryClient}>
    {Children}
</QueryClientProvider>
</tr
)

}



export default Providers