import { customElement } from "../../../cypress/e2e/helpers/custom_element";
import { CreateNewTaskModal } from "./create_task_modal";

export class TasksPage {
    constructor() {
        this.addTaskButton = customElement('[test_id="Add Task"]')
    }

    clickAddButton() {
        this.addTaskButton.isVisible()
        this.addTaskButton.click()
        return new CreateNewTaskModal()

    }
}