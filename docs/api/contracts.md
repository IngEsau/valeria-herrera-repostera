# API Contracts

## Contratos confirmados para MVP

### 1. Conversión principal
Canal principal: **WhatsApp**
Canal secundario: **Instagram**

#### Regla operativa
- WhatsApp será el destino principal de conversión en la landing.
- Instagram funcionará como canal secundario de confianza y descubrimiento.
- Ambos enlaces deben poder configurarse sin alterar la estructura visual del sitio.

### 2. Productos destacados
Origen de datos para MVP: **JSON local**

#### Regla operativa
- Los productos destacados se cargarán desde un archivo JSON local.
- Este origen permite mantener el MVP frontend-first sin backend confirmado.
- La estructura deberá permitir migración futura a CMS o API sin rediseñar los componentes principales.

### 3. Precio visible
Los productos destacados mostrarán **precio visible** en la landing.
