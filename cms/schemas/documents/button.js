// import preview from "part:sanity-plugin-icon-picker/preview";

export default {
  name:'button',
  title:'Button',
  type:'object',
  fields:[
    {
      name:'btnText',
      title:'Button Text',
      type:'string'
    },
    {
      name:'btnLink',
      title:'Button Link',
      type:'string'
    },
    {
      name:'btnLinkType',
      title:'Button link type',
      type:'string',
      options:{
        list:[
          {value:'tel:', title:'Telephone'},
          {value:'mailto:', title:'Email'},
          {value:'/', title:'Web Url'},
          {value:'youtube', title:'Youtube video'}
      ]
      }
    },
    {
      name:'btnIcon',
      title:'Button Icon',
      type:'iconPicker',
      options: {
        providers: ["fa"]
      }
    }
  ]
}