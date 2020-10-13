import axios from 'axios';

const KEY = 'AIzaSyC7-dol7H7mY3cgrQNNE9vLB6H4zQjbr-g';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});