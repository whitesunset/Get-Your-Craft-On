const client = require("../utils/sanityClient");

async function loadSettings() {
  const siteSettings = await client
    .fetch(
      `
      *[_type=='settings'][0]{
        logo,
        'logoUrl': logo.asset->url,
        clrPrimary,
        clrSecondary,
        primaryLocation->{
          address,
          addressExt,
          city,
          country,
          postcode,
          email,
          phoneNumbers[0]{
            number,
            label
          },
          mapLocation{
            lat,
            lng,
          }
        },
        title,
        description,
        fontPrimary,
        fontSecondary,
        fontFallback,
        siteOwner
      }
      `
    )

    .catch((err) => console.error(err));
  // console.log(siteSettings);
  return siteSettings;
}

module.exports = loadSettings;
