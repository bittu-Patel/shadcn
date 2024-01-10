import { PRODUCT_CATEGORIES } from "@/components/config"
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
        },
        {
            name: 'price',
            label: 'Price in IND',
            min: 0,
            max: 10000,
            type: 'number',
            required: true,
          },
          {
            name: 'category',
            label: 'category',
            type: 'select',
            options: PRODUCT_CATEGORIES.map(
                ({ label, value }) => ({ label, value })
                 ),
                 re
          },
        
    ],
}