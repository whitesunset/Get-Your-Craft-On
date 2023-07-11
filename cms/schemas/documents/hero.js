import {FaBolt} from 'react-icons/fa'

export default {
  name: 'hero',
  title: 'Hero',
  type: 'document',
  icon: FaBolt,
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
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'content',
      title: 'Content',
      type: 'body',
    },
    {
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'button'}],
        },
      ],
    },
  ],
}
