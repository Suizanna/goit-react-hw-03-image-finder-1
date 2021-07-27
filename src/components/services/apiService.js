import axios from 'axios';

const Pixabay = {
  BASE_URL: 'https://pixabay.com/api/',
  KEY: '21657218-66b7793ee8efd2d7b156dd49c',
};

axios.defaults.baseURL = Pixabay.BASE_URL;

export class Api {
  static async getImages(searchQuery, page) {
    const params = `?q=${searchQuery}&page=${page}&key=${Pixabay.KEY}&image_type=photo&orientation=horizontal&per_page=12
        `;
    const { data } = await axios.get(params);

    return data.hits;
  }
}
