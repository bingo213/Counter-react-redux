// eslint-disable-next-line import/no-anonymous-default-export
function reducer (state = {num: 0}, action) {
    switch(action.type){
        case 'increment':
            return {
                ...state,
                num: state.num + 1,
            }
        case 'decrement':
            return {
                ...state,
                num: state.num -1,
            }
        default:
            return state;
    };
}

export default reducer;