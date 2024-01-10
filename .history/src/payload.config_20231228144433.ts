import { webpackBundler } from "@payloadcms/bundler-webpack";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";


export default buildConfig({
    serverURL: process.env.NEXT_PUBLIC_URL_ || '',
    collections: [],
    routes: {
        admin: '/sell',
    },
    admin: {
        bundler: webpackBundler(),
        meta: {
            titleSuffix: "iconsnext",
            favicon: "/favicon.ico",
            ogImage: "/openai.png"
        }
    },

    rateLimit: {
        max: 2000
    },
   editor: slateEditor({}),
db: mongooseAdapter({
    url: process.env.MONGODB_URL!,
}),

    
})