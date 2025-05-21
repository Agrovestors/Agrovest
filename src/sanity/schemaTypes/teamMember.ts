const teamMemberSchema = {
    name: 'teamMember',
    title: 'Team Member',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
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
      {
        name: 'role',
        title: 'Role',
        type: 'string',
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'quote',
        title: 'Quote',
        type: 'string',
      },
      {
        name: 'speech',
        title: 'Speech',
        type: 'array',
        of: [{ type: 'block' }],
      },
    ],
  };

export default teamMemberSchema;