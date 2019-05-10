const isRequired = (value)=>{
    if(value===''){
        return 'value can not be blank'
    }
    else {
        return undefined
    }
}

export default isRequired;
