# Piloto JB Sweet Temptations — instrucciones para Antigravity

Construye una web estática de presentación para JB Sweet Temptations, Coffee • Bakery • Cake Design, en Magnolia, Texas. Usa la carpeta assets junto a este documento. Implementa el proyecto completo en esta carpeta, sin modificar las fotografías originales. GitHub será el repositorio y Netlify el hosting. No publiques ni crees un repositorio automáticamente.

## Objetivo y coste
Mostrar productos y facilitar visitas y órdenes por teléfono. Sin tienda, carrito, pagos, registro, backend, servicios de traducción, generación de imágenes ni APIs de pago. Usa HTML, CSS y JavaScript sencillos, sin dependencias si no hacen falta. Completa una versión coherente y una revisión; evita regeneraciones y exploraciones repetitivas. No investigues nuevamente Facebook: los materiales ya están seleccionados.

## Identidad visual
Las fotos muestran rosa pálido, fucsia, negro, blanco y acentos amarillo lima. Paleta propuesta aproximada, no colores oficiales: fondo #FFF9F7, rosa #F1DCE5, fucsia #AD246F, tinta #202322 y lima #BEC52A. Usa el lima solo como acento decorativo. Mantén contraste accesible. Titulares serif elegantes y cuerpo sans-serif legible; usa fuentes del sistema para evitar descargas externas. Curvas decorativas muy discretas inspiradas en las paredes del local. Mucho espacio y fotografías grandes, sin carruseles automáticos.

## Fotografías disponibles y función
Todos los nombres siguientes son relativos a assets/:
- logo-transparent-outline.png: logo oficial blanco en PNG transparente con fino contorno oscuro. Sustituye al JPG anterior sobre fondo negro en cabecera, hero y pie, eliminando placas y sombras negras.
- 558154897_1465597351805913_4426910041151400340_n.jpg: logo JPG original histórico archivado.
- 586476472_1515234166842231_810892865077168961_n.jpg: retrato aportado para representar a la dueña (archivado para uso futuro).
- hero-dessert.avif: fotografía panorámica (1000x300) de croissants, galletas y bebidas sobre tabla. Usada como protagonista en la portada/hero anclada a la derecha del viewport (full bleed) con degradado suave desde negro #090909 a la izquierda.
- assets/menu/: 40 fotografías oficiales descargadas correspondientes a los productos de DoorDash. 10 productos no tienen fotografía y no se les inventa ni recicla ninguna.
- 795385925_1800503994981912_1501729458452053321_n.jpg: bizcocho verde, tarjeta de bizcochos.
- 802002945_1787514172947561_8124437263232924631_n.jpg: bizcocho rosa, galería.
- 797007150_1800503981648580_3422256932092805356_n.jpg: bizcocho empacado, galería.
- 794484928_1800491691649809_759161568872566410_n.jpg: detalle de galleta, tarjeta de galletas. No afirmar ingredientes a partir de la imagen.
- 796355415_1800491688316476_6052885699826384766_n.jpg: anuncio Birthday Cake Cookie. Tiene texto incrustado en inglés. Reservar para ampliación de galería y acompañar de descripción española equivalente; no usarlo como único contenido traducible.
- 802457471_1787510039614641_2829147288766330794_n.jpg: café y croissant, tarjeta de desayuno. Contiene texto inglés; acompañar de descripción localizada.
- 802459150_1788534006178911_6926317453327347871_n.jpg: avena, pan sobao y café, galería de desayuno. Contiene texto inglés; acompañar de descripción localizada.
- 800001221_1786452166387095_2136119658881553182_n.jpg: interior, imagen ancha para sección del local e inspiración cromática.
- 558247114_1475533207478994_5316422531804397070_n.jpg: rótulo exterior, sección del local.
- 806176914_1789552409410404_8494141078597211720_n.jpg: fachada, ubicación.
- 797962117_1784470283251950_2218267205885328154_n.jpg: corte de cinta, galería opcional. No inventar nombres de las personas ni fecha.

