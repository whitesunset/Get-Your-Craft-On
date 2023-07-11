import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'font',
  title: 'Font',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
  ],
})
