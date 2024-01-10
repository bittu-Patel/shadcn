import dotenv from "dotenv"
import path, { dirname } from "path"
import payload from "payload"


dotenv.config({
    path: path.resolve(__dirname, "../.env")
})

let cached = (global as any).payload

if(!cached) {
    cached = (global as any).payload = {
        client
    }
}


export const getPayloadClient = async () => {}
