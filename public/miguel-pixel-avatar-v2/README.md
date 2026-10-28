# Miguel — avatar caricatura pixel art

Versión de caricatura con cabeza más pequeña, rasgos simples y píxeles grandes. Basada en tus señas personales: slick back, barba, anteojos de marco metálico, tatuajes estilizados y una monstera. Los tatuajes interpretan los motivos visibles; no son una reproducción exacta.

## Archivos y usos

- `favicon/favicon.ico`: incluye 16, 32 y 48 px.
- `favicon/favicon-32.png`: alternativa PNG para la pestaña.
- `navbar/miguel-head-128.png`: sugerido para navbar a 40–48 px de ancho.
- `navbar/miguel-head-256.png`: perfil, tarjetas o menú móvil.
- `navbar/miguel-head-original.png`: rostro original de 1254 × 1254 px.
- `character/miguel-with-plant-256.png`: sugerido para About o saludo a 128–192 px de ancho.
- `character/miguel-with-plant-original.png`: personaje original de 1024 × 1536 px.

Los PNG conservan transparencia. Las variantes de tamaño se exportaron con vecino más cercano para conservar los bordes del pixel art. No son SVG ni animaciones.

## Integración HTML

Copiá los archivos que usés a tu carpeta pública y ajustá las rutas:

```html
<link rel="icon" href="/favicon.ico" sizes="any" />
<link rel="icon" type="image/png" href="/favicon-32.png" sizes="32x32" />
<img src="/miguel-head-128.png" width="40" height="40" alt="Miguel Gnz" style="image-rendering: pixelated" />
```

En Next.js App Router podés poner el ICO en `app/favicon.ico`. Para evitar duplicar el nombre accesible, usá `alt=""` si el avatar es decorativo y el mismo enlace ya contiene el texto Miguel Gnz.

## Dirección visual

El rostro identifica la marca en espacios pequeños. El personaje con planta aporta personalidad en About, contacto o una página 404. Usá el personaje completo en uno o dos lugares para mantener el sitio limpio. El favicon a 16 px es la variante con menor detalle; a 32 px se distinguen mejor los lentes y la barba.

## Variante sin planta

- `character/miguel-no-plant-original.png`: imagen original en alta resolución, sin planta, con pantalón más holgado y tenis blancos tipo Air Force 1.
- `character/miguel-no-plant-256.png`: para colocar a 160 × 240 px en About, a la izquierda del texto.
- `character/miguel-no-plant-512.png`: variante de mayor resolución.

### Ubicaciones del mock-preview

1. Favicon: rostro en la pestaña del navegador, versiones de 16/32 px.
2. Navbar: rostro de 40 × 40 px a la izquierda de MIGUEL GNZ. Usar `navbar/miguel-head-128.png`.
3. About: personaje completo sin planta a la izquierda del texto, a 160 × 240 px en escritorio. En móvil, centrarlo encima del texto a 144 × 216 px.

El hero conserva su composición tipográfica y la tarjeta Current Signal. El personaje aparece una vez en About. Estas son propuestas visuales; no se modificó ni publicó el sitio real.
