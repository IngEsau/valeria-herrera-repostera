# Landing Home Spec

## Objetivo
Construir la página principal de la SPA para presentar la marca Valeria Herrera Repostería, transmitir confianza, comunicar propuesta de valor y facilitar una acción principal de conversión.

## Alcance
- header
- hero
- sección “Acerca de mí”
- productos destacados
- CTA principal
- footer
- responsive mobile-first

## No-goals
- checkout
- carrito
- autenticación
- filtrado avanzado
- búsqueda
- catálogo completo dinámico
- integración con pagos

## Contexto
Este feature representa el primer punto de contacto de la marca en digital y actúa como pieza principal de presentación, confianza y conversión.

## Reglas de negocio
1. La landing debe comunicar claramente quién es la marca y qué ofrece.
2. Debe existir un CTA principal visible above the fold.
3. El CTA principal del MVP será WhatsApp.
4. Instagram funcionará como canal secundario de apoyo y confianza.
5. El hero no debe sacrificar legibilidad por estética.
6. La sección “Acerca de mí” debe reforzar confianza y cercanía.
7. Los productos destacados se cargarán desde un archivo JSON local.
8. Los productos destacados mostrarán precio visible.
9. El footer debe incluir información básica de marca y contacto si está definida.

## Dependencias
- sistema visual definido
- assets visuales aprobados
- copy validado
- enlace operativo de WhatsApp
- enlace operativo de Instagram
- archivo JSON local con productos destacados

## Edge cases
- texto más largo en hero
- imágenes de producto con distintas proporciones
- ausencia temporal de precio
- CTA sin canal de conversión definido
- layout reducido en mobile

## Acceptance Criteria
- [ ] La página respeta colores y tipografías oficiales
- [ ] Existe jerarquía visual clara entre header, hero y CTA
- [ ] La experiencia funciona correctamente en mobile y desktop
- [ ] La sección “Acerca de mí” comunica confianza
- [ ] Los productos destacados mantienen consistencia visual
- [ ] El footer cierra la experiencia sin ruido visual

## Impacto técnico
Afecta la arquitectura base del frontend, el sistema de layout, la jerarquía de secciones y la organización inicial de componentes.

## Definición de terminado
- spec aprobado
- test plan aprobado
- edge cases revisados
- copy validado
- implementación responsive validada
