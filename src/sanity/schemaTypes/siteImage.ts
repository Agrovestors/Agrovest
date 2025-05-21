const siteImage = {
    name: 'siteImage',
    title: 'Site Image',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Image Name',
        type: 'string',
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: { hotspot: true },
        fields: [
          {
            name: 'alt',
            title: 'Alt Text',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
          },
        ],
      },
    ],
  };

export default siteImage;