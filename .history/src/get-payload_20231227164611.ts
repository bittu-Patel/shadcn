import dotenv from "dotenv"
import path, { dirname } from "path"


dotenv.config({
    path: path.resolve(__dirname, "../.env")
})

let cached = (global as any).payload

if(!cached)


export const getPayloadClient = async () => {}
