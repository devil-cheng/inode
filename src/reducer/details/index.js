export default function details(state = {
    loading: false,
    data: []
}, action) {
    switch(action.type) {
        case "DETAIL_INIT":
            return {
                loading: true,
                data: state.data
            }
        case "DETAIL_UPDATE":
                return {
                    loading: false,
                    data: [action.data.data]
                }
        case "DETAIL_ERROR":
            return {
                loading: false,
                data: []
            }
        default: 
            return state
    }
}