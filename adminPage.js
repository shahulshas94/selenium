"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class HSOAdminPage {
    // using method
    // using method
    clickOnCreateAssessment() {
        expect(HSOAdminPage.createAssessment_Add.isDisplayed()).toBeTruthy();
        HSOAdminPage.createAssessment_Add.click();
    }
    setName(name) {
        expect(HSOAdminPage.nameAdd_fld.isDisplayed()).toBeTruthy();
        HSOAdminPage.nameAdd_fld.sendKeys(name);
    }
    setDescription(description) {
        expect(HSOAdminPage.description_fld.isDisplayed()).toBeTruthy();
        HSOAdminPage.description_fld.click();
        HSOAdminPage.description_fld.sendKeys(description);
    }
    clickOnSave() {
        expect(HSOAdminPage.Save_but.isDisplayed()).toBeTruthy();
        protractor_1.browser.sleep(3000);
        protractor_1.browser.manage().timeouts().implicitlyWait(5000);
        HSOAdminPage.Save_but.click();
    }
    setFilter(filter) {
        expect(HSOAdminPage.filter_fld.isDisplayed()).toBeTruthy();
        protractor_1.browser.manage().timeouts().implicitlyWait(5000);
        HSOAdminPage.filter_fld.sendKeys(filter);
    }
    clickOnEditCriteria() {
        expect(HSOAdminPage.EditCriteria_Click.isDisplayed()).toBeTruthy();
        protractor_1.browser.sleep(3000);
        protractor_1.browser.manage().timeouts().implicitlyWait(5000);
        HSOAdminPage.EditCriteria_Click.click();
    }
}
// using variables
HSOAdminPage.createAssessment_Add = protractor_1.element(protractor_1.by.css("mat-icon[aria-label='Add']"));
HSOAdminPage.nameAdd_fld = protractor_1.element(protractor_1.by.css("input[name='name']"));
HSOAdminPage.description_fld = protractor_1.element(protractor_1.by.css("textarea[placeholder='Description']"));
HSOAdminPage.Save_but = protractor_1.element(protractor_1.by.xpath("//span[text()='Save']"));
HSOAdminPage.filter_fld = protractor_1.element(protractor_1.by.css("input[placeholder='Filter']"));
HSOAdminPage.EditCriteria_Click = protractor_1.element(protractor_1.by.xpath("//span[text()='Edit Criteria']"));
exports.HSOAdminPage = HSOAdminPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW5QYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZXMvYWRtaW5QYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQWtEO0FBQ2xELE1BQWEsWUFBWTtJQVNyQixlQUFlO0lBQ2QsZUFBZTtJQUNmLHVCQUF1QjtRQUNwQixNQUFNLENBQUMsWUFBWSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDckUsWUFBWSxDQUFDLG9CQUFvQixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzlDLENBQUM7SUFDRCxPQUFPLENBQUMsSUFBWTtRQUNoQixNQUFNLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzVELFlBQVksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDRCxjQUFjLENBQUMsV0FBbUI7UUFDOUIsTUFBTSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNoRSxZQUFZLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JDLFlBQVksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFDRCxXQUFXO1FBQ1AsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN6RCxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRCxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFDRCxTQUFTLENBQUMsTUFBYztRQUNwQixNQUFNLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzNELG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELFlBQVksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDRCxtQkFBbUI7UUFDZixNQUFNLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbkUsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsWUFBWSxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzVDLENBQUM7O0FBdkNELGtCQUFrQjtBQUNKLGlDQUFvQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUE7QUFDcEUsd0JBQVcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFBO0FBQ25ELDRCQUFlLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxDQUFDLENBQUMsQ0FBQTtBQUN4RSxxQkFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUE7QUFDckQsdUJBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFBO0FBQzNELCtCQUFrQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUE7QUFQMUYsb0NBeUNDIn0=