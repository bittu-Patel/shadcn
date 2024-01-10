import { BeforeChangeHook } from "payload/dist/globals/config/types";
import {  CollectionConfig } from "payload/types";

const addUser: BeforeChangeHook = ({}) => {

}

export const ProductFiles: CollectionConfig = {
    slug: 'product_file',
    admin: {
        hidden: ({ user }) => user.role !== 'admin',
    },
    hooks: {
    beforeChange: [addUser]
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