
import Login from "../pages/login_page.cy";


const login = new Login()

describe("Login Test Suit", () => {

    beforeEach("Launch browser", () => {
        cy.visit("/");
    })

    it("Verify login with correct credentials", () => {
        login.setUserName(Cypress.env('username'));
        login.setPassword(Cypress.env('password'));
        login.clickLogin();
        login.verifyLogin();

    })

    it("Verify login with incorrect credentials", () =>{
        login.setUserName('khan');
        login.setPassword('123');
        login.clickLogin();
        login.verifyErrorMsgWrongCredent();

    })

    it("Verify login error message without username", () =>{
        login.setPassword('123');
        login.clickLogin();
        login.verifyErrorMsgNoUserName();

    })

    it("Verify login error message without password", () =>{
        // login.setUserName('khan');
        login.clickLogin();
        login.verifyErrorMsgNoPassword();

    })

})