import { CollectionConfig } from "payload/types";

const yourOwn: Access = ({req: {user}}) => {
    if(user.role === "admin") return true

    return
}

export  const Orders: CollectionConfig = {
    slug: 'orders',
    admin: {
        useAsTitle: 'Your Orders',
        description:
        'A summary of all orders in iconsNext.',
    },
    access: {
read: yourOwn
    }
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
            relationTo: "Users",
            required: true,
        },
        {
            name: "products",
            type: "relationship",
            relationTo: "products",
            required: true,
            hasMany: true,
        }
    ],
}