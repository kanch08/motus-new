

const adminReducer = (state = {}, action) =>{
    switch(action.type) {
        case 'SETUP_ADMINS': {
            console.log("Data received by Admins Reducer-->", action.data);
            return {...state, ...action.data };
        }

        default: {
            return state;
        }
    }
}

export default adminReducer;