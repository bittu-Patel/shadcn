import dotenv from "dotenv"
import path, { dirname } from "path"
import payload from "payload"
import type {InitOptions} from "payload/config"

dotenv.config({
    path: path.resolve(__dirname, "../.env")
})

let cached = (global as any).payload

if(!cached) {
    cached = (global as any).payload = {
        client: null,
        promise: null,
    }
}
interface Args {
    initoptions?: Partial<InitOptions>
}


export const getPayloadClient = async ({
    initoptions,
}
}) => {}
