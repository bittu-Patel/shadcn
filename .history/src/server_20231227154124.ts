import express from "express"

const app = express()
const PORT = Number(process.env.PORT) || 3000

const start = async () => {
    const payload = await getPayloadClient()
}
start()

function getPayloadClient() {
    throw new Error("Function not implemented.")
}
