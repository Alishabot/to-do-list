# Terminal Setup Guide

## Fix Terminal Issues & Run Application

### Step 1: Open Terminal/Command Prompt

**Option A: Windows Terminal (Recommended)**
- Press `Win + X` → Select "Terminal" or "Windows Terminal"

**Option B: Command Prompt**
- Press `Win + R` → Type `cmd` → Press Enter

**Option C: PowerShell**
- Press `Win + X` → Select "Windows PowerShell"

### Step 2: Navigate to Project

```cmd
cd "C:\Users\cioca\OneDrive\Desktop\projects\to do list"
```

### Step 3: Install Dependencies

```cmd
npm install
```

This will install:
- ✅ `readline-sync` (for user input)
- ✅ `typescript` (TypeScript compiler)
- ✅ `@types/node` (Node.js types)
- ✅ `ts-node` (Run TypeScript directly)

### Step 4: Build TypeScript

```cmd
npm run build
```

This compiles TypeScript to JavaScript in the `dist/` folder.

### Step 5: Run Application

```cmd
npm start
```

Or use development mode:

```cmd
npm run dev
```

---

## Common Issues & Solutions

### ❌ "npm: command not found"

**Solution**: Reinstall Node.js
1. Download from https://nodejs.org/
2. Run installer with default options
3. Restart Command Prompt
4. Verify: `node --version` and `npm --version`

### ❌ "Module not found: readline-sync"

**Solution**: Install dependencies
```cmd
npm install
```

### ❌ "tsc: command not found"

**Solution**: TypeScript not installed globally (fine, use npm)
```cmd
npm run build
```

### ❌ "Cannot find module './app'"

**Solution**: Files not compiled yet
```cmd
npm run build
npm start
```

### ❌ Port already in use

This app doesn't use ports, but if you see this, check for:
```cmd
npm run clean
npm install
npm run build
```

---

## Batch File Method (Windows Only)

Double-click **`run-ts.bat`** - It will automatically:
- ✅ Check Node.js
- ✅ Install dependencies
- ✅ Build TypeScript
- ✅ Run application

---

## Verify Setup

```cmd
# Check Node.js
node --version

# Check npm
npm --version

# Check project files
dir src/

# Should show: app.ts, index.ts, todoList.ts, utils.ts
```

---

## Useful Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run build` | Compile TypeScript |
| `npm start` | Run compiled app |
| `npm run dev` | Run with ts-node |
| `npm run clean` | Delete build files |
| `dir dist/` | Check compiled files |
| `dir node_modules/` | Check installed packages |

---

## Project Structure

```
src/
├── index.ts      ← Entry point (imports app)
├── app.ts        ← Main application logic
├── todoList.ts   ← Task management
└── utils.ts      ← Display utilities

dist/             ← Compiled JavaScript (generated)
node_modules/     ← Dependencies (generated)
```

---

## Quick Start (Copy & Paste)

```cmd
cd "C:\Users\cioca\OneDrive\Desktop\projects\to do list"
npm install
npm run build
npm start
```

Then use the interactive menu! 🎉

---

**All set! Your app should now run correctly.** ✅
