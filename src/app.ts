import * as readlineSync from 'readline-sync';
import { TodoList } from './todoList';
import {
  displayMenu,
  clearScreen,
  displayTaskMenu,
  displayTasksHeader,
  displayTasksFooter,
  displaySuccess,
  displayError,
  formatTask
} from './utils';

/**
 * Todo App - Main application class
 * Handles user interaction and menu navigation
 */
export class TodoApp {
  private todoList: TodoList;
  private running: boolean = true;

  constructor() {
    this.todoList = new TodoList();
  }

  /**
   * Add a new task through user input
   */
  private addNewTask(): void {
    clearScreen();
    console.log('\n' + '-'.repeat(26));
    console.log('    ADD A TASK');
    console.log('-'.repeat(26) + '\n');

    try {
      const task = readlineSync.question('Enter your task (max 100 chars): ');
      
      if (!task.trim()) {
        displayError('Task cannot be empty!');
      } else {
        this.todoList.addTask(task);
        displaySuccess('Task added!');
      }
    } catch (error) {
      displayError('Error adding task');
    }

    console.log('\n' + '-'.repeat(26));
    readlineSync.question('Press Enter to continue...');
  }

  /**
   * View all tasks - Display using forEach with index
   */
  private viewAllTasks(): void {
    clearScreen();
    displayTasksHeader();

    const tasks = this.todoList.getTasks();
    
    if (tasks.length === 0) {
      console.log('No tasks yet. Add one to get started!\n');
    } else {
      // forEach with index to display numbered tasks
      tasks.forEach((task, index) => {
        const displayIndex = index + 1;
        const formattedTask = formatTask(displayIndex, task.title, task.completed);
        console.log(formattedTask);
      });
    }

    displayTasksFooter(tasks.length);
    readlineSync.question('Press Enter to continue...');
  }

  /**
   * Delete task menu - Show options and handle deletion
   */
  private deleteTaskMenu(): void {
    if (this.todoList.isEmpty()) {
      displayError('No tasks to delete!');
      readlineSync.question('\nPress Enter to continue...');
      return;
    }

    while (true) {
      clearScreen();
      displayTasksHeader();

      const tasks = this.todoList.getTasks();
      tasks.forEach((task, index) => {
        const displayIndex = index + 1;
        const formattedTask = formatTask(displayIndex, task.title, task.completed);
        console.log(formattedTask);
      });

      displayTasksFooter(tasks.length);
      displayTaskMenu();

      const choice = readlineSync.question('Enter your choice (1-3): ').trim();

      switch (choice) {
        case '1':
          const indexInput = readlineSync.question('\nEnter task number to delete: ');
          this.todoList.deleteTaskByIndex(indexInput);
          break;
        case '2':
          const nameInput = readlineSync.question('\nEnter task name to delete: ');
          this.todoList.deleteTaskByName(nameInput);
          break;
        case '3':
          return;
        default:
          displayError('Invalid option! Try again.');
      }

      readlineSync.question('\nPress Enter to continue...');
    }
  }

  /**
   * Confirm exit before closing application
   */
  private confirmExit(): void {
    console.log('\n' + '='.repeat(26));
    console.log('Confirm exit? (yes/no): ');
    console.log('='.repeat(26));

    const choice = readlineSync
      .question("Type 'yes' to confirm exit: ")
      .trim()
      .toLowerCase();

    if (choice === 'yes' || choice === 'y') {
      console.log('\nThank you for using the To-Do List CLI. Goodbye!\n');
      this.running = false;
    } else {
      console.log('\nExit cancelled. Back to menu...\n');
      readlineSync.question('Press Enter to continue...');
    }
  }

  /**
   * Main application loop - Keep running until user exits
   */
  public run(): void {
    console.log('\nWelcome to To-Do List!\n');
    readlineSync.question('Press Enter to start...');

    while (this.running) {
      try {
        clearScreen();
        displayMenu();
        const choice = readlineSync.question('Enter your choice (1-4): ').trim();

        switch (choice) {
          case '1':
            this.addNewTask();
            break;
          case '2':
            this.viewAllTasks();
            break;
          case '3':
            this.deleteTaskMenu();
            break;
          case '4':
            this.confirmExit();
            break;
          default:
            console.log('\nInvalid option! Choose 1-4.\n');
            readlineSync.question('Press Enter to continue...');
        }
      } catch (error) {
        displayError('Unexpected error');
        readlineSync.question('Press Enter to try again...');
      }
    }
  }
}
