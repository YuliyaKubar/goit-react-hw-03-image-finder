import axios from 'axios';

const API_KEY = '35069907-16ee8141b79ba130abf84928c';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImages({ query, page }) {
  return await axios(
    `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
}
