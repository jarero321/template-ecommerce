import { gql } from '@apollo/client';

const CREATE_USER = gql`
  mutation customerCreate($draft: CustomerSignMeUpDraft!) {
    customerSignMeUp(draft: $draft) {
      customer {
        id
        isEmailVerified
        firstName
        lastName
      }
    }
  }
`;
const LOGIN_USER = gql`
  mutation customerLogin($draft: CustomerSignMeInDraft!) {
    customerSignMeIn(draft: $draft) {
      customer {
        id
        isEmailVerified
        firstName
        lastName
      }
    }
  }
`;
export { CREATE_USER, LOGIN_USER };
