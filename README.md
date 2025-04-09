# 📰 Portal de Noticias 

Este proyecto es un **portal de noticias** hecho con **Astro**, **Sanity CMS + Sanity Studio**, **DaisyUI** (sobre TailwindCSS) y desplegado en **Vercel**.  
Se recopilan noticias de diferentes fuentes, siempre referenciando adecuadamente.

---

## 📋 Checklist de tareas

### Setup Inicial
- [x] Inicializar proyecto Astro
- [x] Configurar DaisyUI + TailwindCSS
- [x] Crear estructura básica de carpetas (`src/pages`, `src/components`, `src/layouts`)
- [x] Configurar Sanity y crear proyecto
- [ ] Crear esquema de "Noticia" en Sanity (título, imagen, contenido, autor, fecha, fuente)
- [ ] Configurar Sanity Studio para cargar noticias (panel de admin externo)

### Frontend Público
- [ ] Conectar Astro al CMS Sanity (fetch de noticias)
- [ ] Crear layout principal del sitio
- [ ] Listar las noticias en la homepage
- [ ] Página individual de noticia (`/noticias/[slug]`)
- [ ] Agregar navegación simple (Home, Noticias, Contacto opcional)
- [ ] Estilizar el sitio con DaisyUI (estética minimalista y limpia)

### Mejoras y Detalles
- [ ] Agregar Metadata (SEO básico) con Astro
- [ ] Agregar favicon y título personalizado
- [ ] Agregar componente de Loader/Spinner mientras carga contenido
- [ ] Agregar mensajes de error o estados vacíos si no hay noticias
- [ ] Agregar pie de página (footer) con créditos y links

### Deploy
- [x] Subir repositorio a GitHub
- [ ] Conectar proyecto a Vercel
- [ ] Configurar variables de entorno necesarias en Vercel (por ejemplo, Sanity API keys si fueran privadas)
- [ ] Hacer deploy en producción 🎉

---

## 🚀 Tecnologías usadas
- **Astro** — Frontend framework ultra rápido
- **TailwindCSS + DaisyUI** — Estilos rápidos y hermosos
- **Sanity.io + Sanity Studio** — Headless CMS para gestionar el contenido
- **Vercel** — Deploy automático en la nube

---
