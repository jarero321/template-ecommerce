import { gql } from '@apollo/client';

const GET_ALL_PRODUCTS = gql`
  query getProducts($locale: Locale!) {
    products {
      results {
        masterData {
          current {
            name(locale: $locale)
            description(locale: $locale)
            masterVariant {
              sku
              images {
                url
                label
              }
              price(currency: "EUR") {
                value {
                  type
                  currencyCode
                  centAmount
                  fractionDigits
                }
              }
            }
          }
        }
      }
    }
  }
`;

export { GET_ALL_PRODUCTS };
