import {ListItemBuilder} from 'sanity/desk'
import defineStructure from '../utils/defineStructure'
import {DocumentsIcon} from '@sanity/icons'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Recipes')
    .icon(DocumentsIcon)
    .schemaType('recipe')
    .child(S.documentTypeList('recipe'))
)
