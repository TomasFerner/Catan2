# 🎲 Catán Mod - Selector de Eventos Doble 🏔️📜

¡Bienvenido a **Catán Mod**! Esta es una aplicación de acompañamiento interactiva para tus partidas de Catán, diseñada con una estética moderna, efectos visuales dinámicos y funciones avanzadas para añadir emoción, estrategia y dinamismo a tus juegos de tablero tradicionales.

Esta aplicación introduce dos nuevas dimensiones de juego: **Eventos Climáticos** y **Eventos Diplomáticos**, que alteran las reglas del juego en cada ronda. También incluye un **Temporizador de Turno** integrado y una **Tabla de Jugadores** para llevar el control de la partida.

---

## ✨ Características Principales

### 🏔️ Eventos Climáticos (Dado de 6)
Modificaciones climatológicas que alteran la producción de los recursos en la isla de Catan:
1. **Terremoto 🪨**: Reduce en 1 la producción de trigo (si se farmea más de 1 en esa casilla) para aumentar en 1 la producción de piedra.
2. **Tornado 🌪️**: Se tiran dos dados y alrededor del número que toque se giran en sentido horario los números del tablero.
3. **Inundación 🌊**: Los puertos no se pueden usar por toda la ronda. Sin embargo, cada vez que salga trigo, se farmea 1 más.
4. **Incendio 🔥**: Reduce en 1 la producción de madera (si se farmea más de 1 por jugador) pero se farmea 1 más de ladrillo por cada casilla.
5. **Lobos 🐺**: Reduce en 1 la producción de ovejas (si se farmea más de 1 por jugador) pero se farmea 1 más de madera por cada casilla.
6. **Calentamiento Global ☀️**: El barro dificulta la minería: reduce en 1 la producción de piedra y ladrillo. A cambio, los prados florecen: se obtiene 1 más de oveja por casilla.

### 📜 Eventos Diplomáticos (Dado de 6)
Reglas socio-políticas que influyen en el comercio y comportamiento de los jugadores:
1. **Capitalismo 💰**: El comercio con el banco se vuelve 2:1 para cada jugador durante esta ronda.
2. **Socialismo 🤝**: Cada jugador puede agarrar 1 material del banco a su elección en esta ronda.
3. **Comunismo ⚒️**: Por cada cabildo (ciudad) que tenga un jugador, se reduce en 1 la cantidad máxima de cartas que puede tener en mano para que el ladrón no le robe.
4. **Liberalismo 🗽**: Todos los jugadores pueden comerciar con todos en cualquier momento durante esta ronda.
5. **Fascismo 🚫**: El jugador con más puntos (o empatado en el primer puesto) no puede comerciar en esta ronda.
6. **Teocracia 🙏**: Jesús pacifica al ladrón y lo convierte en un trabajador: consigues el doble de recursos de esa casilla durante la ronda.


### ⏱️ Temporizador de Turnos
Evita turnos interminables y mantén el ritmo de juego activo. Configura alarmas visuales y lleva el control del tiempo restante para cada jugador.

### 👥 Tabla de Jugadores
Una sección integrada para registrar nombres de jugadores, colores representativos, puntuaciones y estadísticas en tiempo real durante la partida.

---

## 🛠️ Tecnologías Utilizadas

