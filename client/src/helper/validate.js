import toast from 'react-hot-toast'

export async function usernameValidate( values){
    const errors = usernameVerify({},values);
        return errors;
    
}

export async function passwordValidate( values){
    const errors = passwordVerify({},values);
        return errors;
    
}

function passwordVerify( error={}, values){
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if(!values.password){
        error.password = toast.error("Password is Required...!")
    }else if(values.password.includes(" ")){
        error.password = toast.error("Invalid Password");
    }else if(values.password.length<4){
        error.password =toast.error(" Password must be more than 4 character")
    }if(!specialChars.test(values.password)){
        error.password =toast.error(" Password must have special Characters")
    }
    return error;
}


function usernameVerify(error = {}, values){
    if(!values.username){
        error.username = toast.error("User Name Require");
    }else if (values.username.includes(" ")){
        error.username = toast.error("Invalid User Name");
    }

    return error;
}