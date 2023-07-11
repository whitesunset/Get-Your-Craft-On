import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'testimonialList',
  title: 'Testimonial List',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Testimonials',
    }),
    defineField({
      name: 'testimonial',
      title: 'Testimonial',
      type: 'array',
      of: [{type: 'reference', to: {type: 'testimonial'}}],
    }),
  ],
})
