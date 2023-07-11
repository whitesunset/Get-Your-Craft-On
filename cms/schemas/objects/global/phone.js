import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'phone',
  title: 'Phone Numbers',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'Please enter the number as you would like it displayed on the page',
      initialValue: '(025)-5555-5555, (03) 55 5555',
    }),
    defineField({
      name: 'number',
      title: 'Number',
      type: 'string',
      description: 'Please enter the number without spaces or special characters eg.()',
      initialValue: '02255555555',
    }),
  ],
})
