import {FaFileContract} from 'react-icons/fa'

export default {
  name: 'privacy-statement',
  title: 'Privacy Statement',
  type: 'document',
  __experimental_actions: [
    // 'create',
    // 'delete',
    'update',
    'publish',
  ],
  icon: FaFileContract,
  fields: [
    {
      name: 'title',
      title: 'Privacy Statement',
      type: 'string',
      initialValue: 'Privacy Statement',
      hidden: true,
    },
    {
      name: 'statement',
      title: 'Statement',
      type: 'body',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
