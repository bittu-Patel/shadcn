import dotenv from "dotenv"
import path, { dirname } from "path"


dotenv.config({
    path: path.resolve(__dirname, "../.env")
})



export const getPayloadClient = async () => {}
