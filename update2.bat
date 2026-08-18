@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

set "PROJ=C:\Windows\System32\true-line-app"
set "DL=%USERPROFILE%\Downloads"

echo ==========================================
echo    True LINE - Auto Update ^& Deploy
echo ==========================================
echo.
echo Looking in: %DL%
echo.

set MOVED=0

call :grab index.html    "%PROJ%"
call :grab style.css     "%PROJ%\css"
call :grab app.js        "%PROJ%\js"
call :grab config.js     "%PROJ%\js"
call :grab ui.js         "%PROJ%\js"
call :grab sendOTP.js    "%PROJ%\netlify\functions"

echo.
if %MOVED%==0 (
  echo No new files found in Downloads.
  echo Nothing was copied.
) else (
  echo %MOVED% file^(s^) copied into the project.
)
echo.

cd /d "%PROJ%"
git add .
git diff --cached --quiet
if %errorlevel%==0 (
  echo Nothing to upload - project already up to date.
  echo.
  pause
  exit /b
)

echo Uploading these files:
git diff --cached --name-only
echo.

git commit -m "Update %date% %time%"
git push

echo.
if %errorlevel%==0 (
  echo ==========================================
  echo    DONE - Netlify is deploying
  echo    Wait 1 min then press Ctrl+Shift+R
  echo ==========================================
) else (
  echo ==========================================
  echo    PUSH FAILED - read the message above
  echo ==========================================
)
echo.
pause
exit /b

:grab
set "NAME=%~1"
set "DEST=%~2"
set "FOUND="
for /f "delims=" %%F in ('dir /b /o-d "%DL%\%~n1*%~x1" 2^>nul') do (
  if not defined FOUND set "FOUND=%%F"
)
if defined FOUND (
  if not exist "%DEST%" mkdir "%DEST%"
  move /y "%DL%\!FOUND!" "%DEST%\%NAME%" >nul
  echo   [OK] !FOUND!  ==^>  %DEST%\%NAME%
  set /a MOVED+=1
)
exit /b
