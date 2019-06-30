export default function list(state = {
    loading: false,
    page: 1,
    total: 39,
    limit: 20,
    data: []
}, action) {
    switch(action.type) {
        case "LIST_INIT":
            return {
                loading: true,
                data: state.data
            }
        case "LIST_UPDATE":
                return {
                    loading: false,
                    data: action.data.data,
                    limit: action.limit,
                    page: action.page
                }
        case "LIST_ERROR":
            return {
                loading: false,
                data: [],
                page: 1,
                limit: 20,
            }
        default: 
            return state
    }
}