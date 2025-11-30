/**
 * Utility functions for To-Do List CLI application
 * Provides common functions for display, input handling, and terminal management
 */

/**
 * Display the main menu with options
 */
export function displayMenu(): void {
  console.log('=== To-Do List Menu ===');
  console.log('1. Add task');
  console.log('2. View tasks');
  console.log('3. Delete task');
  console.log('4. Exit');
  console.log('========================');
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
  console.log('\n--- Delete Options ---');
  console.log('1. Delete by index');
  console.log('2. Delete by name');
  console.log('3. Back to menu');
  console.log('---------------------\n');
}

/**
 * Display current tasks header
 */
export function displayTasksHeader(): void {
  console.log('\n=== Your Tasks ===');
}

/**
 * Display tasks footer
 */
export function displayTasksFooter(count: number): void {
  console.log('==================\n');
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
