import {FaFacebook} from 'react-icons/fa'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'facebook',
  title: 'Facebook',
  type: 'object',
  icon: FaFacebook,
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
      initialValue: 'Facebook',
      // readOnly:true,
      // hidden:true
    }),
    defineField({
      name: 'url',
      title: 'Platform Url',
      type: 'string',
      initialValue: 'https://www.facebook.com/',
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
