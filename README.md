# Valeria Herrera Repostería — Landing Page SPA

Landing page desarrollada para **Valeria Herrera Repostería**, una marca de repostería artesanal enfocada en transmitir calidez, confianza y una experiencia visual elegante para sus clientes.

El proyecto fue construido como una **Single Page Application (SPA)** con enfoque responsive, cuidando la identidad visual, la jerarquía de contenido y la conversión principal hacia canales de contacto como WhatsApp e Instagram.

---

## Vista general

El objetivo principal de esta landing es presentar la marca de forma clara, cálida y profesional, permitiendo que los usuarios conozcan la propuesta de valor, exploren productos destacados y puedan iniciar contacto fácilmente para realizar pedidos.

La experiencia está diseñada bajo una estética minimalista, suave y artesanal, alineada con un sistema visual previamente definido.

---

## Características principales

- Landing page responsive para desktop y mobile.
- Hero section con mensaje principal y CTA de conversión.
- Sección “Acerca de mí” para reforzar confianza y cercanía.
- Productos destacados cargados desde contenido local.
- CTA principal hacia WhatsApp.
- Canal secundario hacia Instagram.
- Sistema visual basado en colores, tipografías y componentes definidos.
- Arquitectura sencilla y escalable para futuras mejoras.

---

## Stack utilizado

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**

El proyecto se construyó con una base frontend-first, ideal para una landing page estática o semiestática sin necesidad inicial de backend.

---

## Sistema visual

La identidad visual parte de una dirección cálida, elegante y artesanal.

### Colores principales

| Rol | Color | HEX |
|---|---|---|
| Lavanda principal | Identidad de marca | `#967EDF` |
| Naranja CTA | Acciones principales | `#D97706` |
| Taupe | Texto y lectura | `#7C6F64` |
| Crema | Fondo principal | `#FDF5F0` |

### Tipografías

- **Fraunces**: títulos y momentos de identidad visual.
- **Inter**: navegación, cuerpo de texto, botones y contenido funcional.

---

## Metodología de trabajo

Este proyecto fue desarrollado con un enfoque de **Spec-Driven Development (SDD)**.

Antes de implementar la interfaz, se definieron documentos base para alinear:

- alcance del MVP,
- decisiones visuales,
- estructura del proyecto,
- reglas de contenido,
- criterios de aceptación,
- edge cases,
- y decisiones técnicas iniciales.

Este enfoque permitió construir la landing de forma más ordenada, evitando improvisaciones y manteniendo una relación clara entre diseño, producto e implementación.

---

## Alcance del MVP

La primera versión del proyecto incluye:

- Header / navegación
- Hero principal
- Sección “Acerca de mí”
- Productos destacados
- Sección de contacto
- Footer

### Fuera de alcance en esta versión

- E-commerce completo
- Carrito de compras
- Checkout
- Pasarela de pago
- Panel administrativo
- CMS
- Autenticación
- Backend propio

---

## Estructura general del proyecto

```txt
.
├── public/
│   ├── brand/
│   ├── images/
│   └── icons/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   ├── content/
│   ├── lib/
│   ├── styles/
│   ├── types/
│   ├── App.tsx
│   └── main.tsx
├── docs/
│   ├── architecture/
│   ├── domain/
│   ├── specs/
│   ├── adr/
│   ├── api/
│   ├── engineering/
│   └── ops/
├── package.json
├── vite.config.ts
├── tailwind.config.ts
└── README.md