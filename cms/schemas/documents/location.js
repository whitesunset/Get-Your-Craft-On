import {PinIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'location',
  title: 'Location',
  type: 'document',
  icon: PinIcon,
  fields: [
    defineField({
      name: 'isPrimary',
      title: 'Is this your primary location',
      type: 'boolean',
    }),
    defineField({
      name: 'address',
      title: 'Street and Number',
      type: 'string',
    }),
    defineField({
      name: 'addressExt',
      title: 'Address - extended',
      type: 'string',
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
    }),
    defineField({
      name: 'postcode',
      title: 'Post Code',
      type: 'string',
    }),
    defineField({
      name: 'phoneNumbers',
      title: 'Phone Numbers',
      type: 'array',
      of: [{type: 'phone'}],
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) =>
        Rule.regex(
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
          {
            name: 'email', // Error message is "Does not match email-pattern"
            invert: false, // Boolean to allow any value that does NOT match pattern
          }
        ),
    }),
    defineField({
      name: 'description',
      title: 'description',
      type: 'body',
    }),
    defineField({
      name: 'socialConnections',
      title: 'Social Connections',
      type: 'array',
      of: [
        {type: 'discord'},
        {type: 'facebook'},
        {type: 'github'},
        {type: 'linkedin'},
        {type: 'instagram'},
        {type: 'slack'},
        {type: 'twitter'},
      ],
    }),
    defineField({
      name: 'mapLocation',
      title: 'Location on Map',
      type: 'geopoint',
    }),
  ],
})
