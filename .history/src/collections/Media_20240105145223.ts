import { CollectionConfig } from "payload/types";

export const Media: CollectionConfig = {
    slug: "media",
    hooks: {
        beforeChange: [({req, data}) => {
            return { ...data, user: req.user.id }
        }
    ]
    },
    upload: {
        staticURL: "/media",
        staticDir: "media",
        imageSizes: [
                 name: 'thumbnail',
                 width: 150,
        ]
    }
}