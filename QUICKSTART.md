# Quick Start Guide

## 🚀 Getting Started with To-Do List (TypeScript)

### Prerequisites
- **Node.js** installed (download from https://nodejs.org/)

### Option 1: One-Click Setup (Windows)

1. Double-click `run-ts.bat`
2. The script will:
   - Check for Node.js
   - Install dependencies
   - Compile TypeScript
   - Start the application

### Option 2: Manual Setup

1. Open Command Prompt in this folder
2. Run:
```bash
npm install
```

3. Build the project:
```bash
npm run build
```

4. Run the application:
```bash
npm start
```

### Option 3: Development Mode (with live reloading)

```bash
npm run dev
```

## Project Structure

```
src/
├── index.ts       # Main application interface
└── todoList.ts    # Task management logic

dist/              # Compiled JavaScript (auto-generated)
```

## Features

- ✅ Add, view, and delete tasks
- ✅ Full TypeScript type safety
- ✅ Error handling and validation
- ✅ Interactive CLI interface
- ✅ Task status tracking

## Commands

| Command | Purpose |
|---------|---------|
| `npm install` | Install dependencies |
| `npm run build` | Compile TypeScript to JavaScript |
| `npm start` | Run the compiled application |
| `npm run dev` | Run in development mode |
| `npm run clean` | Remove build output |

## Troubleshooting

### "Node is not recognized"
- Node.js is not installed
- Download from https://nodejs.org/
- Restart your computer after installation

### "npm: command not found"
- Reinstall Node.js ensuring npm is selected
- Check PATH environment variable

### "TypeScript compilation errors"
- Delete `node_modules` folder
- Run `npm install` again
- Run `npm run build`

## Next Steps

1. ✅ Install dependencies
2. ✅ Build the project
3. ✅ Run the application
4. ✅ Use the interactive menu
5. ✅ Push to GitHub using setup.bat

## Support

If you need help:
1. Check error messages carefully
2. Verify Node.js is installed: `node --version`
3. Verify npm is installed: `npm --version`
4. Create an issue on GitHub

Happy task managing! 🎉
