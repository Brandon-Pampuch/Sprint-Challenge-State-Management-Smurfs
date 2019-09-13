const initialData = [{ name: 'john' }]



export const smurfReducer = (state = initialData, action) => {
    switch (action.type) {
        case 'FETCH_SMURFS_SUCCESS':
            return action.payload
        case 'POST_SMURF_SUCCESS':
            return [...state, action.payload]
        default:
            return state
    }
}