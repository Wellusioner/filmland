import Actions from '../actions'

const initialState = {
    isFetched: true,
    data: [],
    error: null
};


export default (state=initialState, action) => {
    switch (action.type) {
        case Actions.FETCH_ALL.REQUEST:
            return {
                ...state,
                isFetched: false,
                error: null
            };
        case Actions.FETCH_ALL.SUCCESS:
            return {
                ...state,
                isFetched: true,
                data: action.payload,
                error: null
            };
        case Actions.FETCH_ALL.FAILURE:
            return {
                ...state,
                isFetched: true,
                error: action.payload
            };
        default:
            return state
    }
}