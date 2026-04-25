# ADR-0001 Frontend Foundation

## Estado
Aceptado

## Contexto
El proyecto inicia como una SPA de branding / marketing para una marca de repostería artesanal. No existe backend confirmado ni funcionalidades complejas de negocio en el MVP.

## Decisiones confirmadas
- Stack: React + TypeScript + Vite
- Estilos: Tailwind
- Canal principal de conversión: WhatsApp
- Canal secundario: Instagram
- Productos destacados: JSON local
- Precio visible en landing: sí
- Hosting preferido para MVP: Vercel

## Justificación
- El producto actual no exige backend desde el día 1
- La prioridad es validar experiencia, identidad y conversión
- Una base más compleja sería prematura

## Consecuencias
### Positivas
- menor complejidad inicial
- iteración visual rápida
- menor costo de despliegue

### Negativas
- si el proyecto crece, habrá que definir contrato de datos y posiblemente una capa adicional
- ciertos features futuros exigirán revisar esta decisión
