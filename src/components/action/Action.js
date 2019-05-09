export const addCompanyInfo = (data,validator) =>{
    console.log("---ADD COMPANY INFO---");
    console.log('Data received by company Action--->', data,validator);
    return{
        type: 'ADD_COMPANY_INFO',
        data,
        validator
    }
}

export const product = (data) =>{
    console.log("---ASSIGN PRODUCTS---");
    console.log('Data received by product Action--->', data);
    return{
        type: 'ENABLED_PRODUCTS',
        data
    }
}

export const admin = (data) =>{
    console.log("---SETUP ADMINS---");
    console.log('Data received by Admins Action--->', data);
    return{
        type: 'SETUP_ADMINS',
        data
    }
}