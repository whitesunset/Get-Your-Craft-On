import {FaRegQuestionCircle} from 'react-icons/fa'

export default {
  name: 'about-us',
  title: 'About Us',
  type: 'document',
  icon: FaRegQuestionCircle,
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
      initialValue: 'About Us',
      // readOnly:true
    },
    {
      name: 'image',
      title: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'body',
    },
  ],
}
