import { Selector , t} from "testcafe"; 
class loginPageObjects {
    constructor(){
        this.usernameElement=Selector("#username");
        this.passwordElement=Selector("#password");
        this.loginButtonElement=Selector("#login");
    }


        async loginCredentials(username,password){
            await t
           .typeText(this.usernameElement,username)
           .typeText(this.passwordElement,password)
           .click(this.loginButtonElement)
        }
    



}
export default new loginPageObjects();