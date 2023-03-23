const { test, expect } = require("@playwright/test");

exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginBtn = page.getByRole('button', { name: 'Log In' });
    this.fbLogIn = page.getByRole('button', { name: 'Log in with Facebook' });
    this.fbUsernameField = page.getByPlaceholder('Email address or phone number')
    this.fbPasswordField = page.getByPlaceholder('Password');
    this.fbLoginBtn = page.getByRole('button', { name: 'Log in' });
    this.gmailLogin = page.getByRole('button', { name: 'Log in with Google' });
    this.gmailUsernameField = page.getByRole('textbox', { name: 'Email or phone' });
    this.gmailPasswordField = page.getByRole('textbox', { name: 'Enter your password' });
    this.nextButton = page.getByRole('button', { name: 'Next' });

    // this.usernameField = page.locator('input[name="email"]');
    // this.passwordField = page.locator('input[name="password"]');
    // this.loginButton = page.locator('button[type="submit"] span');
    // this.textBelowImage = page.locator("div.mainbnr-txt");
    // this.headderTextBelowImage = page.locator("div.mainbnr-txt h2");
    // this.paragaphTextBelowImage = page.locator("div.mainbnr-txt p");
    // this.loginPageHeaderText = page.locator("form.frm_sgn_up>>div>>div>>div>>nth=0");
    // this.emailLabelText = page.locator("form.frm_sgn_up label").first();
    // this.passwordLabelText = page.locator("form.frm_sgn_up label >> nth = 1");
    // this.privacyPolicyTextWrapper = page.locator("form span.text-body");
    // this.loginWithGoogleWrapper = page.locator('a#google-connect>>span>>nth=1');
    // this.signUpWrapper = page.locator('div.frm_sgn_up h5');
    // this.forgotPasswordText = page.locator('a.forgetpasword')
  }

  async navigateToTinHomepage(page, webpageaddress) {
    await test.step("Navigate to webpage", async () => {
      await this.page.goto(webpageaddress, { setTimeout: 5000 });
    });
  }
  async loginWithGmailAccount(page, username, password) {
    await test.step("Login with Gmail Account", async () => {
      await this.gmailLogin.click();
      await expect(this.gmailUsernameField).toBeVisible();
      await this.gmailUsernameField.fill(username);      
      await this.nextButton.click();
      await expect(this.gmailPasswordField).toBeVisible();
      await this.gmailPasswordField.fill(password);
      await this.nextButton.click();
    });
  }
  async loginWithFacebookAccount(page, username, password) {
    await test.step("Login with Facebook Account", async () => {
      await this.fbLogIn.click();
      await expect(this.fbUsernameField).toBeVisible();
      await this.fbUsernameField.fill(username);      
      await expect(this.fbPasswordField).toBeVisible();
      await this.fbPasswordField.fill(password);
      await this.fbLoginBtn.click();
    });
  }
  // async waitForTinLoginPageVisible(page) {
  //   await test.step("Wait till login page load completely", async () => {
  //     await this.page.waitForSelector(".logoMain.pointer", {
  //       setTimeout: 120000,
  //     });
  //   });
  // }


  async navigateToHomepage(page, webpageaddress) {
    await test.step("Navigate to webpage", async () => {
      await this.page.goto(webpageaddress, { setTimeout: 120000 });
    });
  }

  async waitForLoginPageVisible(page) {
    await test.step("Wait till login page load completely", async () => {
      await this.page.waitForSelector(".logoMain.pointer", {
        setTimeout: 120000,
      });
    });
  }

  // async enterUsername(page, username) {
  //   await test.step("Click on the username field", async () => {
  //     await this.usernameField.click();
  //   });
  // });
  //   async editUsername(page, username) {
  //     await test.step("Click on the username field", async () => {
  //       await this.usernameField.click();
  //     });

  //   await test.step("Enter Username", async () => {
  //     await this.usernameField.fill(username);
  //   });
  // }

  // async enterPassword(page, password) {
  //   await test.step("Click on the password field", async () => {
  //     await this.passwordField.click();
  //   });
  //   await test.step("Enter Password", async () => {
  //     await this.passwordField.fill(password);
  //   });
  // }

  // async clickOnLoginButton(page) {
  //   await test.step("Click on the login button", async () => {
  //     await this.loginButton.click();
  //   });
  // }

  // async validateLoginText(page) {
  //   await test.step("Verify login text", async () => {
  //     await expect(this.loginPageHeaderText).toContainText("Login");
  //   });
  // }

  // async validateEmailLabelText(page) {
  //   await test.step("Verify Email label text", async () => {
  //     await expect(this.emailLabelText).toContainText("Email");
  //   });
  // }

  // async validatePasswordLabelText(page) {
  //   await test.step("Verify Password Label text", async () => {
  //     await expect(this.passwordLabelText).toContainText("Password");
  //   });
  // }

  // async validateLoginButton(page) {
  //   await test.step("Validate login button text", async () => {
  //     await expect(this.loginButton).toContainText("Login");
  //   });
  // }

  // async validateText(page, defaultText) {
  //   let headerBelowImageText;
  //   let paragraphBelowImageText;
  //   let text;
  //   await test.step("Read the text below image", async () => {
  //     headerBelowImageText = await this.headderTextBelowImage.innerText();
  //   });
  //   await test.step("Read the text below image", async () => {
  //     paragraphBelowImageText = await this.paragaphTextBelowImage.innerText();
  //   });
  //   text = headerBelowImageText + paragraphBelowImageText;
  //   await test.step("Header text present in the UI", async () => {
  //     await expect(this.textBelowImage).toContainText(
  //       `${headerBelowImageText}`
  //     );
  //     await expect(this.textBelowImage).toContainText(
  //       `${paragraphBelowImageText}`
  //     );
  //     if ((text.length == defaultText.length)) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   });
  // }

  // async validatePrivacyPolicyText(page, privacyPolicyText) {
  //   await test.step("Validate privacy policy text", async () => {
  //     await expect(this.privacyPolicyTextWrapper).toContainText(`${privacyPolicyText}`);
  //   });
  // }

  // async validateGoogleLoginOption(page) {
  //   await test.step("Validate google login option", async () => {
  //     await expect(this.loginWithGoogleWrapper).toContainText('Login With Google');
  //   });
  // }

  // async validateSignUpOption(page, signUpText) {
  //   await test.step("Validate signup option", async () => {
  //     await expect(this.signUpWrapper).toContainText(`${signUpText}`);
  //   });
  // }

  // async validateForgotPasswordText(page){
  //   await test.step("Validate forgot password option", async () => {
  //     await expect(this.forgotPasswordText).toContainText("Forgot Password?");
  //   });
  // }
};
