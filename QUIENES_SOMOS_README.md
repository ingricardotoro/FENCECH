# Nueva Sección: Quiénes Somos - FENCECH

## Descripción
Se ha creado una nueva sección completa para "Quiénes Somos" que incluye la historia, misión, visión y valores de FENCECH (Federación Nacional de Centros Educativos Católicos de Honduras).

## Archivos Creados

### 1. Datos de FENCECH (`src/data/fencech-data.ts`)
- **Misión, Visión y Valores**: Información específica de FENCECH
- **Historia Timeline**: Cronología desde 1960 hasta la actualidad
- **Información Institucional**: Estadísticas y datos clave

### 2. Componentes React

#### `src/components/pages/page-layout-one/quienes-somos/FencechHistoryArea.tsx`
- Componente principal para mostrar la historia de FENCECH
- Timeline interactivo con eventos históricos
- Estadísticas institucionales
- Sección de compromiso organizacional

#### `src/components/pages/page-layout-one/quienes-somos/FencechMissionVisionArea.tsx`
- Componente para mostrar misión, visión y valores
- Diseño en cards con iconos
- Información específica de FENCECH

#### `src/components/pages/page-layout-one/quienes-somos/QuienesSomosMain.tsx`
- Componente principal que integra todos los elementos
- Incluye breadcrumbs, historia, misión/visión y CTA

### 3. Página de Ruta (`src/app/(pages)/(page-layout-one)/quienes-somos/page.tsx`)
- Página completa de Next.js 13+ con App Router
- Metadata SEO optimizada para FENCECH
- Integración con DefaultWrapper

### 4. Estilos CSS (`public/assets/scss/layout/pages/_fencech-timeline.scss`)
- Estilos específicos para el timeline histórico
- Diseño responsive para móviles y tablets
- Animaciones y efectos hover
- Integrado en el sistema de estilos existente

### 5. Actualizaciones de Menú
- **Menú Principal** (`src/data/header-menu/main-menu-data.ts`): Enlace directo a "/quienes-somos"
- **Menú Móvil** (`src/data/header-menu/main-mobile-menu-data.ts`): Entrada en "Page Layout 1"

## Características Principales

### Timeline Histórico
- Cronología visual desde 1960 hasta la actualidad
- Diseño alternado (izquierda/derecha) en desktop
- Adaptación completa para dispositivos móviles
- Animaciones suaves y efectos visuales

### Estadísticas Institucionales
- Año de fundación: 1960
- Centros afiliados: 150+
- Estudiantes beneficiados: 100,000+
- Presencia nacional: 18 departamentos

### Información Corporativa
- **Misión**: Animar la evangelización a través de la educación
- **Visión**: Ser la organización líder en educación católica en Honduras
- **Valores**: Principios cristianos, excelencia educativa, solidaridad
- **Lema**: "Educación Católica para la Transformación Social"

## Diseño Responsivo
- **Desktop**: Timeline con diseño alternado
- **Tablet**: Layout simplificado con línea central
- **Móvil**: Timeline vertical con iconos ajustados

## SEO y Accesibilidad
- Metadata optimizada para motores de búsqueda
- Estructura semántica correcta
- Alt text en todas las imágenes
- Navegación accesible

## Integración
La nueva sección está completamente integrada con:
- Sistema de rutas de Next.js
- Sistema de componentes existente
- Arquitectura de estilos SCSS
- Menús de navegación (desktop y móvil)
- Layout y wrapper por defecto

## URL de Acceso
La nueva sección está disponible en: `/quienes-somos`

## Tecnologías Utilizadas
- Next.js 13+ con App Router
- TypeScript
- SCSS con sistema de mixins
- Componentes React funcionales
- Responsive design
- SEO optimization