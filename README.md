# LandingPrado - React E-Commerce

Este proyecto es una aplicación de e-commerce desarrollada con React y Vite. Ofrece un catálogo de productos con filtrado por categorías, una vista detallada de productos, y un carrito de compras con gestión del estado global.

## Tecnologías Utilizadas

- **React**: Biblioteca para construir la interfaz de usuario.
- **Vite**: Herramienta de construcción rápida para React.
- **Firebase Firestore**: Base de datos en la nube para almacenar productos y registros de compras.
- **React Router**: Para la navegación entre secciones sin recargar la página.
- **Context API**: Para manejar el estado global del carrito de compras.

## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/micaelaprado/LandingPrado.git
    ```

2. Navega al directorio del proyecto:
    ```bash
    cd LandingPrado
    ```

3. Instala las dependencias:
    ```bash
    npm install
    ```

4. Ejecuta la aplicación en modo desarrollo:
    ```bash
    npm start
    ```

   La aplicación estará disponible en `http://localhost:3000`.

## Estructura del Proyecto

- **src/components**: Contiene los componentes de React, como `NavBar`, `ItemListContainer`, `ItemDetail`, `Cart`, etc.
- **src/context**: Contiene el Context para el carrito de compras (`CartContext`).
- **src/services**: Configuración de Firebase y servicios relacionados.

## Funcionalidades

- **Catálogo de productos**: Muestra una lista de productos con opción de filtrado por categorías.
- **Vista detallada del producto**: Permite ver detalles completos del producto y gestionar la cantidad con `ItemCount`.
- **Carrito de compras**: Administra el carrito utilizando Context API, muestra productos en el carrito, y permite realizar el checkout.
- **Integración con Firebase**: Utiliza Firestore para almacenar y recuperar productos y registros de compras.

## Renderizado Condicional

La aplicación incluye renderizado condicional para manejar distintos estados:

- **Cargando datos**: Se muestra un loader mientras se cargan los datos del producto.
- **Producto sin stock**: Se muestra un mensaje cuando un producto no está disponible en stock.
- **Carrito vacío**: Se muestra un mensaje cuando el carrito está vacío.
- **Producto añadido al carrito**: Se muestra un mensaje cuando un producto ha sido añadido al carrito.

## Deploy

La aplicación está desplegada en [] 

## Autor

[Micaela Prado](https://github.com/micaelaprado)

## Información Adicional

Este proyecto se basa en el template de React + Vite, que proporciona una configuración mínima para comenzar a trabajar con React en Vite con HMR (Hot Module Replacement) y algunas reglas de ESLint.

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) utiliza [Babel](https://babeljs.io/) para Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) utiliza [SWC](https://swc.rs/) para Fast Refresh.