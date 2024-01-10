import { QueryClient } from "@tanstack/react-query"
import { httpBatchLink } from "@trpc/client"
import { useState } from "react"

const Providers = () => {
  const [queryClient] = useState(() => new QueryClient())
  const [trpcClient] = useState(() => trpc.createClient({
    links: [
      httpBatchLink({})
    ]
  }))
}