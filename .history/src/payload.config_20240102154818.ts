import { webpackBundler } from "@payloadcms/bundler-webpack";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { slateEditor } from "@payloadcms/richtext-slate";
import { Users } from ;
import path from "path";
import { buildConfig } from "payload/config";

export default buildConfig({
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
    collections: [Users],
    routes: {
        admin: '/sell',
    },
    admin: {
        user: 'users',
        bundler: webpackBundler(),
        meta: {
            titleSuffix: "iconsnext",
            favicon: "/favicon.ico",
            ogImage: "/openai.png"
        }
    },

    rateLimit: {
        max: 2000,
    },
   editor: slateEditor({}),
db: mongooseAdapter({
    url: process.env.MONGODB_URL!,
}),
typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
},
    
})