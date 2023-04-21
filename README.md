# Ecommerce App

## _Curso de React Coderhouse Comision 39610_
 Ecommerce de venta de tecnología 
 
Este proyecto es un ecommerce desarrollado en React y Bootstrap. La base de datos está alojada en Firebase.
## Instalación 
1. Clona este repositorio en tu máquina local. 
2. Abre una terminal y navega hasta la carpeta raíz del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias del proyecto:  npm install 
## Configuración
Antes de poder utilizar el proyecto, necesitas configurar la conexión con Firebase. Para ello, sigue los siguientes pasos: 
1. Crea una cuenta en Firebase si aún no tienes una.
2. Crea un nuevo proyecto en Firebase y habilita la autenticación por correo electrónico y contraseña.
3. Crea una base de datos en Firestore. 
4. En la sección "Configuración" del proyecto, copia las credenciales de Firebase y pégalo en el archivo `.env` del proyecto. 
 

REACT_APP_FIREBASE_API_KEY=<API_KEY
REACT_APP_FIREBASE_AUTH_DOMAIN=<AUTH_DOMAIN REACT_APP_FIREBASE_PROJECT_ID=<PROJECT_ID> REACT_APP_FIREBASE_STORAGE_BUCKET=<STORAGE_BUCKET> REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<MESSAGING_SENDER_ID> REACT_APP_FIREBASE_APP_ID=<APP_ID>  

## Uso 
Para iniciar el proyecto, ejecuta el siguiente comando: 

```sh
npm start
```  

Esto iniciará el servidor local en 
```sh
`http://localhost:3000`
```

>Puedes acceder a él desde tu navegador web. 

## Descripción
El ecommerce cuenta con categorías dinámicas, lo que te permite editar las categorias
desde la db, para asi modificar o agregar diferentes categorías de productos de manera fácil, rápida y poder reutilizar el proyecto para cualquier tipo de producto. Además, el proyecto cuenta con funciones desarrolladas para modificar el carrito de compras en cualquier instancia antes de realizar el checkout. Esto te permite agregar o eliminar productos del carrito en cualquier momento antes de finalizar tu compra. 

## Contribuciones 
Si deseas contribuir a este proyecto, por favor abre un pull request y describe los cambios que deseas realizar.

## Problemas
Si encuentras algún problema con el proyecto, por favor abre un issue en este repositorio.