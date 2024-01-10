import {  CollectionConfig } from "payload/types";

export const ProductFiles: CollectionConfig = {
    slug: 'product_file',
    admin: {
        hidden: ({ user }) => user.role !== 'admin',
    },
    hooks: {
    beforeChange: 
    },
    
    upload: {
        staticURL: "/product_files",
        staticDir: "product_file",
        mimeTypes: ["image/*", "font/*", "application/postscript"]
    },
    fields: [
        {
            name: "user",
            type: "relationship",
            relationTo: "users",
            admin: {
                condition: () => false,
            },
            hasMany: false,
            required: true, 
        },
    ],
} 