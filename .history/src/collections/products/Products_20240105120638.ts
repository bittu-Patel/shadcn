import { CollectionConfig } from "payload/types"


export const Products: collectionConfig = {
    slug: "Products",
    admin: {
        useATitle: "name"
    },
    access: {},
    fields: [
        {
            name: 'user',
            type: "relationship",
        }
    ]
}