import { CollectionConfig } from "payload/types"


export const Products: CollectionConfig = {
    slug: "Products",
    admin: {
        useATitle: "name"
    },
    access: {},
    fields: [
        {
            name: 'user',
            type: "relationship",
            relationTo: 'user'
        }
    ]
}