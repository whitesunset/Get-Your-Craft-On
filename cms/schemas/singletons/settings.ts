import {CogIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'

const TITLE = 'Settings'
interface ProductOptions {
  title: string
}

export default defineType({
  name: 'settings',
  title: TITLE,
  type: 'document',
  icon: CogIcon,
  groups: [
    {
      name: 'siteInfo',
      title: 'Site Info',
      default: true,
    },
    {
      name: 'siteBranding',
      title: 'Site Branding',
    },
    {
      name: 'notFoundPage',
      title: '404 page',
    },
    // {
    //   name: 'seo',
    //   title: 'SEO',
    // },
  ],
  fieldsets: [
    {
      name: 'colourScheme',
      title: 'Colour Scheme',
      options: {columns: 2, collapsible: true},
    },
    {
      name: 'fonts',
      title: 'Fonts',
      options: {columns: 2, collapsible: true},
    },
    {
      name: 'locales',
      title: 'Locales',
      options: {columns: 2, collapsible: false},
    },
  ],
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string',
      group: 'siteInfo',
    },
    {
      name: 'description',
      title: 'Site Description',
      type: 'text',
      group: 'siteInfo',
    },
    {
      name: 'siteOwner',
      title: 'Site Owner',
      type: 'string',
      group: 'siteInfo',
    },
    {
      name: 'image',
      title: 'Header Image',
      type: 'image',
      group: 'siteInfo',
    },
    {
      name: 'primaryLocation',
      title: 'Primary Location',
      type: 'reference',
      to: {type: 'location'},
      group: 'siteInfo',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      group: 'siteBranding',
    },
    // {
    //   name: 'clrDefault',
    //   title: 'Default Colour',
    //   type: 'color',
    //   group: 'siteBranding',
    //   fieldset: 'colourScheme',
    //   initialValue: '#2b180d',
    // },
    {
      name: 'clrPrimary',
      title: 'Primary Colour',
      type: 'color',
      group: 'siteBranding',
      fieldset: 'colourScheme',
      initialValue: '#FFD50D',
    },
    {
      name: 'clrSecondary',
      title: 'Secondary Colour',
      type: 'color',
      group: 'siteBranding',
      fieldset: 'colourScheme',
      initialValue: '#000000',
    },
    {
      name: 'fontPrimary',
      title: 'Primary Font',
      group: 'siteBranding',
      fieldset: 'fonts',
      type: 'array',
      of: [
        {
          type: 'font',
        },
      ],
    },
    {
      name: 'fontSecondary',
      title: 'Secondary Font',
      group: 'siteBranding',
      fieldset: 'fonts',
      type: 'array',
      of: [
        {
          type: 'font',
        },
      ],
    },
    {
      name: 'fontFallback',
      title: 'Fallback Font',
      group: 'siteBranding',
      fieldset: 'fonts',
      type: 'string',
      initialValue: 'sans-serif',
    },
    {
      name: 'preferredLocale',
      title: 'Preferred Locale',
      type: 'string',
      group: 'siteBranding',

      fieldset: 'locales',
      initialValue: 'en-NZ',
    },
    {
      name: 'fallbackLocale',
      title: 'Fallback Locale',
      type: 'string',
      group: 'siteBranding',
      fieldset: 'locales',
      initialValue: 'en-UK',
    },
    // Not found page
    defineField({
      name: 'notFoundPage',
      title: '404 page',
      type: 'notFoundPage',
      group: 'notFoundPage',
    }),
    // SEO
    // defineField({
    //   name: 'seo',
    //   title: 'SEO',
    //   type: 'seo',
    //   group: 'seo',
    // }),
  ],
  preview: {
    prepare() {
      return {
        title: TITLE,
      }
    },
  },
})
