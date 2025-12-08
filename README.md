# Pet Store - Vite + React

Proyecto plantilla para el curso. Incluye:
- Carrito con Context API
- Autenticación simulada (localStorage)
- CRUD contra MockAPI (https://692dd8bfe5f67cd80a4d2fd2.mockapi.io/products/items)
- Búsqueda y paginación
- Bootstrap + styled-components
- React Toastify, React Icons
- Tests básicos (Jest + React Testing Library)

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

## Tests

```bash
npm run test
```

> Nota: instalar dependencias dev puede tardar. Si preferís usar `vitest` en lugar de `jest` puedo ajustarlo.

## Imágenes

Coloca las imágenes en `public/images/` (ya incluí las que subiste).

## Despliegue

1. `npm run build`
2. Subir la carpeta `dist` a Netlify o GitHub Pages

## Checklist para entrega

- [ ] CRUD funcionando contra MockAPI
- [ ] Carrito persistente en localStorage
- [ ] Rutas protegidas y login simulado
- [ ] Formularios validados (nombre, precio, descripción)
- [ ] Tests unitarios básicos añadidos
- [ ] README con instrucciones
