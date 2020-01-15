import http from '@api/http'

const type = 'movie';

export default {
    find(title) {
        return http.get(`type=${type}&t=${title}`);
    },
    list() {
        return http.get(`type=${type}`);
    }
};
