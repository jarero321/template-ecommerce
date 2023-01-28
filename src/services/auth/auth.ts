import axios from 'axios';

const AUTH_URL = process.env.AUTH_URL;

const PROJECT_KEY = process.env.PROJECT_KEY;

const getAnonymousToken = () => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${AUTH_URL}/oauth/${PROJECT_KEY}/anonymous/token`,
        new URLSearchParams({
          grant_type: 'client_credentials',
        }),
        {
          headers: {
            Authorization: `Basic ${process.env.ENCODED_BASIC_AUTH}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      )
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export { getAnonymousToken };
