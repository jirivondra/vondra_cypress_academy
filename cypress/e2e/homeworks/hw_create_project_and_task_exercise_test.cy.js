import moment from 'moment';
import { faker } from '@faker-js/faker'
import { CreateNewProjectModal } from "../../../page-objects/pmtool/create_new_project_modal";
import { LoginPage } from "../../../page-objects/pmtool/login_page";
import { ProjectsPage } from "../../../page-objects/pmtool/project_page";
import { TasksPage } from '../../../page-objects/pmtool/projects/tasks_page';
import { CreateNewTaskModal } from '../../../page-objects/pmtool/projects/create_task_modal';
import { ProjectsTasksPage } from '../../../page-objects/pmtool/projects/project_info_page';


const testData = {
    project: {
        priority: 'High',
        status: 'Open',
        name: `Vondra_self-exercise_${faker.number.int({ min: 1000, max: 9999 })}`,
        startData: moment().format('YYYY-MM-DD'),
    },
    task: {
        type: "Change",
        name: `Vondra_TASK_${faker.number.int({ min: 1000, max: 9999 })}`,
        status: "Open",
        assignedTo: "Petr Fifka",
        createdBy: 'Cypress Zima 2024',
        dateAdd: moment().format('DD/MM/YYYY')
    }
}

describe('', () => {
    const loginPage = new LoginPage()
    const createNewProjectModal = new CreateNewProjectModal()
    const projectsPage = new ProjectsPage()
    const tasksPage = new TasksPage()
    const createNewTaskModal = new CreateNewTaskModal()
    const projectsTasksPage = new ProjectsTasksPage()

    beforeEach(() => {
        loginPage.openPmtool().login(Cypress.env('pmtool_username'), Cypress.env('pmtool_password'))
    });
    it('', () => {
        projectsPage.clickProjectLink().clickAddProject()
        createNewProjectModal.fillProjectForm(testData)
        tasksPage.clickAddButton()
        createNewTaskModal.fillFormTask(testData)
        projectsTasksPage.checkTaskInfo(testData)
        loginPage.clickLogout()
    });
});