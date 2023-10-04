// JS Program for Passwrod Checker // 
class User{
    constructor(username,password){
        this.username = username;
        this.password = password;
    }
    getPassword(){
        // In the getPassword method, this line returns the user's password with all characters replaced by asterisks (*). It uses the replace method with a regular expression /./g to replace all characters in the password.//
        return this.password.replace(/./g,"*");
        // here g stands for global search!
    }

    

    setPassword(newPassword){
        //isValidPassword is a Prototype method of a User class.
        if(this.isValidPassword(newPassword)){
            this.password = newPassword;
        }else{
            console.log("Error: Password must be at of least 8 characters long and contain at least one number and one uppercase letter");
        }
    }
    isValidPassword(newPassword){
        let hasNumbers = /[0-9]/g.test(newPassword);
        let hasUpperCase = /[A-Z]/g.test(newPassword);

        return   (newPassword.length >= 8)
        && hasNumbers && hasUpperCase;
    }
    
}

let user = new User("Jai", "Paasdds23")
console.log(user.getPassword())

user.setPassword("234")
console.log(user.getPassword())

user.setPassword("12Pasword213123123")
console.log(user.getPassword());