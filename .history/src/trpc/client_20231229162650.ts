import {createTRPCReact} from "@trpc/react-query"
import typ { AppRouter } from "./"

export const trpc = createTRPCReact<AppRouter>({})