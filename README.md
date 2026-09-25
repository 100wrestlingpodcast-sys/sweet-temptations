# JB Sweet Temptations — Piloto Web Móvil

Sitio web estático de presentación comercial para **JB Sweet Temptations** (*Coffee • Bakery • Cake Design*) en Magnolia, Texas.

---

## 🌟 Características implementadas

1. **Diseño Mobile-First estilo App**:
   - Cabecera fija compacta con menú de hamburguesa a la izquierda, logotipo oficial en PNG transparente blanco con contorno fino y selector de idioma bilingüe instantáneo (ES / EN).
   - Menú lateral deslizante accesible con trampa de foco, enlaces de navegación y botón de acción directa «Ordenar en DoorDash».
   - Barra de acción rápida inferior fija en móvil (Llamar, Menú, Cómo llegar, Facebook) con soporte para áreas seguras (`env(safe-area-inset-bottom)`).
   - Portada moderna ultra compacta (altura ~240–280 px en móvil, 280–300 px en escritorio): Fondo negro profundo `#090909` con transición suave hacia el rosa del producto, emblema blanco grande de alto contraste (115–165 px) y texto conciso a la izquierda, y producto protagonista (`hero-cookie-clean.png`) anclado directamente al borde derecho del viewport (*full right bleed*, sin franjas vacías y con la comida nítida).

2. **Integración autorizada de pedidos externos (DoorDash)**:
   - Botón directo «Ordenar en DoorDash» / «Order on DoorDash» en la sección del menú y en la navegación lateral apuntando a `https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/`.
   - Implementado como enlace externo estándar seguro (`target="_blank" rel="noopener noreferrer"`), preservando las acciones de llamada y sin inventar pasarelas de pago propias.

2. **Identidad Visual y Paleta**:
   - Fondo: `#FFF9F7` (crema suave)
   - Rosa: `#F1DCE5`
   - Fucsia: `#AD246F`
   - Tinta: `#202322`
   - Lima de acento decorativo: `#BEC52A`
   - Tipografía: Titulares serif elegantes del sistema y cuerpo sans-serif de alta legibilidad.

3. **Menú Completo e Informativo (46 productos en 7 categorías)**:
   - Fuente única: `menu-bilingue.json`.
   - Buscador en tiempo real integrado por nombre y descripción en ambos idiomas.
   - Pestañas de filtrado por categoría (Todos, Bebidas embotelladas, Café y espresso, Bebidas frías, Panadería y repostería, Desayunos, Batidas, Postres).
   - Indicador «Desde» / «From» en precios variables.
   - Nota aclaratoria bilingüe sobre precios de referencia online.
   - Llamada directa a la acción para ordenar por teléfono.

4. **Galería Fotográfica Interactiva**:
   - 8 imágenes seleccionadas con visor modal (Lightbox) accesible, navegación por teclado (← / → / Esc) y leyendas bilingües.

5. **Ubicación, Contacto y Horarios Confirmados**:
   - Dirección: 126 Roy St, Suite C, Magnolia, TX 77354.
   - Teléfono: `(281) 758-9186` con enlace directo `tel:+12817589186`.
   - Correo: `jbsweettemptations.bv@gmail.com`.
   - Instagram: `https://www.instagram.com/jb_sweet_temptations/` (`@jb_sweet_temptations`).
   - Facebook: `https://www.facebook.com/profile.php?id=100050669865718` (`JB Sweet Temptations LLC`).
   - Enlace directo a indicaciones de Google Maps al local exacto.
   - Horario semanal completo con indicador dinámico de estado abierto/cerrado según la zona horaria de Magnolia, Texas (`America/Chicago`).

---

## 📁 Estructura del proyecto

```text
sweet-temptations/
├── public/                 <-- Directorio que se publica en Netlify
│   ├── index.html          <-- Estructura semántica accesible bilingüe
│   ├── styles.css          <-- Estilos y diseño responsive
│   ├── app.js              <-- Lógica interactiva y datos del menú
│   ├── robots.txt          <-- Bloqueo de rastreadores en fase piloto
│   ├── data/
│   │   └── menu.json       <-- Datos del menú en formato JSON
│   └── assets/             <-- 13 fotografías originales
├── assets/                 <-- Fotografías originales preservadas
├── menu-bilingue.json      <-- Fuente de datos original
├── MENU-RECOPILADO.md      <-- Documentación del menú
├── PROMPT-ANTIGRAVITY.md   <-- Brief y especificaciones del proyecto
├── netlify.toml            <-- Configuración de publicación (publish = "public")
└── README.md               <-- Este archivo
```

---

## 💻 Vista previa local

Para previsualizar el sitio localmente sin dependencias externas:

```bash
# Opción 1: Con Python 3
python3 -m http.server 8080 --directory public

# Opción 2: Con Node (npx serve)
npx serve public
```

Luego abre en el navegador: [http://localhost:8080](http://localhost:8080)

---

## 🚀 Despliegue en Netlify (Pasos futuros)

1. Conectar el repositorio de GitHub a Netlify.
2. Netlify detectará automáticamente el archivo `netlify.toml` con la regla `publish = "public"`.
3. No requiere comando de compilación (`build`).
4. **Importante antes de publicar en producción**:
   - Retirar `<meta name="robots" content="noindex, nofollow">` en `public/index.html`.
   - Actualizar `public/robots.txt` para permitir la indexación por motores de búsqueda (`Allow: /`).

---

## 📋 Pendientes reales para la versión final

1. **Confirmación de precios con el negocio**:
   - Validar con Beatriz los precios transcritos literalmente de la plataforma online (especialmente *Café negro* $7.25 y *Espresso doble* $0.75).
2. **Logotipo en PNG transparente**:
   - Si el negocio dispone de un archivo vectorial o PNG sin fondo en alta resolución, actualizarlo en `public/assets/`.
3. **Fotografías adicionales de productos**:
   - En futuras etapas se pueden incorporar fotos de los waffles individuales, batidas y porciones de cheesecake cuando el negocio las proporcione.
4. **Horarios de días festivos**:
   - Añadir excepciones o avisos de temporada cuando la administración los comunique.
