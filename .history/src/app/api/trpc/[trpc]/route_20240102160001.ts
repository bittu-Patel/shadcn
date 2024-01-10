import { appRouter } from "@/trpc"
//import { fetchRequestHandler } from "@trpc/server/adapter/fetch"
import { fetchRe }

const handler = (req: Request) => {
    fetchRequestHandler({
        endpoint: '/api/trpc',
        req,
        router: appRouter,
        createContext: () => ({})
    })
}

export { handler as GET, handler as POST }