class Login {

    input_username = '#user-name';
    input_password = '#password';
    login_button = '#login-button';
    products_heading = '.product_label'; 
    error_msg = 'h3'



    setUserName(username){
        cy.get(this.input_username).type(username)

    }

    setPassword(password){
        cy.get(this.input_password).type(password)
    }

    clickLogin(){
        cy.get(this.login_button).click()
    }

    verifyLogin(){
        cy.get(this.products_heading).should("have.text", "Products")
    }

    verifyErrorMsgWrongCredent(){
        cy.get(this.error_msg).should("have.text", "Epic sadface: Username and password do not match any user in this service")

    }

    verifyErrorMsgNoPassword(){
        cy.get(this.error_msg).should("have.text", "Epic sadface: Password is required")

    }

    verifyErrorMsgNoUserName(){
        cy.get(this.error_msg).should("have.text", "Epic sadface: Username is required")

    }


}

export default Login;