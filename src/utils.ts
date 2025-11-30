/**
 * Utility functions for To-Do List CLI application
 * Provides common functions for display, input handling, and terminal management
 */

/**
 * Display the main menu with options
 */
export function displayMenu(): void {
  console.log('\n' + '='.repeat(50));
  console.log('         🚀 MENIU PRINCIPAL - TO-DO LIST 🚀');
  console.log('='.repeat(50));
  console.log('\n1. ➕ Adaugă un task nou');
  console.log('2. 📋 Vizualizează toate taskurile');
  console.log('3. ❌ Șterge un task');
  console.log('4. 🚪 Ieșire din aplicație');
  console.log('\n' + '='.repeat(50) + '\n');
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
  console.log('\n' + '-'.repeat(50));
  console.log('          OPȚIUNI DE ȘTERGERE');
  console.log('-'.repeat(50));
  console.log('1. 🔢 Șterge după index (număr)');
  console.log('2. 🔤 Șterge după nume');
  console.log('3. ↩️  Înapoi la meniu principal');
  console.log('-'.repeat(50) + '\n');
}

/**
 * Display current tasks header
 */
export function displayTasksHeader(): void {
  console.log('\n' + '='.repeat(50));
  console.log('           📋 LISTA DE TASKURI CURENTE 📋');
  console.log('='.repeat(50) + '\n');
}

/**
 * Display tasks footer
 */
export function displayTasksFooter(count: number): void {
  if (count > 0) {
    console.log(`\n📊 Total: ${count} task(uri) în listă`);
    console.log('━'.repeat(50));
  } else {
    console.log('❌ Nu avezi taskuri! Adaugă unul nou pentru a începe.');
  }
  console.log('='.repeat(50) + '\n');
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
  return `  [${index.toString().padStart(2, ' ')}] ${status} ${taskName}`;
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
