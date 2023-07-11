import { BsMegaphone } from 'react-icons/bs'

export default {
  name:'cta',
  title:'Call to Action',
  type:'document',
  icon:BsMegaphone,
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields:[
    {
      name:'title',
      title:'Title',
      type:'string'
    },
    {
      name:'content',
      title:'Content',
      type:'text'
    },
    {
      name:'link',
      title:'Link',
      type:'button'
    },
    {
      name:'bgImage',
      title:'Background Image',
      type:'image',
      options:{
        hotspot:true
      }
    }
  ]
}