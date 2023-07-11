import {FaDiscord} from 'react-icons/fa'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'discord',
  title: 'Discord',
  type: 'object',
  icon: FaDiscord,
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
      initialValue: 'Discord',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'url',
      title: 'Platform Url',
      type: 'string',
      initialValue: 'https://www.discord.com/@',
      fieldset: 'userpath',
    }),
    defineField({
      name: 'username',
      title: 'User Name',
      type: 'string',
      fieldset: 'userpath',
    }),
  ],
  // preview:{
  //   select:{
  //     title: 'url',
  //     subtitle: 'username',
  //     icon:icon,
  //   },
  //   prepare(selection){
  //     const {url, username, icon} = selection
  //     const platformUrl = url
  //     const userPath = platformUrl.concat(username)

  //     return {
  //       title: userPath,
  //       media:icon
  //     }
  //   }
  // }
})
