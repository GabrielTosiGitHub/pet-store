# 🐾 Pet Store – Tienda Online para Mascotas

Pet Store es una aplicación web desarrollada con **React + Vite** que simula una tienda online de productos para mascotas.  
Incluye catálogo público, carrito de compras, login simulado y un panel de administración protegido para gestionar productos.

---

## 🚀 Tecnologías utilizadas

- **React + Vite**
- **React Router DOM**
- **Context API** (Auth, Cart, Products)
- **Bootstrap 5** + estilos propios
- **React-Toastify** (notificaciones)
- **MockAPI** (backend simulado)
- **React Helmet** (SEO básico)
- **LocalStorage** (persistencia de carrito y auth)

---

## 🛒 Funcionalidades principales

### 🔹 Vista pública
- Ver listado de productos
- Ver detalles esenciales (nombre, precio, imagen, categoría)
- Agregar productos al carrito
- Persistencia del carrito en LocalStorage

### 🔹 Carrito de compras
- Agregar productos
- Eliminar del carrito
- Vaciar carrito completo
- Total dinámico

### 🔹 Autenticación (simulada)
- Login con usuario/contraseña predefinidos  
- Logout  
- Sistema de rutas protegidas

### 🔹 Panel de administración (solo para admin)
- Listado completo de productos  
- Crear producto nuevo  
- Editar producto  
- Eliminar producto  
- Toda la información se sincroniza con **MockAPI**

---

## 🧪 Rutas principales

| Ruta | Descripción |
|------|-------------|
| `/` | Home / catálogo público |
| `/login` | Login de administrador |
| `/cart` | Carrito de compras |
| `/admin/products` | Panel admin (requiere login) |
| `/editar/:id` | Formulario de edición |

---

## ⚙️ Instalación y uso en local

```bash
# 1. Clonar el repositorio
git clone https://github.com/GabrielTosiGitHub/pet-store.git
cd pet-store

# 2. Instalar dependencias
npm install

# 3. Ejecutar en modo desarrollo
npm run dev
