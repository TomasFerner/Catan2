@echo off
title Catan Mod - Servidor Local
chcp 65001 > nul
cls

echo =================================================================
echo   🎲  CATÁN MOD - INICIANDO SERVIDOR LOCAL  🏔️ 📜
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

echo [INFO] Iniciando servidor en http://localhost:3000...
echo Para detener el servidor, cierra esta ventana o presiona Ctrl+C.
echo.

:: Abrir el navegador con el juego automáticamente
start http://localhost:3000

:: Ejecutar el servidor de Next.js
npm run dev

:: Evitar que la consola se cierre de golpe si ocurre algún error
echo.
echo El servidor se ha detenido.
pause
