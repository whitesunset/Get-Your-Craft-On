// Rich text annotations used in the block content editor
import annotationLinkEmail from './annotations/linkEmail'
import annotationLinkExternal from './annotations/linkExternal'
import annotationLinkInternal from './annotations/linkInternal'
import annotationProduct from './annotations/product'

const annotations = [
  annotationLinkEmail,
  annotationLinkExternal,
  annotationLinkInternal,
  annotationProduct,
]

// Document types
import collection from './documents/collection'
import colorTheme from './documents/colorTheme'
import location from './documents/location'
import navigation from './documents/navigation'
import productNavigation from './documents/productNavigation'
import page from './documents/page'
import product from './documents/product'
import productVariant from './documents/productVariant'
import recipe from './documents/recipe'
import hero from './documents/hero'
import about from './documents/about-us'
import cta from './documents/cta'
import testimonial from './documents/testimonial'
import testimonialList from './documents/testimonialList'
import team from './documents/team'
import terms from './documents/terms-of-use'
import privacy from './documents/privacy-statement'
import button from './documents/button'
import teamMember from './documents/team-member'
import author from './documents/author'
import post from './documents/post'

const documents = [
  collection,
  colorTheme,
  location,
  productNavigation,
  navigation,
  page,
  product,
  productVariant,
  recipe,
  hero,
  about,
  cta,
  team,
  testimonial,
  testimonialList,
  terms,
  privacy,
  button,
  teamMember,
  author,
  post,
]

// Singleton document types
import homepage from './singletons/homepage'
import settings from './singletons/settings'

const singletons = [homepage, settings]

// Block content
import body from './blocks/body'

const blocks = [body]

// Object types
import customProductOptionColor from './objects/customProductOption/color'
import customProductOptionColorObject from './objects/customProductOption/colorObject'
import customProductOptionSize from './objects/customProductOption/size'
import customProductOptionSizeObject from './objects/customProductOption/sizeObject'
import footer from './objects/global/footer'
import imageWithProductHotspots from './objects/hotspot/imageWithProductHotspots'
import inventory from './objects/shopify/inventory'
import linkExternal from './objects/global/linkExternal'
import linkInternal from './objects/global/linkInternal'
import links from './objects/global/links'
import notFoundPage from './objects/global/notFoundPage'
import heroCollection from './objects/hero/collection'
import heroHome from './objects/hero/home'
import heroPage from './objects/hero/page'
import font from './objects/global/font'
import moduleAccordion from './objects/module/accordion'
import accordionBody from './objects/module/accordionBody'
import accordionGroup from './objects/module/accordionGroup'
import moduleCallout from './objects/module/callout'
import moduleCallToAction from './objects/module/callToAction'
import moduleCollection from './objects/module/collection'
import moduleGrid from './objects/module/grid'
import gridItems from './objects/module/gridItem'
import menu from './objects/global/menu'
import phone from './objects/global/phone'
import mainImage from './objects/global/mainImage'
import authorReference from './objects/global/authorReference'
import moduleImage from './objects/module/image'
import moduleImageAction from './objects/module/imageCallToAction'
import moduleImages from './objects/module/images'
import moduleInstagram from './objects/module/instagram'
import moduleProduct from './objects/module/product'
import moduleProducts from './objects/module/products'
import placeholderString from './objects/shopify/placeholderString'
import priceRange from './objects/shopify/priceRange'
import spot from './objects/hotspot/spot'
import productHotspots from './objects/hotspot/productHotspots'
import option from './objects/shopify/option'
import productWithVariant from './objects/shopify/productWithVariant'
import proxyString from './objects/shopify/proxyString'
import seo from './objects/seo/seo'
import seoHome from './objects/seo/home'
import seoPage from './objects/seo/page'
import seoDescription from './objects/seo/description'
import seoShopify from './objects/seo/shopify'
import shopifyCollection from './objects/shopify/shopifyCollection'
import shopifyCollectionRule from './objects/shopify/shopifyCollectionRule'
import shopifyProduct from './objects/shopify/shopifyProduct'
import shopifyProductVariant from './objects/shopify/shopifyProductVariant'
import discord from './objects/social/discord'
import facebook from './objects/social/facebook'
import github from './objects/social/github'
import instagram from './objects/social/instagram'
import linkedin from './objects/social/linkedin'
import slack from './objects/social/slack'
import twitter from './objects/social/twitter'

// Collections
import collectionGroup from './objects/collection/group'
import collectionLinks from './objects/collection/links'

// Blog
import blogCategory from './objects/blog/category'

const objects = [
  customProductOptionColor,
  customProductOptionColorObject,
  customProductOptionSize,
  customProductOptionSizeObject,
  footer,
  imageWithProductHotspots,
  inventory,
  discord,
  facebook,
  github,
  instagram,
  linkedin,
  slack,
  twitter,
  font,
  links,
  linkExternal,
  linkInternal,
  notFoundPage,
  heroCollection,
  heroHome,
  heroPage,
  phone,
  mainImage,
  authorReference,
  moduleAccordion,
  accordionBody,
  accordionGroup,
  menu,
  moduleCallout,
  moduleCallToAction,
  moduleCollection,
  moduleGrid,
  gridItems,
  moduleImage,
  moduleImageAction,
  moduleImages,
  moduleInstagram,
  moduleProduct,
  moduleProducts,
  placeholderString,
  priceRange,
  spot,
  productHotspots,
  option,
  productWithVariant,
  proxyString,
  seo,
  seoHome,
  seoPage,
  seoDescription,
  seoShopify,
  shopifyCollection,
  shopifyCollectionRule,
  shopifyProduct,
  shopifyProductVariant,
  collectionGroup,
  collectionLinks,
  blogCategory,
]

export const schemaTypes = [...annotations, ...singletons, ...objects, ...blocks, ...documents]
