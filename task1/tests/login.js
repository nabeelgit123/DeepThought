import { Selector, fixture, test } from "testcafe"; 
import loginPageObjects from "../pageObjects/loginPageObjects";

fixture`LoginPage-Tests`.page("./");

test('Valid Login', async t => {
    loginPageObjects.loginCredentials("nabeel","nabeel123")
    await t.expect(Selector("strong:nth-child(2)").exists).notOk()
    .takeScreenshot("Valid Login")
});
test('Invalid Login', async t => {
    loginPageObjects.loginCredentials("nabeelsk","nabeel")
    await t
    .expect(Selector("strong:nth-child(2)").exists).ok()
    .takeScreenshot("Invalid Login")
});
test('Verifying Invalid Login Message', async t => {
    loginPageObjects.loginCredentials("nabeelsk","nabeel")
    await t
    .expect(Selector("p:nth-child(3)").innerText).eql('Invalid login credentials')
    .takeScreenshot("Verifying Invalid Login Message")
});
test('Verifying Login to Dashboard Screen', async t => {
    loginPageObjects.loginCredentials("nabeel","nabeel123")
    await t
    .expect(Selector("h5.bold-font.mb-4").exists).ok()
    .takeScreenshot("Verifying Login to Dashboard Screen")
});