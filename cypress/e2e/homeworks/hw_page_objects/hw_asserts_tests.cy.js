import { LoginPage } from "../../../../page-objects/pmtool/login_page";

const loginElements = {
username: { selector: '#username', placeholder: 'Username' },
password: { selector: '#password', placeholder: 'Password' },
rememberMe: { selector: '.checkbox', text: '  Remember Me' },
loginButton: { selector: '.btn', text: 'Login' },
forgotPassword: { selector: '#forget_password', text: 'Password forgotten?' },
logo: { selector: '.login-page-logo' }
};

const loginPage = new LoginPage();

describe('Pmtool: Homepage elements', () => {
beforeEach(()=>{
loginPage.openPmtool();
})

it('Check placeholder', () => {
loginPage.checkPlaceholder(loginElements.username.selector, loginElements.username.placeholder);
loginPage.checkPlaceholder(loginElements.password.selector, loginElements.password.placeholder);
});

it('Check text of elements', () => {
loginPage.checkText(loginElements.rememberMe.selector, loginElements.rememberMe.text);
loginPage.checkText(loginElements.loginButton.selector, loginElements.loginButton.text);
loginPage.checkText(loginElements.forgotPassword.selector, loginElements.forgotPassword.text);
});

it('Check visibility', () => {
loginPage.visibilityelement(loginElements.logo.selector);
});
});