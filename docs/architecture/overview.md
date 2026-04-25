# Architecture Overview

## Tipo de sistema
Single Page Application (SPA) orientada a marketing y conversión para una marca de repostería artesanal.

## Objetivo técnico
Construir una base frontend limpia, mantenible y escalable, capaz de representar con fidelidad el sistema visual de marca y soportar una evolución futura sin rehacer la arquitectura base.

## Alcance del MVP
- Landing page principal
- Header / navegación
- Hero principal
- Sección “Acerca de mí”
- Productos destacados
- CTA de conversión
- Footer
- Responsive mobile-first

## Fuera de alcance en MVP
- Panel administrativo
- Pasarela de pago
- Gestión de inventario
- Catálogo dinámico con backend
- Autenticación
- Dashboard interno

## Hipótesis técnicas provisionales
- Frontend implementado como SPA
- Rendering centrado en cliente, salvo que el spec indique otra necesidad
- Contenido inicial estático o semiestático
- Integraciones externas solo si están explicitadas

## Principios arquitectónicos
- Simplicidad primero
- Separación entre dominio visual, contenido y comportamiento
- Componentización con bajo acoplamiento
- Tokens visuales alineados a brand system
- Preparación para crecimiento sin sobreingeniería

## Riesgos identificados
- Empezar a maquetar antes de cerrar estructura y criterios de aceptación
- Mezclar branding con reglas de implementación sin un spec intermedio
- Introducir dependencias arbitrarias por conveniencia del vibe coding

## Decisiones aún no cerradas
- Stack frontend final
- Estrategia de estilos concreta
- Hosting final
- Contrato de contacto o formulario
