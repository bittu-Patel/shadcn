import {  CollectionConfig } from "payload/types";

export const ProductFiles: CollectionConfig = {
    slug: 'product_file',
    admin: {
        hidden: ({ user }) => user.role !== 'admin',
    },
    upload: {
        staticURL: "/product_files",
        staticDir: "product_file",
        mimeTypes: ["image/*", "font/*", "application/postscript"]
    },
    
} 