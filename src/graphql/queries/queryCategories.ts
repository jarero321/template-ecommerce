import { gql } from '@apollo/client';

const CATEGORIES_PRODUCTS = gql`
  query getCategories($locale: Locale!) {
    categories {
      results {
        stagedProductCount
        name(locale: $locale)
        id
        children {
          name(locale: $locale)
        }
      }
    }
  }
`;
const PRODUCTS_BY_CATEGORY = gql`
  query getProductProjection($locale: Locale!, $id: String!) {
    productProjectionSearch(
      locale: $locale
      text: ""
      sorts: ["price"]
      queryFilters: {
        model: {
          tree: { path: "categories.id", rootValues: [], subTreeValues: [$id] }
        }
      }
    ) {
      results {
        slug(locale: $locale)
        categories {
          name(locale: $locale)
        }
        variants {
          id
        }
        name(locale: $locale)
        description(locale: $locale)
        reviewRatingStatistics {
          averageRating
        }
        masterVariant {
          sku
          prices {
            value {
              type
              currencyCode
              centAmount
              fractionDigits
            }
          }
          attributesRaw(includeNames: ["CodigoBarras", "Nuevos"]) {
            name
            value
          }
          images {
            url
          }
        }
      }
    }
  }
`;
const PRODUCTS_BY_TEXT = gql`
  query getProductSearh($locale: Locale!, $text: String!) {
    productProjectionSearch(locale: $locale, text: $text) {
      results {
        slug(locale: $locale)
        categories {
          name(locale: $locale)
        }
        variants {
          id
        }
        name(locale: $locale)
        description(locale: $locale)
        reviewRatingStatistics {
          averageRating
        }
        masterVariant {
          sku
          prices {
            value {
              type
              currencyCode
              centAmount
              fractionDigits
            }
          }
          attributesRaw(includeNames: ["CodigoBarras"]) {
            name
            value
          }
          images {
            url
          }
        }
      }
    }
  }
`;
export { CATEGORIES_PRODUCTS, PRODUCTS_BY_CATEGORY, PRODUCTS_BY_TEXT };
