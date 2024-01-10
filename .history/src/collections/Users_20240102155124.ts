import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
    slug: 'users',
    auth: true,
    access 
    fields: [
        {
            name: 'role',
            type: 'select',
            options: [
                {label: 'Admin', value: 'admin' },
                {label: 'User', value: 'user'},
            ]
        }
    ]
}