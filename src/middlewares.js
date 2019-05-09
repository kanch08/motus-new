const logger = store => next => action =>{
    console.log("printing action",action);
    next(action);
}

const validator=store => next => action =>{
    let err;
    let objectKeys=Object.keys(action.data);
    if(action.validator){
        err=action.validator(action.data[objectKeys[0]]);
        
    }
    if(err){
        
        store.dispatch({type:'ADD_ERROR',data:{err:err,name:objectKeys[0]}})
    }
    next(action);
}
export {
    logger,
    validator
}