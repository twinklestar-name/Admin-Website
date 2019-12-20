const initialState = {
    totalCount:0,
    totalCart: 0,
}

const mainReducer = (previousState = initialState, action) => {
    if(action.type === 'INCREMENT_BY_ONE') {
        return {...previousState, totalCount: previousState.totalCount + 1};
    } else if(action.type === 'INCREMENT_BY_FIFTY') {
        return {...previousState, totalCount: previousState.totalCount + 50};
    } else if(action.type === 'INCREMENT_BY_CUSTOM_VAL') {
        return {...previousState, totalCount: previousState.totalCount + action.customVal}
    }
    return {...previousState}
}

export default mainReducer;