import { buildConfig } from "payload/config";

export default buildConfig({
    serverURL: process.env.NEXT_PUBLIC_URL_ || '',
    collections: [],
    routes: {
admin: 'sell',
    

    }
})