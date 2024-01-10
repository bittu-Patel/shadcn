import { webpackBundler } from "@payloadcms/bundler-webpack";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";
import { BaseDatabaseAdapter } from "payload/database";
import { Payload } from "payload/dist/payload";

export default buildConfig({
    serverURL: process.env.NEXT_PUBLIC_URL_ || '',
    collections: [],
    routes: {
        admin: 'sell',
    },
    admin: {
        bundler: webpackBundler(),
        meta: {
            titleSuffix: "iconsnext",
            favicon: "/favicon.ico",
            ogImage: "/openai.png"
        }
    },
   editor: slateEditor9
    editor: undefined
})