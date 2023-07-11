export default {
  name: 'team-member',
  title: 'Team Member',
  type: 'document',
  fieldsets: [
    {
      name: 'fullName',
      title: 'Full Name',
      options: {columns: 2, collapsible: false},
    },
  ],
  __experimental_actions: [
    // 'create',
    // 'delete',
    'update',
    'publish',
  ],
  fields: [
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      fieldset: 'fullName',
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      fieldset: 'fullName',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'socialConnections',
      title: 'Social Connections',
      type: 'array',
      of: [
        {type: 'discord'},
        {type: 'facebook'},
        {type: 'github'},
        {type: 'linkedin'},
        {type: 'instagram'},
        {type: 'slack'},
        {type: 'twitter'},
      ],
    },
  ],
  preview: {
    select: {
      fName: 'firstName',
      lName: 'lastName',
      role: 'role',
      media: 'image',
    },
    prepare(selection) {
      const {fName, lName, role, media} = selection
      const name = fName + ' ' + lName
      return {
        title: name,
        subtitle: role,
        media: media,
      }
    },
  },
}
