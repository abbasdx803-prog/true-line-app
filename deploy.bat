@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo ==========================================
echo    True LINE - Deploy to Netlify
echo ==========================================
echo.

git add .

git diff --cached --quiet
if %errorlevel%==0 (
  echo No changes to upload.
  echo.
  pause
  exit /b
)

echo Changed files:
git diff --cached --name-only
echo.

git commit -m "Update %date% %time%"
git push

echo.
if %errorlevel%==0 (
  echo ==========================================
  echo    DONE - Netlify is deploying now
  echo    Wait 1 min then Ctrl+Shift+R
  echo ==========================================
) else (
  echo ==========================================
  echo    FAILED - read the message above
  echo ==========================================
)
echo.
pause
