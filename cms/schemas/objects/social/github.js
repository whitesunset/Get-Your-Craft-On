import {FaGithub} from 'react-icons/fa'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'github',
  title: 'Github',
  type: 'object',
  icon: FaGithub,
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
      initialValue: 'Github',
      readOnly: true,
      // hidden:true
    }),
    defineField({
      name: 'url',
      title: 'Platform Url',
      type: 'string',
      initialValue: 'https://www.github.com/',
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
