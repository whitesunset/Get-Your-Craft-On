import {ListItemBuilder} from 'sanity/desk'
import defineStructure from '../utils/defineStructure'
import {FaCode, FaBolt, FaRegQuestionCircle, FaFileContract, FaUsers} from 'react-icons/fa'
import {BsMegaphone, BsStars} from 'react-icons/bs'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Components')
    .icon(FaCode)
    .child(
      S.list()
        .title('Site Components')
        .items([
          S.listItem()
            .title('Hero')
            .icon(FaBolt)
            .child(S.document().schemaType('hero').documentId('hero')),
          S.listItem()
            .title('About us')
            .icon(FaRegQuestionCircle)
            .child(S.document().schemaType('about-us').documentId('about')),
          S.listItem()
            .title('Call to Action')
            .icon(BsMegaphone)
            .child(S.document().schemaType('cta').documentId('cta')),
          S.listItem()
            .title('Our Team')
            .icon(FaUsers)
            .child(S.document().schemaType('team').documentId('team')),
          S.listItem()
            .title('Testimonials')
            .icon(BsStars)
            .child(S.documentTypeList('testimonialList')),
          S.listItem()
            .title('Terms of Use')
            .icon(FaFileContract)
            .child(S.document().schemaType('terms-of-use').documentId('terms-of-use')),
          S.listItem()
            .title('Privacy Statement')
            .icon(FaFileContract)
            .child(S.document().schemaType('privacy-statement').documentId('privacy-statement')),
        ])
    )
)
