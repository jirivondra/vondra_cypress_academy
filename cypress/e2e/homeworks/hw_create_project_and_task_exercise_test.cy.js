import moment from 'moment';
import { faker } from '@faker-js/faker'
import { LoginPage } from "../../../page-objects/pmtool/login_page";
import { ProjectsPage } from "../../../page-objects/pmtool/project_page";;


const testData = {
    project: {
        priority: 'High',
        status: 'Open',
        name: `${faker.person.lastName('cs_CZ')}_self-exercise_${faker.number.int({ min: 1000, max: 9999 })}`,
        startData: moment().format('YYYY-MM-DD'),
    },
    task: {
        type: "Change",
        name: `${faker.person.lastName('cs_CZ')}_TASK_${faker.number.int({ min: 1000, max: 9999 })}`,
        status: "Open",
        assignedTo: 'Petr Fifka',
        createdBy: 'Cypress Zima 2024',
        startDate: moment().format('DD/MM/YYYY')
    }
}



describe('', () => {

    beforeEach(() => {
        new LoginPage().openPmtool().login(Cypress.env('pmtool_username'), Cypress.env('pmtool_password'))
    });
    it('', () => {
        new ProjectsPage().clickProjectLink().clickAddProject()
        .selectPriority(testData.project.priority)
        .checkPriority(testData.project.priority)
        .selectStatus(testData.project.status)
        .checkStatus(testData.project.status)
        .typeName(testData.project.name)
        .checkName(testData.project.name)
        .selectDate(testData.project.startData)
        .checkDate(testData.project.startData)
        .seveButtonIsVisiable()
        .clickSave()
        .addButtonIsVisiable()
        .clickAddButton()
        .selectType(testData.task.type)
        .checkType(testData.task.type)
        .fillName(testData.task.name)
        .checkName(testData.task.name)
        .selectStatus(testData.task.status)
        .checkStatus(testData.task.status)
        .checkAssigned(testData.task.assignedTo)
        .controlCheckAssigned(testData.task.assignedTo)
        .saveButtonExist()
        .clickSaveButton()
        .projectNameIsVisiable()
        .clickToDetailProject()
        .checkProjectName(testData.project.name)
        .checkProjectStatus(testData.project.status)
        .checkStartDate(testData.task.startDate)
        .checkDateAdd(testData.task.startDate)
        .checkCreatedBy(testData.task.createdBy)
        .clickLogout()
    });
});
