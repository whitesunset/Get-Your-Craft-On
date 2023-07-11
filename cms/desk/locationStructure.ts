import {ListItemBuilder} from 'sanity/desk'
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Locations')
    .schemaType('location')
    .child(() => S.documentTypeList('location'))
)
