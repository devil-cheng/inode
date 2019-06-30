export default function user(state = {
    loading: false,
    data: []
}, action) {
    switch(action.type) {
        case "USER_INIT":
            return {
                loading: true,
                data: state.data
            }
        case "USER_UPDATE":
                return {
                    loading: false,
                    data: [action.data.data]
                }
        case "USER_ERROR":
            return {
                loading: false,
                data: []
            }
        default: 
            return state
    }
}