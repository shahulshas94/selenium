"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class HSOLoginPage {
    // using method
    setUserName(userName) {
        expect(HSOLoginPage.userName_fld.isDisplayed()).toBeTruthy();
        HSOLoginPage.userName_fld.sendKeys(userName);
    }
    setPassword(password) {
        expect(HSOLoginPage.password_fld.isDisplayed()).toBeTruthy();
        HSOLoginPage.password_fld.sendKeys(password);
    }
    clickOnSigninButton() {
        expect(HSOLoginPage.logIn_btn.isDisplayed()).toBeTruthy();
        HSOLoginPage.logIn_btn.click();
    }
    validateErrorMsg(errorMsg) {
        HSOLoginPage.errorMsgTxt.getText().then(function (titleFromHomePage) {
            expect(titleFromHomePage.trim()).toContain(errorMsg.trim());
            console.log(titleFromHomePage);
        });
    }
}
// using variables
HSOLoginPage.userName_fld = protractor_1.element(protractor_1.by.id("username"));
HSOLoginPage.password_fld = protractor_1.element(protractor_1.by.id("password"));
HSOLoginPage.logIn_btn = protractor_1.element(protractor_1.by.css("button[type='submit']"));
HSOLoginPage.errorMsgTxt = protractor_1.element(protractor_1.by.css(".alert.alert-danger.ng-star-inserted"));
exports.HSOLoginPage = HSOLoginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5QYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZXMvbG9naW5QYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQWtEO0FBQ2xELE1BQWEsWUFBWTtJQU9yQixlQUFlO0lBQ2YsV0FBVyxDQUFDLFFBQWdCO1FBQ3hCLE1BQU0sQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDN0QsWUFBWSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNELFdBQVcsQ0FBQyxRQUFnQjtRQUN4QixNQUFNLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzdELFlBQVksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFDRCxtQkFBbUI7UUFDZixNQUFNLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzFELFlBQVksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVELGdCQUFnQixDQUFDLFFBQWdCO1FBRTdCLFlBQVksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsaUJBQWlCO1lBQzlELE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUM1RCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUE7SUFDVixDQUFDOztBQTFCRyxrQkFBa0I7QUFDSix5QkFBWSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO0FBQ3pDLHlCQUFZLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUE7QUFDekMsc0JBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFBO0FBQ3BELHdCQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHNDQUFzQyxDQUFDLENBQUMsQ0FBQTtBQUx2RixvQ0E0QkMifQ==