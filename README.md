Diagnóstico de Entorno Node.js
Este proyecto es un script sencillo en Node.js que sirve para ver en la consola información básica del sistema (la versión de Node, el sistema operativo, los argumentos que le pasamos y las variables de entorno) usando la herramienta nativa process.

Requisitos
Tener instalado Node.js
Versión de Node.js: v24.19.0

Comandos básicos de consola y diagnóstico

Para verificar que las herramientas estén bien instaladas y probar el entorno de desarrollo, usamos estos comandos en la terminal:

Para probar qué versiones tenemos instaladas
"node --version" : Nos muestra la versión de Node.js instalada en la compu.
"npm --version" : Verifica la versión del gestor de paquetes (npm).
"git --version" : Nos dice qué versión de Git tenemos.

Arrancar un proyecto desde cero
"npm init -y" : Crea el archivo "package.json" de una (con la configuración por defecto) para empezar a trabajar.

Ejecutar el script de diagnóstico
node diagnostico.js prueba" : Corre directamente el archivo "diagnostico.js" pasándole la palabra "prueba" como parámetro.
"npm run diagnostico -- prueba" : Corre el diagnóstico llamándolo desde los scripts que guardamos en el "package.json".
npm start



Resultado al correrlo

=== DIAGNÓSTICO DEL SISTEMA ===
Versión de Node.js:  v24.19.0
Plataforma (SO):    win32
Variable NODE_ENV:  desarrollo
Argumentos de la CLI: [
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\Usuario\\Documents\\materias\\diseño y arq. de despliegue\\diagnostico-node\\diagnostico.js',
  'miArgumento1',
  'miArgumento2',
  '--modo=prueba'
]