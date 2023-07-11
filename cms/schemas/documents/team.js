import {FaUsers} from 'react-icons/fa'

export default {
  name: 'team',
  title: 'Team',
  type: 'document',
  icon: FaUsers,
  __experimental_actions: [
    // 'create',
    // 'delete',
    'update',
    'publish',
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Our Team',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'teamMembers',
      title: 'Team Members',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'team-member'}],
        },
      ],
    },
  ],
}
