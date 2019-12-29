const initialState = {
    loggedInStatus:false,//localStorage.getItem('userLoggedInStatus')==='true',
    userField:false,
    passwordField:false,
    pdtnameField:false,
    descField:false,
    categoryField:false,
    dateField:false,
    unitsField:false,
    showPopup:false,
    updatePopup:false
}

const mainReducer = (currentState = initialState, action) => {
    switch(action.type){
        case 'USER_LOGIN':
            localStorage.setItem('userLoggedInStatus',true)
            return {...currentState,loggedInStatus:true}
            break;
        case 'USER_LOGOUT':
            localStorage.setItem('userLoggedInStatus',false)
            return {...currentState,loggedInStatus:false}
            break;
        case 'USERFIELD_YES':
            return {...currentState,userField:true}
            break;
        case 'USERFIELD_NO':
            return {...currentState,userField:false}
            break;
        case 'PASSWORDFIELD_YES':
            return {...currentState,passwordField:true}
            break;
        case 'PASSWORDFIELD_NO':
            return {...currentState,passwordField:false}
            break;
        case 'PDTNAME_YES':
                return {...currentState,pdtnameField:true}
                break;
        case 'PDTNAME_NO':
            return {...currentState,pdtnameField:false}
            break;
        case 'DESCRIPTION_YES':
            return {...currentState,descField:true}
            break;
        case 'DESCRIPTION_NO':
            return {...currentState,descField:false}
            break;
        case 'CATEGORY_YES':
            return {...currentState,categoryField:true}
            break;
        case 'CATEGORY_NO':
            return {...currentState,categoryField:false}
            break;
        case 'DATE_YES':
            return {...currentState,dateField:true}
            break;
        case 'DATE_NO':
            return {...currentState,dateField:false}
            break;
        case 'UNITS_YES':
            return {...currentState,unitsField:true}
            break;
        case 'UNITS_NO':
            return {...currentState,unitsField:false}
            break;
        case 'SHOW_POPUP':
            return {...currentState,showPopup:true}
            break;
        case 'HIDE_POPUP':
            return {...currentState,showPopup:false}
            break;
        case 'SHOW_UPOPUP':
            return {...currentState,updatePopup:true}
            break;
        case 'HIDE_UPOPUP':
            return {...currentState,updatePopup:false}

            default: return {...currentState}
    }
   
}

export default mainReducer;