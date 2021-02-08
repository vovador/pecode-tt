const BASE_URL = 'https://rickandmortyapi.com/api';

const request = (url, options) => {
  return fetch(`${BASE_URL}${url}`, options)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
      }

      return res.json();
    });
};

export const getCharacters = async(url) => {

  const infoFromServer = await request(url);

  return infoFromServer;
}

