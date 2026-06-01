@echo off
title Catan Mod - Servidor de Eventos
chcp 65001 > nul
cls

echo =================================================================
echo   🎲  CATÁN MOD - SERVIDOR DE ACOMPAÑAMIENTO  🏔️ 📜
echo =================================================================
echo.

:: Verificar si Node.js está instalado
node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js no está instalado en este equipo.
    echo Por favor, instala Node.js antes de continuar.
    echo Abriendo la página oficial de descarga...
    start https://nodejs.org/
    pause
    exit /b
)

:: Verificar si las dependencias están instaladas
if not exist node_modules (
    echo [INFO] No se encontró la carpeta node_modules. 
    echo Instalando dependencias de forma automática...
    call npm install
    if %errorlevel% neq 0 (
        echo [ERROR] Hubo un problema al instalar las dependencias.
        pause
        exit /b
    )
    echo [OK] Dependencias instaladas con éxito.
    echo.
)

echo Selecciona cómo deseas iniciar el servidor:
echo ----------------------------------------------------
echo [1] Modo local (Solo accesible desde esta PC)
echo [2] Modo compartido (Permite que jueguen celulares/otras PCs en tu Wi-Fi)
echo ----------------------------------------------------
echo.
set /p opcion="Selecciona una opción (1 o 2) y presiona Enter [Por defecto: 1]: "

if "%opcion%"=="2" (
    echo.
    echo [INFO] Iniciando en Modo Compartido (Red Local)...
    echo.
    echo TIP: Busca la línea de "- Network:" más abajo para saber a qué dirección
    echo      conectar los celulares y tablets.
    echo.
    :: Abrir localhost:3000 para la PC local
    start http://localhost:3000
    call npm run dev -- -H 0.0.0.0
) else (
    echo.
    echo [INFO] Iniciando en Modo Local (Solo esta PC)...
    echo.
    start http://localhost:3000
    call npm run dev
)

pause
