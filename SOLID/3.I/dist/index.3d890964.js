class User {
    constructor(){
        this._password = 'user';
    }
    //Interesting detail here: while I did not define a return type or param type, any deviation from the interface will give you an error.
    // Test it out by uncommenting the code below.
    checkGoogleLogin(token) {
        // return "this will not work";
        return token === this._googleToken;
    }
    setGoogleToken(token1) {
        this._googleToken = token1;
    }
    getFacebookLogin(token2) {
        return token2 === this._facebookToken;
    }
    setFacebookToken(token3) {
        this._facebookToken = token3;
    }
    checkPassword(password) {
        return password === this._password;
    }
    resetPassword() {
        this._password = prompt('What is your new password?');
    }
}
//admin cannot use google or facebook token
class Admin {
    constructor(){
        this._password = 'admin';
    }
    checkPassword(password1) {
        return password1 === this._password;
    }
    resetPassword() {
        this._password = prompt('What is your new password?');
    }
}
class GoogleBot {
    checkGoogleLogin(token4) {
        // return "this will not work";
        return token4 === this._googleToken;
    }
    setGoogleToken(token5) {
        this._googleToken = token5;
    }
}
const passwordElement = document.querySelector('#password');
const typePasswordElement = document.querySelector('#typePassword');
const typeGoogleElement = document.querySelector('#typeGoogle');
const typeFacebookElement = document.querySelector('#typeFacebook');
const loginAsAdminElement = document.querySelector('#loginAsAdmin');
const resetPasswordElement = document.querySelector('#resetPassword');
let guest = new User;
let admin = new Admin;
let googleBot = new GoogleBot;
document.querySelector('#login-form').addEventListener('submit', (event)=>{
    event.preventDefault();
    let user = loginAsAdminElement.checked ? admin : guest;
    if (user === guest) {
        user.setGoogleToken('secret_token_google');
        user.setFacebookToken('secret_token_fb');
    }
    debugger;
    let auth = false;
    if (user === guest) switch(true){
        case typePasswordElement.checked:
            auth = user.checkPassword(passwordElement.value);
            break;
        case typeGoogleElement.checked:
            auth = user.checkGoogleLogin('secret_token_google');
            break;
        case typeFacebookElement.checked:
            debugger;
            auth = user.getFacebookLogin('secret_token_fb');
            break;
    }
    else if (typePasswordElement.checked) auth = user.checkPassword(passwordElement.value);
    if (auth) alert('login success');
    else alert('login failed');
});
resetPasswordElement.addEventListener('click', (event)=>{
    event.preventDefault();
    let user = loginAsAdminElement.checked ? admin : guest;
    user.resetPassword();
});

//# sourceMappingURL=index.3d890964.js.map
