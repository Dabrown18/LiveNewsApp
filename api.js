import axios from 'axios';

export const fetchArticlesApi = async () => {
  try {
    const response = await axios
      .get('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=EWrmCqczT8LBAAVxuUxgP7mL8MbFVpkP');
    const {data} = response;

    return data;
  } catch (err) {
    const {rejectWithValue} = err.meta;
    return rejectWithValue('FAILED TO GET ARTICLES');
  }
};
