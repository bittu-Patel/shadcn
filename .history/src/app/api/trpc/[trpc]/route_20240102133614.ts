import { fetchRequestHandler } from "@trpc/server/adapter/fetch"

const handler = (req: Request) => {
    fetchRequestHandler({
        endpoint: '/api/trpc',
        req,
        router
    })
}