import { appRouter } from "@/trpc"
//import { fetchRequestHandler } from "@trpc/server/adapter/fetch"
import { fetchRequestHandler } from "@trpc/server/adapter/fetch"

const handler = (req: Request) => {
    fetchRequestHandler({
        endpoint: '/api/trpc',
        req,
        router: appRouter,
        //@ts-expect-error context alreardy
        createContext: () => ({})
    })
}

export { handler as GET, handler as POST }