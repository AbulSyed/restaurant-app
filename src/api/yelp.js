import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer kIUe9Ty-mX_Vvh6gl7hE007U6Z_eDm4gMqUZU2p3DO-P6ky35KoC2IiTP7eDrNi8zXtjnheyGZqSVHOByiYkmqwXA6RenUJr6L9uuXjJSFj876-dqY7SV1OaFdEqYHYx'
    }
})