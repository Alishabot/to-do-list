@echo off

REM Enhanced Git setup script for To-Do List Java application
REM This script initializes Git, commits changes, and pushes to GitHub
echo.
echo ================================================
echo   TO-DO LIST - GIT SETUP SCRIPT
echo ================================================
echo.

REM Check if Git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Git is not installed or not in PATH
    echo Please install Git from https://git-scm.com/download/win
    pause
    exit /b 1
)

echo [1/6] Checking for existing Git repository...
if exist .git (
    echo Git repository already exists. Updating...
    git status
) else (
    echo Initializing new Git repository...
    git init
)

echo.
echo [2/6] Configuring Git (optional - set your name and email)...
REM Uncomment and modify if you want to set Git config
REM git config user.name "Your Name"
REM git config user.email "your.email@example.com"

echo.
echo [3/6] Adding files to staging area...
git add TodoList.java
git add setup.bat
git status

echo.
echo [4/6] Creating commit...
git commit -m "Enhanced To-Do List Java application with robust error handling and improved UI" || echo Commit skipped (no changes)

echo.
echo [5/6] Setting main branch...
git branch -M main

echo.
echo [6/6] Configuring remote and pushing to GitHub...
REM Remove existing remote if it exists
git remote remove origin 2>nul
git remote add origin https://github.com/Alishabot/to-do-list.git

echo Pushing to GitHub...
git push -u origin main

echo.
echo ================================================
echo   SUCCESS! Your project has been pushed to GitHub
echo ================================================
echo.
echo Repository: https://github.com/Alishabot/to-do-list
echo.
pause
