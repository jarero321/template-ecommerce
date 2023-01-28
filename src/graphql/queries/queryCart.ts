import { gql } from '@apollo/client';

const CREATE_CART = gql`
  mutation createCart($draft: MyCartDraft!) {
    createMyCart(draft: $draft) {
      cartId: id
      version
      __typename
    }
  }
`;

const UPDATE_CART = gql`
  mutation updateCart(
    $actions: [MyCartUpdateAction!]!
    $version: Float!
    $id: String!
  ) {
    updateMyCart(actions: $actions, version: $version, id: $id) {
      id
      version
      lineItems {
        lineId: id
        quantity
        __typename
      }
      __typename
    }
  }
`;
const MY_CART = gql`
  query getCart($locale: Locale!) {
    myCart: me {
      activeCart {
        cartId: id
        version
        lineItems {
          lineId: id
          name(locale: $locale)
          productSlug(locale: $locale)
          quantity
          price {
            value {
              centAmount
              currencyCode
              fractionDigits
              __typename
            }
            discounted {
              value {
                centAmount
                currencyCode
                fractionDigits
                __typename
              }
              discount {
                name(locale: $locale)
                __typename
              }
              __typename
            }
            __typename
          }
          totalPrice {
            centAmount
            currencyCode
            fractionDigits
            __typename
          }
          variant {
            sku
            images {
              url
              __typename
            }
            attributesRaw {
              name
              value
              attributeDefinition {
                type {
                  name
                  __typename
                }
                name
                label(locale: $locale)
                __typename
              }
              __typename
            }
            __typename
          }
          __typename
        }
        totalPrice {
          centAmount
          currencyCode
          fractionDigits
          __typename
        }
        shippingInfo {
          shippingMethod {
            methodId: id
            name
            localizedDescription(locale: $locale)
            __typename
          }
          price {
            centAmount
            currencyCode
            fractionDigits
            __typename
          }
          __typename
        }
        taxedPrice {
          totalGross {
            centAmount
            currencyCode
            fractionDigits
            __typename
          }
          totalNet {
            centAmount
            currencyCode
            fractionDigits
            __typename
          }
          __typename
        }
        discountCodes {
          discountCode {
            codeId: id
            code
            name(locale: $locale)
            __typename
          }
          __typename
        }
        shippingAddress {
          firstName
          lastName
          streetName
          additionalStreetInfo
          postalCode
          city
          country
          phone
          email
          __typename
        }
        billingAddress {
          firstName
          lastName
          streetName
          additionalStreetInfo
          postalCode
          city
          country
          phone
          email
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;
export { CREATE_CART, MY_CART, UPDATE_CART };
