import http from '@api/http'

const type = 'episode';

export default {
    find(title) {
        return http.get(`type=${type}&t=${title}`);
    },
    list() {
        return http.get(`type=${type}`);
    }
};