## Estructura
Cabecera fija compacta: hamburguesa de tres líneas a la izquierda, logo centrado, selector ES/EN a la derecha. Menú lateral con Inicio, Productos, Galería, Nuestra historia y Ubicación. Incluir Menú de comida con la selección documentada abajo. Servicios solo si hay contenido confirmado. El menú lateral debe cerrar al seleccionar enlace, tocar fuera o pulsar Escape; gestionar foco y devolverlo al botón. Etiquetas accesibles traducidas.

Portada compacta y moderna: fondo negro #090909 a la izquierda con emblema blanco grande (115–165 px), titular y botones Ver menú / Llamar; a la derecha fotografía de repostería (hero-dessert.avif) anclada al borde derecho e integrada con degradado suave.
ES: «La vida es más dulce aquí.» / «Café, repostería y galletas artesanales en Magnolia.»
EN: «Life is sweeter here.» / «Coffee, pastries and artisan cookies in Magnolia.»

Productos: Café y desayunos / Coffee & breakfast; Bizcochos / Cakes; Galletas y repostería / Cookies & pastries. Usar fotos reales. Descripciones breves sin prometer disponibilidad diaria, ingredientes, dietas especiales ni precios.

Historia: texto breve propuesto: «JB Sweet Temptations reúne café, repostería y diseño de bizcochos en Magnolia.» / «JB Sweet Temptations brings coffee, pastries and cake design together in Magnolia.» No inventar trayectoria, premios ni testimonios.

Galería con seis a ocho imágenes, ampliación accesible, cierre por Escape y textos alternativos localizados. Preservar cualquier texto incorporado en las fotos y ofrecer su significado en texto HTML traducido; no afirmar que los píxeles de esos anuncios cambian de idioma.

Ubicación con foto de fachada, dirección y horarios cuando se confirmen. Botones «Llamar para ordenar» / «Call to order» y «Cómo llegar» / «Get directions». Cuando los datos estén listos, usar tel: y un enlace de indicaciones al lugar exacto. Barra inferior móvil con esas acciones y espacio reservado para no tapar contenido ni el área segura del dispositivo. Mientras falten datos, ocultar las acciones correspondientes y mostrar como alternativa «Ver Facebook» / «View Facebook». No crear botones falsos o enlaces #.

Facebook proporcionado por el cliente: https://www.facebook.com/profile.php?id=100050669865718

