import buildUrl from 'build-url'
import axios from 'axios'
import config from 'config'


axios.defaults.params = {};
axios.defaults.headers.common['mode'] = 'no-cors';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST';
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Access-Control-, Origin, X-Requested-With, Content-Type, Accept';

const queryBuilder = (
        url='',
        {
            page=1
        }
    ) => {

    let query = {};

    if(config.API_KEY){
        query['user'] = config.API_KEY;
    }
    if( page > 0){
        query['page'] = page
    }

    return buildUrl({
        path: url,
        queryParams: query
    });
};

export default {
    request: axios.create({
        baseURL: config.API_ROOT
    }),
    queryBuilder
}