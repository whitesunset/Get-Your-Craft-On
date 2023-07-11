import {TwitterIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'twitter',
  title: 'Twitter',
  type: 'object',
  icon: TwitterIcon,
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
      initialValue: 'Twitter',
      readOnly: true,
      // hidden:true
    }),
    defineField({
      name: 'url',
      title: 'Platform Url',
      type: 'string',
      initialValue: 'https://www.twitter.com/',
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
