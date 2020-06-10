import Actions from '../actions'

const initialState = {
    isFetched: true,
    movies: [],
    error: null
};


export default (state=initialState, action) => {
    switch (action.type) {
        case Actions.FETCH_SLIDER.REQUEST:
            return {
                ...state,
                isFetched: false,
                error: null
            };
        case Actions.FETCH_SLIDER.SUCCESS:
            return {
                ...state,
                isFetched: true,
                movies: [...action.payload],
                error: null
            };
        case Actions.FETCH_SLIDER.FAILURE:
            return {
                ...state,
                isFetched: true,
                error: action.payload
            };
        default:
            return state
    }
}