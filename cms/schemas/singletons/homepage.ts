import {FaHome} from 'react-icons/fa'
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  // __experimental_actions: [
  //   // 'create',
  //   // 'delete',
  //   'update',
  //   'publish',
  // ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Home',
      readOnly: true,
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'collection'},
            // {type: 'services-list'},
            // {type: 'services-cards'},
            // {type: 'cta'},
            // {type: 'features'},
            // {type: 'testimonials'},
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Home',
        media: FaHome,
      }
    },
  },
})
