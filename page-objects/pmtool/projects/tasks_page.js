import { customElement } from "../../../cypress/e2e/helpers/custom_element";
import { CreateNewTaskModal } from "./create_task_modal";

export class TasksPage {
    constructor() {
        this.addTaskButton = customElement('[test_id="Add Task"]')
        this.modalTitle = customElement('.modal-title')
    }

   addButtonIsVisiable() {
    this.addTaskButton.isVisible()
    return this
   }

    clickAddButton() {
        this.addTaskButton.click()
        this.modalTitle.isVisible()
        return new CreateNewTaskModal()
    }
}