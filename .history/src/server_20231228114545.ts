import express from "express"
import { getPayloadClient } from "./get-payload"
import { nextHandler } from "./next-utils"

const app = express()
const PORT = Number(process.env.PORT) || 3000

const start = async () => {
    const payload = await getPayloadClient({
        initoptions: {
            express: app,
            onInit: async (cms) => {
                cms.logger.info(`Admin URL ${cms.getAdminURL()}`)
            }
        }
    })
app.use((req, res) =>  nextHandler(req, res))

nextApp.Prepare().then(() => {
    payload.longer.info('Next.js started')

    app.listen(PORT, async () => {
        payload.logger.info(
            
        )
    })
})

}
start()

