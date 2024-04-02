let initialState = {
    contactList:[],
    keyword: "",
};

function reducer(state =initialState, action) { // 2개의 매개변수 필요 (state, action)
    const{type,payload} = action;
    switch(type){
        case "ADD_CONTACT":
            return{
                ...state, contactList:[
                ...state.contactList,
                {
                    name:payload.name,
                    phoneNumber:payload.phoneNumber
                },
            ]};

        case "SEARCH_BY_USERNAME" : 
            return {...state, keyword: payload?.keyword};

        default:
            return{...state}
    } 
}

export default reducer;