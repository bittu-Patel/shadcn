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
           // options: PRODUCT_CATEGORIES.map(
             //   ({ label, value }) => ({ label, value })
               //  ),
                 //required: true,
                 options: P
          }, 
         // {
           // name: 'product_files',
            //label: 'Product file(s)',
           // type: 'relationship',
           // required: true,
           // relationTo: 'product_files',
           // hasMany: false,
          //},
          {
            name: 'approvedForSale',
            label: 'Product Status',
            type: 'select',
            defaultValue: 'pending',
            access: {
              create: ({ req }) => req.user.role === 'admin',
              read: ({ req }) => req.user.role === 'admin',
              update: ({ req }) => req.user.role === 'admin',
            },
            options: [
              {
                label: 'Pending verification',
                value: 'pending',
              },
              {
                label: 'Approved',
                value: 'approved',
              },
              {
                label: 'Denied',
                value: 'denied',
              },
            ],
          },
          {
            name: 'priceId',
            access: {
              create: () => false,
              read: () => false,
              update: () => false,
            },
            type: 'text',
            admin: {
              hidden: true,
            },
          },
          {
            name: 'stripeId',
            access: {
              create: () => false,
              read: () => false,
              update: () => false,
            },
            type: 'text',
            admin: {
              hidden: true,
            },
          },
          {
            name: 'images',
            type: 'array',
            label: 'Product images',
            minRows: 1,
            maxRows: 4,
            required: true,
            labels: {
              singular: 'Image',
              plural: 'Images',
            },
            fields: [
              {
                name: 'image',
                type: 'upload',
                relationTo: 'media',
                required: true,
              },
            ],
        },
      ],
    }