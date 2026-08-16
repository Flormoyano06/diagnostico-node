
const entorno = process.env.NODE_ENV || 'desarrollo';
console.log('=== DIAGNÓSTICO DEL SISTEMA ===');
console.log(`Versión de Node.js:  ${process.version}`);
console.log(`Plataforma (SO):    ${process.platform}`);
console.log(`Variable NODE_ENV:  ${entorno}`);
console.log('Argumentos de la CLI:', process.argv);