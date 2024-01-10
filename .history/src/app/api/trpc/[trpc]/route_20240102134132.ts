import { appRouter } from "@/trpc"
import { fetchRer }


const handler = (req: Request) => {
    fetchRquestHanlder({
        endpoint: '/api/trpc',
        req,
        router: appRouter,
        createContext: () => ({})
    })
}

export { handler as GET, handler as POST }