import axios from 'axios';
import { useQuery } from 'react-query';

const baseUrl = import.meta.env.VITE_APP_URL;
/**@param {'home' | 'startup' | 'investments' | 'hotNeeds' | 'vourchers' | 'search-conext' } key */
export default function useGet(key) {
  return useQuery('data' + key, async () => {
    const res = await axios.get(baseUrl);
    const data = res.data.find((item) => item.name === key);
    if (data) return data[key];
    return [];
  });
}