- **Core:** [React 19](https://react.dev/) & [Next.js 16 (App Router)](https://nextjs.org/)
- **Estilos:** [TailwindCSS v4](https://tailwindcss.com/) & CSS Personalizado (Glassmorphism, transiciones fluidas y efectos visuales adaptativos)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)

---


## 🚀 Desarrollo Local

Sigue estos pasos para ejecutar la aplicación en tu computadora localmente:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/TomasFerner/Catan2.git
   cd Catan2
   ```

2. **Instalar las dependencias:**
   ```bash
   npm install
   ```

3. **Ejecutar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador:**
   Navega a [http://localhost:3000](http://localhost:3000) para ver y probar la aplicación interactiva.

### ⚡ Acceso Rápido en Windows (Doble Clic)
Para tu comodidad, he creado un script ejecutable en la raíz del proyecto llamado `iniciar_servidor.bat`. 
Al hacer **doble clic** sobre él, hará automáticamente lo siguiente:
1. **Verificar que Node.js** esté instalado en la PC.
2. **Instalar las dependencias** (`npm install`) de forma automática si no encuentra la carpeta `node_modules`.
3. **Iniciar el servidor local** y abrir automáticamente tu navegador en [http://localhost:3000](http://localhost:3000).
4. Mantener la consola abierta en todo momento para que puedas ver el estado del servidor local.

---



## 💻 Instalación y Uso en Otra PC

Si deseas instalar y ejecutar este proyecto en otra computadora, tienes dos opciones principales según lo que necesites:

### Opción A: Clonar e instalar en la otra PC (Instalación Independiente)
Si quieres que la aplicación se ejecute localmente y de forma independiente en el otro equipo:

1. **Requisitos previos:**
   - Instalar **Node.js** (versión 18 o superior recomendada). Puedes descargarlo de [nodejs.org](https://nodejs.org/).
   - Tener **Git** instalado en el sistema.

2. **Pasos para la instalación:**
   - Abre la terminal de la otra PC y clona el proyecto:
     ```bash
     git clone https://github.com/TomasFerner/Catan2.git
     ```
   - Entra al directorio del proyecto:
     ```bash
     cd Catan2
     ```
   - Instala todas las dependencias:
     ```bash
     npm install
     ```
   - Inicia el servidor de desarrollo:
     ```bash
     npm run dev
     ```
   - Abre el navegador web de esa PC y entra a [http://localhost:3000](http://localhost:3000).

### Opción B: Acceder desde otra PC/Móvil en la misma red local (Sin instalar nada en la otra PC)
Dado que **Catán Mod** es una aplicación de acompañamiento para juegos de mesa, es sumamente útil que otros jugadores puedan acceder a ella desde sus celulares, tablets u otras computadoras en la misma habitación sin necesidad de instalar nada.

Para habilitar esto:

1. **Iniciar el servidor en tu PC principal** permitiendo conexiones externas:
   ```bash
   npm run dev -- -H 0.0.0.0
   ```
   *(Si el comando anterior da algún error, puedes usar `npx next dev -H 0.0.0.0`)*

2. **Obtener tu dirección IP local (en la PC principal):**
   - **En Windows:** Abre la consola (`cmd` o PowerShell) y escribe `ipconfig`. Busca tu dirección IPv4 local (suele ser algo como `192.168.1.XX` o `10.0.0.XX`).
   - **En macOS / Linux:** Abre la terminal y ejecuta `ipconfig getifaddr en0` o `ip a`.

3. **Acceder desde el otro dispositivo:**
   - Asegúrate de que el otro dispositivo esté conectado a la **misma red Wi-Fi / LAN** que la PC principal.
   - Abre el navegador en la otra PC o celular y escribe la dirección IP de tu PC principal seguida del puerto `:3000`. Por ejemplo: `http://192.168.1.15:3000` (reemplaza `192.168.1.15` por tu IP real).
   - ¡Listo! Todos los jugadores podrán interactuar con el selector de eventos y llevar el temporizador de sus turnos.

### 🔄 ¿Cómo actualizar a la última versión? (Para quienes ya lo tienen instalado)

Si tú o algún amigo ya clonaron el proyecto anteriormente y quieren descargar los nuevos cambios (como el script de inicio rápido `iniciar_servidor.bat` o futuras mejoras), solo deben seguir estos pasos:

1. **Obtener la última versión desde GitHub:**
   Abre la terminal dentro de la carpeta del proyecto (`Catan2`) y ejecuta:
   ```bash
   git pull
   ```
2. **Actualizar dependencias (opcional pero recomendado):**
   ```bash
   npm install
   ```
   *¡Y listo! Al hacer esto, ya tendrán todos los nuevos scripts, mejoras y actualizaciones en su computadora.*

---



## 🌐 Cómo hacer Deploy (Publicar en la Web)

El proyecto está listo para ser publicado de forma gratuita en la web. La plataforma recomendada y más sencilla para Next.js es **Vercel** (los mismos creadores de Next.js).

### Opción 1: Despliegue Directo con Vercel (Recomendado y más fácil)

1. Ve a [Vercel](https://vercel.com/) y crea una cuenta gratuita (puedes iniciar sesión directamente con tu cuenta de GitHub).
2. Haz clic en el botón **"Add New..."** y selecciona **"Project"**.
3. Importa tu repositorio `Catan2` desde tu cuenta de GitHub.
4. Vercel detectará automáticamente que es un proyecto de **Next.js** y configurará todos los comandos de construcción.
5. Haz clic en **"Deploy"**.
6. ¡Listo! En menos de un minuto tendrás tu juego publicado en una URL pública (ejemplo: `catan2.vercel.app`). Cada vez que hagas `git push` a tu rama `main`, Vercel actualizará la web automáticamente.

### Opción 2: Despliegue Manual usando Vercel CLI

Si tienes instalado Vercel en tu terminal, puedes desplegar directamente con:
```bash
npm install -g vercel
vercel
```

### Opción 3: Otras plataformas (Netlify, Render, etc.)

Si prefieres usar otras plataformas como Netlify:
1. Vincula tu repositorio GitHub a la plataforma elegida.
2. Configura los siguientes parámetros de build:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `.next` o `out` (según la configuración de exportación estática si la aplicas).
