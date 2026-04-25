# Deployment

## Objetivo
Desplegar la SPA de forma simple, estable y fácil de iterar durante el MVP.

## Estado actual
La decisión final de plataforma no está cerrada.

## Requisitos mínimos
- Build reproducible
- Despliegue automático desde repositorio
- HTTPS
- Soporte para dominio custom
- Manejo simple de variables de entorno si fueran necesarias
- Bajo costo operativo

## Opciones candidatas
- Vercel
- Netlify
- Cloudflare Pages
- VPS con pipeline manual [solo si existe una razón clara]

## Recomendación provisional
Preferir hosting frontend estático mientras no exista backend.

## Riesgos
- Definir infraestructura antes de cerrar el alcance real
- Elegir una plataforma que complique el workflow sin necesidad
- Introducir configuración operativa innecesaria para un MVP visual
