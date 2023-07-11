import {FaLinkedin} from 'react-icons/fa'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'linkedin',
  title: 'LinkedIn',
  type: 'object',
  icon: FaLinkedin,
  fieldsets: [
    {
      name: 'userpath',
      title: 'User Path',
      options: {columns: 2, collapsible: false},
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Linked In',
      // readOnly:true,
      // hidden:true
    }),
    defineField({
      name: 'url',
      title: 'Platform Url',
      type: 'string',
      initialValue: 'https://www.linkedin.com/in/',
      fieldset: 'userpath',
    }),
    defineField({
      name: 'username',
      title: 'User Name',
      type: 'string',
      fieldset: 'userpath',
    }),
  ],
})