## Información pendiente y fuentes
Datos confirmados por capturas aportadas por el usuario:
- Dirección: 126 Roy St, Suite C, Magnolia, TX 77354, United States.
- Teléfono visible: (281) 758-9186. Enlace: tel:+12817589186.
- Correo: jbsweettemptations.bv@gmail.com. Enlace: mailto:jbsweettemptations.bv@gmail.com.
- Instagram oficial: https://www.instagram.com/jb_sweet_temptations/ (@jb_sweet_temptations).
- Nombre mostrado para Messenger / Facebook: JB Sweet Temptations LLC (https://www.facebook.com/profile.php?id=100050669865718).
- Indicaciones: https://www.google.com/maps/dir/?api=1&destination=126%20Roy%20St%20Suite%20C%2C%20Magnolia%2C%20TX%2077354
Activar ya Llamar para ordenar y Cómo llegar, incluidos los botones inferiores móviles, usando estos enlaces. Mostrar correo en contacto. No es necesario esperar más confirmación de esos datos. Comprobar el enlace de Maps en la revisión para evitar seleccionar otro negocio con nombre similar.
Horario confirmado por captura aportada por el usuario:
- Lunes a viernes: 7:00 a. m.–4:00 p. m.
- Sábado: 8:00 a. m.–6:00 p. m.
- Domingo: 8:00 a. m.–2:00 p. m.
En inglés: Monday–Friday: 7 AM–4 PM; Saturday: 8 AM–6 PM; Sunday: 8 AM–2 PM.
Mostrarlo en Ubicación y contacto. Horario local de Magnolia, zona America/Chicago. No inventar horarios de días festivos ni un estado abierto/cerrado que ignore esa zona horaria.
El usuario aportó una captura del menú de Google y pidió utilizarlo. Activar la sección Menú con la selección bilingüe documentada abajo. Incluir precios online como referencia con la nota bilingüe de menu-bilingue.json; no presentarlos como precios presenciales confirmados.

Un artículo de Community Impact del 28 de agosto de 2025 identifica a Beatriz Vega como dueña y menciona 126 Roy St., Magnolia. Es una referencia anterior a la apertura. Las capturas posteriores del usuario completan la dirección con Suite C y código postal 77354, y tienen prioridad para los datos de contacto. Una tercera captura del usuario confirma el horario semanal registrado arriba.
Fuente: https://communityimpact.com/tomball-magnolia/business/new-magnolia-bakery-to-serve-up-cakes-pastries-culture-on-roy-street/

Existe una tienda oficial en DoorDash. El cliente autorizó integrar el enlace directo externo HTTPS (https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/) con target="_blank" rel="noopener noreferrer" en la navegación lateral y en la sección del menú («Ordenar en DoorDash» / «Order on DoorDash»), manteniendo las opciones de «Ver menú» y «Llamar». Sin carrito propio ni pagos en la web.
Referencia y enlace de pedidos: https://www.doordash.com/store/jb-sweet-temptations-magnolia-51904045/

## Idiomas
Español por defecto; inglés con cambio instantáneo y preferencia en localStorage. Centralizar todas las cadenas en dos diccionarios con claves idénticas. Traducir navegación, botones, encabezados, párrafos, estados, etiquetas accesibles, pies y descripciones de imágenes. Actualizar html lang y título del documento. Conservar JB Sweet Temptations como nombre propio. No usar traducción automática por visita.

## Rendimiento, Netlify y entrega
Usar assets locales y rutas relativas. Cargar la portada con prioridad y las imágenes inferiores con lazy loading, dimensiones explícitas y tamaños adecuados. Evitar grandes ampliaciones de los JPG. Sin mapas incrustados de pago. Respetar prefers-reduced-motion.
Sitio estático en la raíz del proyecto: index.html, styles.css, app.js, datos y assets. Añadir netlify.toml con publish = "." dentro de [build], sin comando de build si no es necesario. No publicar documentos internos; configurar rutas 404 para este prompt y la documentación o mantenerlos fuera de la carpeta de publicación si se decide separar public/.
Poner noindex en el piloto y documentar su retirada al aprobar el sitio definitivo. No incluir secretos, rastreadores ni formularios sin función.
Entregar README breve con vista previa local, pasos para conectar GitHub a Netlify, carpeta a publicar y campos pendientes. No afirmar que el sitio está publicado.

## Verificación
Comprobar móvil a 360 y 390 px, tableta a 768 y escritorio a 1440. Sin desbordamiento horizontal. Revisar rostro, manos y base del bizcocho en portada; logo legible; menú con teclado; foco visible; textos ES/EN completos; cierre de galería; ausencia de imágenes rotas. Comprobar destino exacto de llamada e indicaciones con los datos confirmados arriba. Informar claramente qué quedó pendiente.


## Menú completo recopilado: instrucciones definitivas
Usar menu-bilingue.json como fuente única para el menú. Sustituye cualquier selección parcial anterior. MENU-RECOPILADO.md permite revisarlo cómodamente. Implementar todos los productos y las siete categorías, sin duplicar los destacados de DoorDash. Mostrar precios USD, preservando «desde» / «from» cuando from=true, y la nota bilingüe notice. Conservar las descripciones disponibles; description=null significa que no se recuperó descripción y no debe inventarse. Las notas review_note son internas, no texto comercial. Antes de publicar el sitio final confirmar los importes señalados con el negocio.
La recopilación contiene todos los productos expuestos por la fuente pública consultada, más Latte de la captura del usuario; no asegura capturar modificadores, suplementos u opciones que la fuente no expone. No inventarlos. No atribuir a Google la autoría del menú del proveedor. Mantener el horario confirmado por el usuario.
Botón final Llamar para ordenar / Call to order, tel:+12817589186. Sin carrito ni venta online. Añadir un buscador simple y filtros de categoría accesibles si mejora la navegación móvil; traducir también resultados vacíos y etiquetas.
