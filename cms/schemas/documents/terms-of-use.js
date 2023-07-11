import {FaFileContract} from 'react-icons/fa'

export default {
  name: 'terms-of-use',
  title: 'Terms Of Use',
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
      title: 'Terms Of Use',
      type: 'string',
      initialValue: 'Terms Of Use',
      hidden: true,
    },
    {
      name: 'terms',
      title: 'Terms',
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
