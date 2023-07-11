import {FaUser} from 'react-icons/fa'
import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'document',
  name: 'author',
  title: 'Author',
  icon: FaUser,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Some frontends will require a slug to be set to be able to show the person',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'mainImage',
    }),
    defineField({
      name: 'bio',
      type: 'body',
      title: 'Biography',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
      media: 'image',
    },
  },
})
