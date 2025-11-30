/**
 * Utility functions for To-Do List CLI application
 * Provides common functions for display, input handling, and terminal management
 */

/**
 * Display the main menu with options
 */
export function displayMenu(): void {
  console.log('\n' + '='.repeat(26));
  console.log('   TO-DO LIST MENU');
  console.log('1. Add task');
  console.log('2. View tasks');
  console.log('3. Delete task');
  console.log('4. Exit');
  console.log('='.repeat(26));
}

/**
 * Clear the terminal screen
 */
export function clearScreen(): void {
  console.clear();
}

/**
 * Normalize user input by trimming whitespace
 * 
 * @param input - The input to normalize
 * @returns Normalized input string
 */
export function normalizeInput(input: string): string {
  return input.trim();
}

/**
 * Display task viewing menu
 */
export function displayTaskMenu(): void {
  console.log('\n' + '-'.repeat(26));
  console.log('    DELETE OPTIONS');
  console.log('1. Delete by index');
  console.log('2. Delete by name');
  console.log('3. Back to menu');
  console.log('-'.repeat(26) + '\n');
}

/**
 * Display current tasks header
 */
export function displayTasksHeader(): void {
  console.log('\n' + '='.repeat(26));
  console.log('     YOUR TASKS');
  console.log('='.repeat(26) + '\n');
}

/**
 * Display tasks footer
 */
export function displayTasksFooter(count: number): void {
  if (count > 0) {
    console.log(`\nTotal: ${count} task(s)`);
    console.log('='.repeat(26));
  } else {
    console.log('No tasks yet. Add one to get started!');
    console.log('='.repeat(26));
  }
  console.log('');
}

/**
 * Format a task for display with index
 * 
 * @param index - Task index (1-based)
 * @param taskName - Task name
 * @param completed - Whether task is completed
 * @returns Formatted task string
 */
export function formatTask(index: number, taskName: string, completed: boolean = false): string {
  const status = completed ? '✓' : ' ';
  return `${index}. ${taskName}`;
}

/**
 * Display success message
 * 
 * @param message - Success message
 */
export function displaySuccess(message: string): void {
  console.log(`✓ ${message}`);
}

/**
 * Display error message
 * 
 * @param message - Error message
 */
export function displayError(message: string): void {
  console.log(`✗ ${message}`);
}

/**
 * Display info message
 * 
 * @param message - Info message
 */
export function displayInfo(message: string): void {
  console.log(`ℹ ${message}`);
}
