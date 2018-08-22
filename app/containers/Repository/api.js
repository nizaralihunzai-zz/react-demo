import axios from 'utils/axios';

export function testApi() {
    return axios.get("/posts");
}
