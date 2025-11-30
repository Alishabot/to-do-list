/**
 * Task interface for type safety
 */
export interface Task {
  id: number;
  title: string;
  completed: boolean;
  createdAt: Date;
}

/**
 * TodoList class for managing tasks
 */
export class TodoList {
  private tasks: Task[] = [];
  private nextId: number = 1;

  /**
   * Add a new task to the list
   */
  public addTask(taskTitle: string): void {
    try {
      const trimmedTitle = taskTitle.trim();

      if (!trimmedTitle) {
        console.log('✗ EROARE: Task-ul nu poate fi gol!');
        return;
      }

      if (trimmedTitle.length > 100) {
        console.log('✗ EROARE: Task-ul este prea lung (max 100 caractere)!');
        return;
      }

      const newTask: Task = {
        id: this.nextId++,
        title: trimmedTitle,
        completed: false,
        createdAt: new Date()
      };

      this.tasks.push(newTask);
      console.log(`✓ Task adăugat cu succes: '${trimmedTitle}'`);
      console.log(`  Total taskuri: ${this.tasks.length}`);
    } catch (error) {
      console.log(`✗ EROARE la adăugarea taskului: ${error}`);
    }
  }

  /**
   * Display all tasks with formatted output
   */
  public viewTasks(): void {
    console.log('\n' + '='.repeat(50));
    console.log('           📋 LISTA DE TASKURI CURENTE 📋');
    console.log('='.repeat(50) + '\n');

    if (this.tasks.length === 0) {
      console.log('❌ Nu avezi taskuri! Adaugă unul nou pentru a începe.\n');
    } else {
      // Loop with index for numbered display
      for (let i = 0; i < this.tasks.length; i++) {
        const task = this.tasks[i];
        const displayIndex = i + 1;
        const status = task.completed ? '✓' : ' ';
        console.log(`  [${displayIndex.toString().padStart(2, ' ')}] ${status} ${task.title}`);
      }
      console.log(`\n📊 Total: ${this.tasks.length} task(uri) în listă`);
      console.log('━'.repeat(50));
    }

    console.log('='.repeat(50) + '\n');
  }

  /**
   * Delete task by index
   */
  public deleteTaskByIndex(indexStr: string): void {
    try {
      const trimmedInput = indexStr.trim();

      if (!trimmedInput) {
        console.log('✗ EROARE: Introdu un index valid!');
        return;
      }

      const index = parseInt(trimmedInput, 10) - 1;

      if (isNaN(index)) {
        console.log('✗ EROARE: Index invalid! Introdu un număr întreg.');
        return;
      }

      if (index < 0 || index >= this.tasks.length) {
        console.log('✗ EROARE: Index invalid!');
        console.log(`  Introdu o valoare între 1 și ${this.tasks.length}`);
        return;
      }

      const deletedTask = this.tasks.splice(index, 1)[0];
      console.log(`✓ Task șters cu succes: '${deletedTask.title}'`);
      console.log(`  Taskuri rămase: ${this.tasks.length}`);
    } catch (error) {
      console.log(`✗ EROARE neașteptată: ${error}`);
    }
  }

  /**
   * Delete task by name
   */
  public deleteTaskByName(name: string): void {
    try {
      const searchName = name.trim().toLowerCase();

      if (!searchName) {
        console.log('✗ EROARE: Introdu un nume valid!');
        return;
      }

      const initialLength = this.tasks.length;
      this.tasks = this.tasks.filter(task => task.title.toLowerCase() !== searchName);

      if (this.tasks.length < initialLength) {
        console.log(`✓ Task șters cu succes: '${searchName}'`);
        console.log(`  Taskuri rămase: ${this.tasks.length}`);
      } else {
        console.log(`✗ EROARE: Task cu numele '${searchName}' nu a fost găsit!`);
      }
    } catch (error) {
      console.log(`✗ EROARE la ștergere: ${error}`);
    }
  }

  /**
   * Check if task list is empty
   */
  public isEmpty(): boolean {
    return this.tasks.length === 0;
  }

  /**
   * Get the count of tasks
   */
  public getTaskCount(): number {
    return this.tasks.length;
  }

  /**
   * Get all tasks
   */
  public getTasks(): Task[] {
    return [...this.tasks];
  }

  /**
   * Clear all tasks
   */
  public clearAllTasks(): void {
    this.tasks = [];
    console.log('✓ Toate taskurile au fost șterse!');
  }

  /**
   * Toggle task completion status
   */
  public toggleTaskCompletion(index: number): void {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks[index].completed = !this.tasks[index].completed;
      const status = this.tasks[index].completed ? 'completat' : 'incomplet';
      console.log(`✓ Task marcat ca ${status}: '${this.tasks[index].title}'`);
    } else {
      console.log('✗ EROARE: Index invalid!');
    }
  }
}
