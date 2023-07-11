import {defineField, defineType} from 'sanity'
import {FaShopify} from 'react-icons/fa'

export default defineType({
  name: 'productNav',
  title: 'Product Navigation',
  type: 'document',
  icon: FaShopify,
  __experimental_actions: [
    'create',
    // 'delete',
    'update',
    'publish',
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Products Menu Title',
      type: 'string',
      description: 'This is what will show in the menu',
    }),
    defineField({
      name: 'collectionGroup',
      title: 'Collection Group',
      type: 'array',
      of: [
        {
          name: 'Collection',
          title: 'Collection',
          type: 'object',
          fields: [
            {
              name: 'collectionGroupName',
              title: 'Collection Group Name',
              type: 'string',
              description: 'Usually the name of the parent collection',
            },
            {
              name: 'parentCollection',
              title: 'Parent Collection',
              type: 'reference',
              to: {type: 'collection'},
            },
            {
              name: 'childCollections',
              title: 'Child Collections',
              type: 'array',
              of: [{type: 'reference', to: {type: 'collection'}}],
            },
          ],
        },
      ],
    }),
    // defineField({
    //   name: 'collectionLink',
    //   title: 'Collection',
    //   type: 'reference',
    //   to: {type: 'collection'},
    // }),
    // defineField({
    //   name: 'subCollectionLink',
    //   title: 'Sub Collections',
    //   type: 'array',
    //   of: [{type: 'reference', to: {type: 'collection'}}],
    // }),
  ],
})
