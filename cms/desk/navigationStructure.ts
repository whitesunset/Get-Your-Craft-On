import {BsCompass} from 'react-icons/bs'
import {FaShopify} from 'react-icons/fa'
import {LinkIcon} from '@sanity/icons'
import {ListItemBuilder} from 'sanity/desk'
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Navigation')
    .icon(BsCompass)
    .child(
      S.list()
        .title('Navigation Menus')
        .items([
          S.listItem()
            .title('Main Navigation')
            .icon(LinkIcon)
            .child(() =>
              S.document()
                .schemaType('navigation')
                .documentId('d58d31f9-e212-4c16-af15-b9a1f017b562')
            ),
          S.listItem()
            .title('Footer Navigation')
            .icon(LinkIcon)
            .child(() =>
              S.document()
                .schemaType('navigation')
                .documentId('91c4ed8e-c582-4d13-b307-e06addda2390')
            ),
          S.listItem()
            .title('Online Store')
            .icon(FaShopify)
            .child(() =>
              S.document()
                .schemaType('productNav')
                .documentId('89a5edb8-2df4-435f-a20a-63b703bde09c')
            ),
        ])
    )
)
