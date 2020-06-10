import Actions from '../actions'

const initialState = {
    isFetched: true,
    movie: {},
    error: null
};

export default (state=initialState, action) => {

    switch (action.type) {
        case Actions.FETCH_ONE.REQUEST:
            return {
                ...state,
                movie: {},
                isFetched: false,
                error: null
            };
        case Actions.FETCH_ONE.SUCCESS:
            return {
                ...state,
                isFetched: true,
                movie: action.payload,
                error: null
            };
        case Actions.FETCH_ONE.FAILURE:
            return {
                ...state,
                isFetched: true,
                error: action.payload
            };
        default:
            return state
    }
}