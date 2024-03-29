import { CollectionConfig } from "payload/types";

export const Media: CollectionConfig = {
    slug: "media",
    hooks: {
        beforeChange: [({ req, data }) => {
            return { ...data, user: req.user.id };
        }
        ]
    },
    admin: {
        hidden: ({ user }) => user.role !
    }
    upload: {
        staticURL: "/media",
        staticDir: "media",
        imageSizes: [
            {
                name: 'thumbnail',
                width: 400,
                height: 300,
                position: 'centre',
            },
            {
                name: 'card',
                width: 768,
                height: 1024,
                position: 'centre',
            },
        ],
        mimeTypes: ['image/*'],
      },
      fields: [
        {
          name: 'user',
          type: 'relationship',
          relationTo: 'users',
          required: true,
          hasMany: false,
          admin: {
            condition: () => false,
          },
        },
      ],
    }