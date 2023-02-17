export const validation = (data, type) => {

    const errors = {};


    if (!data.email.trim()) {
        errors.email = "Email Require";
    }
    else if (!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(data.email)) {
        const regex = new RegExp("")
        errors.email = "Email address not valid";
    } else {
        delete errors.email;
    }



    if (!data.password.trim()) {
        errors.password = "Password Require";
    } else if (data.password.length < 6) {
        errors.password = "Password must be at least 6 characters"
    } else {
        delete errors.password;
    }

    //  this section  validation for sing up form
    if (type === "signUp") {

        if (!data.username.trim()) {
            errors.username = "Username Require";
        } else {

            delete errors.username;
        }



        if (!data.confirmPassword.trim()) {
            errors.confirmPassword = "Confirm the Password"
        } else if (data.password !== data.confirmPassword) {
            errors.confirmPassword = "Password does not match"
        } else {
            delete errors.confirmPassword
        }




        if (!data.checkbox) {
            errors.checkbox = "Accept our regulation"
        } else {
            delete errors.checkbox
        }
    }

   

    return errors

}