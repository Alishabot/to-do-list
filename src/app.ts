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
    console.log('\n' + '-'.repeat(50));
    console.log('          ADAUGĂ UN TASK NOU');
    console.log('-'.repeat(50) + '\n');

    try {
      const task = readlineSync.question('Introdu taskul nou (max 100 caractere): ');
      
      if (!task.trim()) {
        displayError('Task-ul nu poate fi gol!');
      } else {
        this.todoList.addTask(task);
      }
    } catch (error) {
      displayError('Eroare la introducerea taskului');
    }

    console.log('-'.repeat(50));
    readlineSync.question('\nApasă Enter pentru a continua...');
  }

  /**
   * View all tasks - Display using forEach with index
   */
  private viewAllTasks(): void {
    clearScreen();
    displayTasksHeader();

    const tasks = this.todoList.getTasks();
    
    if (tasks.length === 0) {
      console.log('❌ Nu avezi taskuri! Adaugă unul nou pentru a începe.\n');
    } else {
      // forEach with index to display numbered tasks
      tasks.forEach((task, index) => {
        const displayIndex = index + 1;
        const formattedTask = formatTask(displayIndex, task.title, task.completed);
        console.log(formattedTask);
      });
    }

    displayTasksFooter(tasks.length);
    readlineSync.question('Apasă Enter pentru a continua...');
  }

  /**
   * Delete task menu - Show options and handle deletion
   */
  private deleteTaskMenu(): void {
    if (this.todoList.isEmpty()) {
      displayError('Nu avezi taskuri de șters!');
      readlineSync.question('\nApasă Enter pentru a continua...');
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

      const choice = readlineSync.question('Alege o opțiune (1-3): ').trim();

      switch (choice) {
        case '1':
          const indexInput = readlineSync.question('\nIntrodu indexul taskului de șters: ');
          this.todoList.deleteTaskByIndex(indexInput);
          break;
        case '2':
          const nameInput = readlineSync.question('\nIntrodu numele taskului de șters: ');
          this.todoList.deleteTaskByName(nameInput);
          break;
        case '3':
          return;
        default:
          displayError('Opțiune invalidă! Alege din nou.');
      }

      readlineSync.question('\nApasă Enter pentru a continua...');
    }
  }

  /**
   * Confirm exit before closing application
   */
  private confirmExit(): void {
    console.log('\n' + '='.repeat(50));
    console.log('Sigur dorești să ieșești din aplicație?');
    console.log(`Ai ${this.todoList.getTaskCount()} task(uri) în listă.`);
    console.log('='.repeat(50));

    const choice = readlineSync
      .question("\nTastează 'da' pentru a confirma ieșirea: ")
      .trim()
      .toLowerCase();

    if (choice === 'da' || choice === 'yes' || choice === 'y') {
      console.log('\n✓ Mulțumesc că ai folosit To-Do List! 👋');
      console.log('  Toate taskurile tale au fost salvate.\n');
      this.running = false;
    } else {
      console.log('✓ Ieșirea a fost anulată. Te întorci la meniu...\n');
      readlineSync.question('Apasă Enter pentru a continua...');
    }
  }

  /**
   * Main application loop - Keep running until user exits
   */
  public run(): void {
    console.log('\n🎉 Bun venit la aplicația To-Do List!\n');
    readlineSync.question('Apasă Enter pentru a începe...');

    while (this.running) {
      try {
        clearScreen();
        displayMenu();
        const choice = readlineSync.question('Alege o opțiune (1-4): ').trim();

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
            console.log('\n✗ EROARE: Opțiune invalidă!');
            console.log('  Alege o opțiune între 1 și 4.\n');
            readlineSync.question('Apasă Enter pentru a continua...');
        }
      } catch (error) {
        displayError('Eroare neașteptată');
        readlineSync.question('Apasă Enter pentru a încerca din nou...');
      }
    }
  }
}
