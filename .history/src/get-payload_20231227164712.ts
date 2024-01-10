import dotenv from "dotenv"
import path, { dirname } from "path"
import payload from "payload"


dotenv.config({
    path: path.resolve(__dirname, "../.env")
})

let cached = (global as any).payload

if(!cached) {
    cached = (global as any)
}


export const getPayloadClient = async () => {}
