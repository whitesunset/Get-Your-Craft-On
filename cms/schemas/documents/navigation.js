import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  __experimental_actions: ['create', 'delete', 'update', 'publish'],
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description:
        "Give this navigation object a name. Make it one that describes it's function, eg. 'Main Navigation' or 'Footer Nav'.",
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          name: 'pages',
          title: 'Pages',
          type: 'reference',
          to: [{type: 'homepage'}, {type: 'page'}, {type: 'productNav'}],
        },
      ],
    }),
  ],
})
