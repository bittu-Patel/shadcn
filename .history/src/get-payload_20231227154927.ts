import dotenv from "dotenv"
import path, { dirname } from "path"


dotenv.config({
    path: path.resolve(dirname)
})



export const getPayloadClient = async () => {}
