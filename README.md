# Prototipo WebAR narrativo con MindAR

Este proyecto es una plantilla inicial gratuita para una experiencia que reconoce un afiche y superpone ilustraciones 2D y textos breves.

## Qué incluye

- Reconocimiento de imagen con MindAR.
- Ilustraciones SVG de ejemplo con fondo transparente.
- Tres fragmentos de historia editables.
- Botones anterior/continuar.
- Avance automático opcional cada 6,5 segundos.
- Movimiento flotante básico de la ilustración.

## Importante: falta cargar la imagen real del afiche

El archivo `targets/poster.mind` no se incluye porque se genera a partir de TU afiche. Sin ese archivo, la cámara no podrá reconocer la imagen.

### 1. Generá el archivo de reconocimiento

1. Exportá una imagen clara del afiche como JPG o PNG.
2. Abrí el compilador oficial: https://hiukim.github.io/mind-ar-js-doc/tools/compile/
3. Cargá la imagen del afiche, generá el target y descargá el archivo `.mind`.
4. Guardalo en la carpeta `targets/` con el nombre exacto `poster.mind`.
5. Si el compilador permite más de un target, esta plantilla utiliza el primero (`targetIndex: 0`).

No cambies el diseño del afiche después de generar el target sin volver a compilarlo.

### 2. Personalizá la historia

Editá el arreglo `scenes` en `app.js`:
- `text`: el fragmento de historia.
- `image`: la ruta de la ilustración correspondiente.

Reemplazá `assets/scene-01.svg`, `scene-02.svg` y `scene-03.svg` por tus propias ilustraciones manteniendo esos nombres, o cambiá las rutas en `app.js`. Para transparencias, convienen PNG con fondo transparente o SVG.

### 3. Ajustá la posición

En `index.html`, modificá `position`, `width` y `height` de `#story-image` para ubicar la ilustración respecto del afiche. Modificá `position` y `width` de `#story-label` para ubicar el texto. Las coordenadas están relativas a la imagen reconocida; vas a necesitar probarlas con el afiche real.

### 4. Probalo localmente y publicalo

La cámara requiere un contexto seguro (HTTPS o localhost). No abras `index.html` directamente con doble clic.

Una opción para probarlo en una computadora con Python instalado:
1. Abrí una terminal dentro de la carpeta del proyecto.
2. Ejecutá `python -m http.server 8000`.
3. En esa computadora, abrí `http://localhost:8000`.

Para probar desde el celular, publicá la carpeta en un hosting HTTPS, por ejemplo GitHub Pages. También podés usar un servidor local accesible desde el teléfono, pero puede requerir configuración de red y HTTPS.

### 5. Publicación gratuita con GitHub Pages

1. Creá un repositorio público en GitHub.
2. Subí los archivos y carpetas de este proyecto, incluyendo `targets/poster.mind`.
3. En Settings → Pages, configurá la publicación desde la rama principal y la carpeta raíz.
4. Abrí la URL HTTPS publicada desde tu celular y aceptá el permiso de cámara.
5. Generá un QR que apunte a esa URL y agregalo al afiche impreso.

## Notas

- El navegador debe permitir el acceso a la cámara.
- La experiencia necesita conexión a internet para cargar las librerías CDN, salvo que se configuren copias locales.
- El seguimiento depende de la iluminación, la calidad de impresión y de que el afiche sea reconocible.
- Este prototipo no guarda datos ni envía contenido del usuario a un servidor propio.
