import {ListItemBuilder} from 'sanity/desk'
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Homepage')
    .schemaType('homepage')
    .child(S.editor().title('Homepage').schemaType('homepage').documentId('homepage'))
)
