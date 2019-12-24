const initialState = {
    loggedInStaus:false
}

const mainReducer = (currentState = initialState, action) => {
    switch(action.type){
        case 'USER_LOGIN':
            return {...currentState,loggedInStaus:true}
            break;
            default: return {...currentState}
    }
   
}

export default mainReducer;