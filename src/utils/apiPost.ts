import axios from 'axios';

const apiPost = async (endpoint: string, params: Record<string, unknown>) => {
  const result = await axios.post(`/api${endpoint}`, params, {
    headers: {
      'content-type': 'application/json',
    },
  });
  return result.data;
};

export default apiPost;
