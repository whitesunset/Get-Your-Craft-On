import {defineConfig, isDev} from 'sanity'

import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {structure} from './desk'

import {visionTool} from '@sanity/vision'
import {colorInput} from '@sanity/color-input'
import {imageHotspotArrayPlugin} from 'sanity-plugin-hotspot-array'
import {media, mediaAssetSource} from 'sanity-plugin-media'
import {customDocumentActions} from './plugins/customDocumentActions'
import {dashboardTool, projectUsersWidget, projectInfoWidget} from '@sanity/dashboard'
import {googleMapsInput} from '@sanity/google-maps-input'
import {iconPicker} from 'sanity-plugin-icon-picker'

const devOnlyPlugins = [visionTool()]

export default defineConfig({
  name: 'default',
  title: 'Get Your Craft On',

  projectId: 'v5va9b4p',
  dataset: 'testing',

  plugins: [
    dashboardTool({
      widgets: [projectInfoWidget(), projectUsersWidget()],
    }),
    deskTool({structure}),
    colorInput(),
    iconPicker(),
    imageHotspotArrayPlugin(),
    customDocumentActions(),
    media(),
    googleMapsInput({
      apiKey: process.env.GOOGLE_MAPS_API_KEY,
      defaultZoom: 11,
      defaultLocale: null,
      defaultLocation: {
        lat: -43.33915283901841,
        lng: 172.7048698061847,
      },
    }),
    ...(isDev ? devOnlyPlugins : []),
  ],

  schema: {
    types: schemaTypes,
  },

  form: {
    file: {
      assetSources: (previousAssetSources) => {
        return previousAssetSources.filter((assetSource) => assetSource !== mediaAssetSource)
      },
    },
    image: {
      assetSources: (previousAssetSources) => {
        return previousAssetSources.filter((assetSource) => assetSource === mediaAssetSource)
      },
    },
  },
})
