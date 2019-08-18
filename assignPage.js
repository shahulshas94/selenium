"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class HSOAssignPage {
    // using method
    // using method
    clickOnUnfoldtask(centre) {
        var UnfoldTask_Click = protractor_1.element(protractor_1.by.xpath("//p[contains(text(),'" + centre + "')]//preceding-sibling::button"));
        expect(UnfoldTask_Click.isDisplayed()).toBeTruthy();
        protractor_1.browser.sleep(3000);
        protractor_1.browser.manage().timeouts().implicitlyWait(5000);
        UnfoldTask_Click.click();
        UnfoldTask_Click.click();
        UnfoldTask_Click.click();
    }
    clickOnExpand(serviceExpand) {
        var Service_Click = protractor_1.element(protractor_1.by.xpath("//span[text()=' " + serviceExpand + " ']/../..//preceding-sibling::button"));
        expect(Service_Click.isDisplayed()).toBeTruthy();
        protractor_1.browser.sleep(3000);
        protractor_1.browser.manage().timeouts().implicitlyWait(5000);
        Service_Click.click();
    }
    clickOnQuestionCheckBox(serviceSExpand) {
        var Service_Clickk = protractor_1.element(protractor_1.by.xpath("//span[text()=' " + serviceSExpand + " ']/.."));
        expect(Service_Clickk.isDisplayed()).toBeTruthy();
        protractor_1.browser.sleep(3000);
        protractor_1.browser.manage().timeouts().implicitlyWait(5000);
        Service_Clickk.click();
    }
    clickOnAssign() {
        expect(HSOAssignPage.assign_btn.isDisplayed()).toBeTruthy();
        HSOAssignPage.assign_btn.click();
    }
    setFilter(filter) {
        expect(HSOAssignPage.filter_fld.isDisplayed()).toBeTruthy();
        HSOAssignPage.filter_fld.sendKeys(filter);
    }
    clickOnFilterCheckBox() {
        expect(HSOAssignPage.checkBox_filter.isDisplayed()).toBeTruthy();
        protractor_1.browser.sleep(5000);
        protractor_1.browser.manage().timeouts().implicitlyWait(5000);
        HSOAssignPage.checkBox_filter.click();
    }
    clickOnAssignafterFilter() {
        expect(HSOAssignPage.assignafterFilter_btn.isDisplayed()).toBeTruthy();
        HSOAssignPage.assignafterFilter_btn.click();
    }
}
// using variables
HSOAssignPage.assign_btn = protractor_1.element(protractor_1.by.xpath("//button[@class='mat-raised-button mat-primary']//span[text()='Assign']"));
HSOAssignPage.filter_fld = protractor_1.element(protractor_1.by.css("input[placeholder='Filter']"));
HSOAssignPage.checkBox_filter = protractor_1.element(protractor_1.by.css(".cdk-overlay-pane div[class='mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin']"));
HSOAssignPage.assignafterFilter_btn = protractor_1.element(protractor_1.by.xpath("//div[@class='cdk-overlay-pane']//span[contains(text(),'Assign')]"));
exports.HSOAssignPage = HSOAssignPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzaWduUGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VzL2Fzc2lnblBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBa0Q7QUFDbEQsTUFBYSxhQUFhO0lBUXRCLGVBQWU7SUFDZixlQUFlO0lBRWYsaUJBQWlCLENBQUMsTUFBYztRQUM1QixJQUFJLGdCQUFnQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsR0FBRyxNQUFNLEdBQUcsZ0NBQWdDLENBQUMsQ0FBQyxDQUFBO1FBQzdHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3BELG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBR2pELGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3pCLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3pCLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO0lBRTdCLENBQUM7SUFDRCxhQUFhLENBQUMsYUFBcUI7UUFDL0IsSUFBSSxhQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGtCQUFrQixHQUFHLGFBQWEsR0FBRyxzQ0FBc0MsQ0FBQyxDQUFDLENBQUE7UUFDbEgsTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2pELG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUUxQixDQUFDO0lBQ0QsdUJBQXVCLENBQUMsY0FBc0I7UUFDMUMsSUFBSSxjQUFjLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGtCQUFrQixHQUFHLGNBQWMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFBO1FBQ3RGLE1BQU0sQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsRCxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRCxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUNELGFBQWE7UUFDVCxNQUFNLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzVELGFBQWEsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUNELFNBQVMsQ0FBQyxNQUFjO1FBQ3BCLE1BQU0sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDNUQsYUFBYSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUNELHFCQUFxQjtRQUNqQixNQUFNLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2pFLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELGFBQWEsQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUNELHdCQUF3QjtRQUNwQixNQUFNLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDdkUsYUFBYSxDQUFDLHFCQUFxQixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hELENBQUM7O0FBdERELGtCQUFrQjtBQUVKLHdCQUFVLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHlFQUF5RSxDQUFDLENBQUMsQ0FBQTtBQUN6Ryx3QkFBVSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUE7QUFDM0QsNkJBQWUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMseUdBQXlHLENBQUMsQ0FBQyxDQUFBO0FBQzVJLG1DQUFxQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxtRUFBbUUsQ0FBQyxDQUFDLENBQUE7QUFOaEksc0NBd0RDIn0=