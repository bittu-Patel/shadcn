import { CollectionConfig } from "payload/types"

export const Products: CollectionConfig = {
    slug: "Products",
    admin: {
        useAsTitle: "name"
    },
    access: {},
    fields: [
        {
            name: 'user',
            type: "relationship",
            relationTo: 'users',
            required: true,
            hasMany: false,
            admin: {
                condition: () => false
            }
        },
        {
            name: "name",
            label: "name",
            type: 'text',
            required: true,
          
        },
        {
            name: 'description',
            type: "textarea",
            label: 'Product details',
        }
        {
            price: 'number',
        }
        
    ],
}