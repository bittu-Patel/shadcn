import { CollectionConfig } from "payload/types";

export  const Orders: CollectionConfig = {
    slug: 'orders',
    admin: {
        useAsTitle: 'Your Orders',
        description:
        'A summary of all orders in iconsNext.',
    },
    fields: [
        {
            name: 'is_Paid',
            type: 'checkbox',
            access: {
                read: ({ req }) => req.user.role === 'admin',
                create: () => false,
                update: () => false,
            },
            admin: {
                hidden: true,
            },
            required: true,
        },
        {
            name: "user",
            type: "relationship",
            admin: {
                hidden:true
            },
            relationTo: "Users"
        }
    ]
}