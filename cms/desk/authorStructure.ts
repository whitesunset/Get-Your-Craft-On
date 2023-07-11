import {ListItemBuilder} from 'sanity/desk'
import defineStructure from '../utils/defineStructure'
import {FaUser} from 'react-icons/fa'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Authors')
    .icon(FaUser)
    .child(() => S.documentTypeList('author'))
)
