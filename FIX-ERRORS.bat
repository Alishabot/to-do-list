@echo off
REM This script automatically fixes all TypeScript errors by installing dependencies
REM and running the application

echo ======================================
echo  TO-DO LIST - Automatic Error Fix
echo ======================================
echo.

REM Step 1: Delete old node_modules folder
echo Step 1: Cleaning up old dependencies...
if exist node_modules (
    rmdir /s /q node_modules
    echo ✓ Old dependencies removed
) else (
    echo ✓ No old dependencies found
)
echo.

REM Step 2: Install npm dependencies (including @types/node)
echo Step 2: Installing npm dependencies...
echo This may take 1-2 minutes on first run...
call npm install
if errorlevel 1 (
    echo.
    echo ✗ ERROR: npm install failed
    echo Please make sure Node.js is installed: https://nodejs.org/
    echo.
    pause
    exit /b 1
)
echo ✓ Dependencies installed successfully
echo.

REM Step 3: Compile TypeScript to JavaScript
echo Step 3: Compiling TypeScript...
call npm run build
if errorlevel 1 (
    echo.
    echo ✗ ERROR: TypeScript compilation failed
    echo.
    pause
    exit /b 1
)
echo ✓ TypeScript compiled successfully
echo.

REM Step 4: Run the application
echo Step 4: Starting the application...
echo.
call npm start

pause
