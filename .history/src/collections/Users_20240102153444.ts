const Users: CollectionConfig = {
    slug: 'users',
    fields: [
        {
            name: 'role',
            type: 'select',
            Option: [
                {label: 'Admin', value: 'admin' }.label,
            ]
        }
    ]
}