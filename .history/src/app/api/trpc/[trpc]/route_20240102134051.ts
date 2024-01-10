import { appRouter } from "@/trpc"
import { fet }


const handler = (req: Request) => {
    fetchRequestHandler({
        endpoint: '/api/trpc',
        req,
        router: appRouter,
        createContext: () => ({})
    })
}

export { handler as GET, handler as POST }