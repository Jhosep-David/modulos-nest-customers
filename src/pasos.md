pasos para desargar y ejecutar exitosamente
un proyecto de software (migraciones incluidas) 
cualquier lenguaje de programacion 

1. Descargar el proyecto desde el repositorio 
(git clone, git fetch, etc....)

2. Ingresa a la carpeta del proyecto 
desde consola: cd

3. instalar dependencias 
npm, pip, composerm el que corresponda a su lenguaje

4. ejecutar migraciones:
npx prisma migrated reset 
npx prisma migrated dev
npx prisma generated

5. verificar base de datos
heidi: mirar tablas, relaciones, etc 

6. ejecutar proyecto
npm run start:dev  