import { error } from "console"
import dotenv from "dotenv"
import path, { dirname } from "path"
import payload, { Payload } from "payload"
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
}: Args = {}) => {
    if(process.env.PAYLOAD_SECRET) {
        throw new Error('PAYLOAD_SECRET is missing')
    }
    if(cached.client) {
return cached.client
    }
    if(!cached.promise) {
        cached.promise = Payload.init({
            secret: process.env.PAYLOAD_SECRET,
            local: initoptions?.express ? false : true,
            ...(initoptions  || {}),
        })
    }

    try {
        cached.client = await cached.promise
        } catch(e: unknown) {
            cached.promise = null
            throw
    }
}

