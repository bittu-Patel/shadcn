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
            access:
        }
    ]
}