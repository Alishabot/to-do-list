# To-Do List CLI Application

A powerful and interactive Command-Line Interface To-Do List application built with **TypeScript** and **Node.js**.

## Features

✅ **Add Tasks** - Easily add new tasks with validation
✅ **View Tasks** - Display all tasks with clear numbering and formatting  
✅ **Delete Tasks** - Remove tasks by index or name
✅ **Task Status** - Mark tasks as completed/incomplete
✅ **Exit Confirmation** - Confirm before closing
✅ **Error Handling** - Robust error management
✅ **Type-Safe** - Full TypeScript support
✅ **Clean Interface** - Beautiful CLI experience

## Requirements

- **Node.js** 14.0.0 or higher
- **npm** or **yarn** package manager

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Alishabot/to-do-list.git
cd to-do-list
```

2. Install dependencies:
```bash
npm install
```

3. Build TypeScript:
```bash
npm run build
```

## Usage

### Development Mode (with ts-node)
```bash
npm run dev
```

### Production Mode (compiled)
```bash
npm run build
npm start
```

## Project Structure

```
to-do-list/
├── src/
│   ├── index.ts       # Main application entry point
│   └── todoList.ts    # TodoList class with all logic
├── dist/              # Compiled JavaScript (generated)
├── package.json       # Dependencies and scripts
├── tsconfig.json      # TypeScript configuration
├── README.md          # This file
└── .gitignore         # Git ignore rules
```

## Menu Options

### Main Menu
1. **➕ Add a new task** - Add a new task (max 100 characters)
2. **📋 View all tasks** - Display all tasks with numbers
3. **❌ Delete a task** - Remove tasks by:
   - Index (task number)
   - Name (search by text)
4. **🚪 Exit** - Close the application safely

## How It Works

### Adding Tasks
- Select option 1
- Enter task text (up to 100 characters)
- Task is immediately added to the list

### Viewing Tasks
- Select option 2
- All tasks displayed with numbers
- Shows total count

### Deleting Tasks
- Select option 3
- Choose delete method (index or name)
- Confirm deletion

### Exiting
- Select option 4
- Confirm with "da" or "yes"
- Type anything else to cancel

## Technical Details

### Technologies Used
- **TypeScript** - Type-safe JavaScript
- **Node.js** - Runtime environment
- **readline-sync** - Synchronous input handling
- **npm** - Package management

### Key Features
- Fully typed Task interface
- Dynamic task storage with IDs
- Timestamp tracking for tasks
- Input validation and sanitization
- Comprehensive error handling
- Clean, modular code structure

## Available Scripts

```bash
# Development with ts-node
npm run dev

# Build TypeScript to JavaScript
npm run build

# Run compiled application
npm start

# Clean build directory
npm run clean
```

## Future Enhancements

- [ ] Persistent storage (JSON file)
- [ ] Task priority levels
- [ ] Due dates and reminders
- [ ] Task categories/tags
- [ ] Colored output with chalk
- [ ] Task filtering and search
- [ ] Undo/Redo functionality
- [ ] Web interface with Express

## Error Handling

The application safely handles:
- Empty task input
- Tasks exceeding 100 characters
- Invalid delete indices
- Missing task names
- Unexpected runtime errors
- Invalid menu selections

## Author

**Alishabot**

## License

MIT License - Open source and free to use

## Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

## Support

For issues or questions, please create an issue in the GitHub repository.

---

**Note:** This TypeScript version provides better type safety, cleaner code structure, and easier maintainability compared to traditional JavaScript implementations.
