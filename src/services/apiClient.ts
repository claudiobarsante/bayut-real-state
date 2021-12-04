import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url: string) => {
  console.log('url: ' + url);
  const { data } = await axios.get(url, {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '8761564945msh66b62b36747efe3p1ad8e9jsn3bec32719123'
    }
  });
  console.log('data', data);
  return data;
};
