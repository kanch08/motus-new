const errorReducer = (state = [], action) =>{
    switch(action.type) {
        case 'ADD_ERROR': {
            console.log("Data received by company Reducer-->",action);
            return [...state, {...action.data}]
        }

        default: {
            
            return state;
        }
    }
}

export default errorReducer;