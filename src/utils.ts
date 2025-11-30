/**
 * Utility functions for To-Do List CLI application
 * Provides common functions for display, input handling, and terminal management
 */

// ANSI Color codes for terminal styling
const Colors = {
  RESET: '\x1b[0m',
  BRIGHT: '\x1b[1m',
  DIM: '\x1b[2m',
  // Text colors
  WHITE: '\x1b[37m',
  GRAY: '\x1b[90m',
  CYAN: '\x1b[36m',
  GREEN: '\x1b[32m',
  RED: '\x1b[31m',
  YELLOW: '\x1b[33m',
  BLUE: '\x1b[34m',
  // Background colors (dark mode)
  BG_DARK: '\x1b[40m',
  BG_DARK_GRAY: '\x1b[100m',
};

// Dark mode state
let darkModeEnabled = true;

/**
 * Toggle dark mode on/off
 */
export function toggleDarkMode(): void {
  darkModeEnabled = !darkModeEnabled;
}

/**
 * Check if dark mode is enabled
 */
export function isDarkModeEnabled(): boolean {
  return darkModeEnabled;
}

/**
 * Apply dark mode styling to text
 */
function applyStyle(text: string, color: string, bright: boolean = false): string {
  if (!darkModeEnabled) return text;
  const brightCode = bright ? Colors.BRIGHT : '';
  return `${brightCode}${color}${text}${Colors.RESET}`;
}

/**
 * Display the main menu with options
 */
export function displayMenu(): void {
  const border = applyStyle('='.repeat(50), Colors.CYAN, true);
  const title = applyStyle('🚀 MENIU PRINCIPAL - TO-DO LIST 🚀', Colors.BLUE, true);
  const option1 = applyStyle('1. ➕ Adaugă un task nou', Colors.GREEN);
  const option2 = applyStyle('2. 📋 Vizualizează toate taskurile', Colors.CYAN);
  const option3 = applyStyle('3. ❌ Șterge un task', Colors.YELLOW);
  const option4 = applyStyle('4. 🚪 Ieșire din aplicație', Colors.RED);
  
  console.log('\n' + border);
  console.log('         ' + title);
  console.log(border);
  console.log('\n' + option1);
  console.log(option2);
  console.log(option3);
  console.log(option4);
  console.log('\n' + border + '\n');
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
  const border = applyStyle('-'.repeat(50), Colors.CYAN);
  const title = applyStyle('OPȚIUNI DE ȘTERGERE', Colors.YELLOW, true);
  const option1 = applyStyle('1. 🔢 Șterge după index (număr)', Colors.GREEN);
  const option2 = applyStyle('2. 🔤 Șterge după nume', Colors.GREEN);
  const option3 = applyStyle('3. ↩️  Înapoi la meniu principal', Colors.BLUE);
  
  console.log('\n' + border);
  console.log('          ' + title);
  console.log(border);
  console.log(option1);
  console.log(option2);
  console.log(option3);
  console.log(border + '\n');
}

/**
 * Display current tasks header
 */
export function displayTasksHeader(): void {
  const border = applyStyle('='.repeat(50), Colors.CYAN, true);
  const title = applyStyle('📋 LISTA DE TASKURI CURENTE 📋', Colors.BLUE, true);
  
  console.log('\n' + border);
  console.log('           ' + title);
  console.log(border + '\n');
}

/**
 * Display tasks footer
 */
export function displayTasksFooter(count: number): void {
  const border = applyStyle('='.repeat(50), Colors.CYAN, true);
  const separator = applyStyle('━'.repeat(50), Colors.GRAY);
  
  if (count > 0) {
    const totalMsg = applyStyle(`📊 Total: ${count} task(uri) în listă`, Colors.GREEN);
    console.log('\n' + totalMsg);
    console.log(separator);
  } else {
    const emptyMsg = applyStyle('❌ Nu avezi taskuri! Adaugă unul nou pentru a începe.', Colors.YELLOW);
    console.log(emptyMsg);
  }
  console.log(border + '\n');
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
  const statusColor = completed ? Colors.GREEN : Colors.GRAY;
  const taskColor = completed ? Colors.GRAY : Colors.WHITE;
  
  const indexPart = applyStyle(`[${index.toString().padStart(2, ' ')}]`, Colors.CYAN);
  const statusPart = applyStyle(status, statusColor, true);
  const taskPart = applyStyle(taskName, taskColor);
  
  return `  ${indexPart} ${statusPart} ${taskPart}`;
}

/**
 * Display success message
 * 
 * @param message - Success message
 */
export function displaySuccess(message: string): void {
  const msg = applyStyle(`✓ ${message}`, Colors.GREEN, true);
  console.log(msg);
}

/**
 * Display error message
 * 
 * @param message - Error message
 */
export function displayError(message: string): void {
  const msg = applyStyle(`✗ ${message}`, Colors.RED, true);
  console.log(msg);
}

/**
 * Display info message
 * 
 * @param message - Info message
 */
export function displayInfo(message: string): void {
  const msg = applyStyle(`ℹ ${message}`, Colors.BLUE);
  console.log(msg);
}
