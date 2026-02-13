@echo off
REM Start the static server for Bullock Interactive Reconstruction.
REM Run this from the project root, or it will use this script's directory.
cd /d "%~dp0"
npx serve dist -l 3000
