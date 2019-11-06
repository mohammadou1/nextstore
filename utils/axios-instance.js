import axios from 'axios';


// * Creating an instance of axios to shorten requests.
export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});
