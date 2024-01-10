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
            max: 1000,
            type: 'number',
            required: true,
          },
          {
            name: 'image',
            label: 'Image',
            type: 'file',
            isCreating: true,
            imageSrc(value) { return value ? `${process.env.NEXT_SERVER_URL
        }  
    ],
}