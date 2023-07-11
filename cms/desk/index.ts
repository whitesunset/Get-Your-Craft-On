/**
 * Desk structure overrides
 */
import {ListItemBuilder, StructureResolver} from 'sanity/desk'
import collections from './collectionStructure'
// import colorThemes from './colorThemeStructure'
import homepage from './homepageStructure'
import pages from './pageStructure'
import products from './productStructure'
import settings from './settingStructure'
import location from './locationStructure'
import navigation from './navigationStructure'
import recipe from './recipeStructure'
import components from './componentsStructure'
import blog from './blogStructure'
import author from './authorStructure'

/**
 * Desk structure overrides
 *
 * Sanity Studio automatically lists document types out of the box.
 * With this custom desk structure we achieve things like showing the `home`
 * and `settings` document types as singletons, and grouping product details
 * and variants for easy editorial access.
 *
 * You can customize this even further as your schemas progress.
 * To learn more about structure builder, visit our docs:
 * https://www.sanity.io/docs/overview-structure-builder
 */

// If you add document types to desk structure manually, you can add them to this function to prevent duplicates in the root pane
const hiddenDocTypes = (listItem: ListItemBuilder) => {
  const id = listItem.getId()

  if (!id) {
    return false
  }

  return ![
    'collection',
    'colorTheme',
    'home',
    'media.tag',
    'page',
    'product',
    'productVariant',
    'settings',
    'location',
    'homepage',
    'navigation',
    'productNav',
    'recipe',
    'hero',
    'about-us',
    'cta',
    'team',
    'testimonialList',
    'testimonial',
    'team-member',
    'terms-of-use',
    'privacy-statement',
    'post',
    'author',
    'blogCategory',
  ].includes(id)
}

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Content')
    .items([
      homepage(S, context),
      pages(S, context),
      components(S, context),
      S.divider(),
      products(S, context),
      collections(S, context),
      S.divider(),
      recipe(S, context),
      blog(S, context),
      author(S, context),
      S.divider(),
      location(S, context),
      navigation(S, context),
      settings(S, context),
      S.divider(),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
