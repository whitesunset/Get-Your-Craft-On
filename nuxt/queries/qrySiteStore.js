export const qrySiteMeta = groq`{
"siteMeta":*[_type == 'metadata'][0]{
    title,
    description,
    'logoUrl':logo.asset->url,
    siteOwner,
    primaryLocation->{
      address,
      addressExt,
      city,
      country,
      postcode,
      email,
      'phone':phoneNumbers[0].label,
      socialConnections[]{
      'socialTitle':title,
      'socialLink':url+username,
      'socialType':_type
      }
    },
    clrPrimary,
    clrSecondary,
    fontPrimary,
    fontSecondary,
    fontFallback,
  },
  "slugs":{
    'pages':*[_type=='page'].slug.current
  }
}`;

export const qryPage = groq`
*[_type == 'page' && slug.current==$slug]|order(_updatedAt desc)[0]{
  title,
  'slug':slug.current,
  'image':image.asset->url,
  descr,
  _id,
    components[]->{
      _type,
      title
    }
}
`;
