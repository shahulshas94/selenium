"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class HSOHomePage {
    // using method
    clickOnTAB(tabName) {
        HSOHomePage.myTabs.each(function (element) {
            element.getText().then(function (text) {
                if (text.trim() == tabName.trim()) {
                    expect(element.isDisplayed()).toBeTruthy();
                    element.click();
                }
            });
        });
        expect(protractor_1.element(protractor_1.by.xpath('//a[contains(text(),"' + tabName + '") and @aria-current="true"]')).isDisplayed()).toBeTruthy();
    }
    getTitleofHomePageAndValidate(title) {
        HSOHomePage.logoText.getText().then(function (titleFromHomePage) {
            expect(titleFromHomePage.trim()).toBe(title);
            console.log(titleFromHomePage);
        });
    }
}
// using variables
HSOHomePage.myTabs = protractor_1.element.all(protractor_1.by.css(".mat-tab-link"));
HSOHomePage.logoText = protractor_1.element(protractor_1.by.css(".logo+span"));
exports.HSOHomePage = HSOHomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlcy9ob21lUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFrRDtBQUNsRCxNQUFhLFdBQVc7SUFLcEIsZUFBZTtJQUNmLFVBQVUsQ0FBQyxPQUFlO1FBQ3RCLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsT0FBTztZQUNyQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSTtnQkFDakMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFO29CQUMvQixNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQzNDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDbkI7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsR0FBRyxPQUFPLEdBQUcsOEJBQThCLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDN0gsQ0FBQztJQUNELDZCQUE2QixDQUFDLEtBQWE7UUFFdkMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxpQkFBaUI7WUFDM0QsTUFBTSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQTtJQUdOLENBQUM7O0FBeEJELGtCQUFrQjtBQUNKLGtCQUFNLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFBO0FBQzdDLG9CQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUE7QUFIMUQsa0NBMkJDIn0=