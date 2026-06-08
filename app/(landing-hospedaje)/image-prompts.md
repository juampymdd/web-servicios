# VILLAGIO — Prompts de imágenes

Landing de **casas de madera a medida** (marca VILLAGIO, verde `#5a8a1f`, Rumanía).
8 imágenes. Pegá cada prompt en tu generador (Midjourney / DALL·E / Flux / Firefly).
Sufijo de estilo recomendado al final de cada prompt: `architectural photography, natural daylight, ultra sharp, 8k, photorealistic`.

> Guía de coherencia: misma estación (verano/finales de primavera), cielo despejado o
> parcialmente nublado, vegetación verde, luz cálida de hora dorada suave. Sin texto,
> sin marcas de agua, sin gente mirando a cámara.

---

## 1. Hero — exterior principal
- **Uso:** `<section>` HERO, fondo a ancho completo con degradado oscuro a la izquierda.
- **Aspecto / tamaño:** 16:9 — exportar **1600×900** (mín. 1400px ancho).
- **Encuadre:** sujeto a la derecha/centro (izquierda queda bajo el degradado y el texto). `objectPosition: center 30%`.
- **Prompt:**
  > Modern wooden cabin house exterior in a green Romanian countryside meadow, warm natural larch wood cladding, large floor-to-ceiling black-framed windows, pitched roof, surrounded by pine trees and soft hills, golden hour side light, clear blue sky with a few clouds, wide cinematic angle, subject positioned right of frame with open meadow on the left — architectural photography, natural daylight, ultra sharp, 8k, photorealistic

---

## 2–7. Catálogo de proyectos (tarjetas)
- **Uso:** grid de 6 tarjetas. Cada `img` mide ~360×160 px en card.
- **Aspecto / tamaño:** 3:2 — exportar **1200×800** (recorte limpio a 160px alto).
- **Encuadre:** la casa centrada, fondo simple, espacio para badge verde arriba-izquierda.

### 2. Case Tip Ambar (estilo granero / barn)
> Modern barn-style wooden house, dark vertical timber cladding, steep gabled roof, single large gable window, minimalist Scandinavian-barn design, green lawn foreground, soft overcast daylight, centered composition — architectural photography, ultra sharp, 8k, photorealistic

### 3. Case Tip A-frame
> Cozy A-frame wooden cabin, triangular silhouette, full-height glass front gable, natural wood and black metal roof, set in a forest clearing with pine trees, soft morning light, centered composition — architectural photography, ultra sharp, 8k, photorealistic

### 4. Case din Lemn (casa de madera clásica)
> Classic single-story log/timber family house, honey-colored wood walls, covered porch, pitched shingle roof, neat green garden, warm afternoon sunlight, friendly inviting look, centered composition — architectural photography, ultra sharp, 8k, photorealistic

### 5. Foisoare si Carport-uri (pérgolas y carports)
> Wooden garden gazebo and open carport structure, exposed timber beams, slatted roof, paved patio, lush green backyard, lounge furniture under the gazebo, soft daylight, centered composition — architectural photography, ultra sharp, 8k, photorealistic

### 6. Saune modulare (saunas modulares)
> Modular outdoor barrel and cube sauna in natural wood, small chimney, by a wooden deck near trees, steam atmosphere, evening warm light glowing from a small window, centered composition — architectural photography, ultra sharp, 8k, photorealistic

### 7. Case Hi-tech (casa moderna de alta gama)
> High-tech modern modular house, clean cubic volumes, wood and dark composite panels, large glass walls, flat green roof, integrated LED lighting, minimalist landscaping, dusk blue-hour light, centered composition — architectural photography, ultra sharp, 8k, photorealistic

---

## 8. Contacto — casa modelo
- **Uso:** bloque del formulario, imagen redondeada a la derecha con degradado inferior.
- **Aspecto / tamaño:** 4:3 — exportar **1200×900**.
- **Encuadre:** casa atractiva, espacio en la parte inferior (queda bajo degradado oscuro).
- **Prompt:**
  > Beautiful finished wooden family house with warm interior lights on at dusk, large windows glowing, manicured green lawn and stone path, welcoming home atmosphere, soft blue-hour sky, slight low angle, room at the bottom of the frame — architectural photography, ultra sharp, 8k, photorealistic

---

## Notas técnicas
- Servir en **WebP/AVIF** (Next.js `<Image>` optimiza; este código usa `<img>` plano — considerar migrar a `next/image`).
- Hero ≤ **250 KB**, tarjetas ≤ **80 KB** cada una (calidad 80, recorte exacto).
- Mismo tratamiento de color en las 8 (verde vegetación + luz cálida) para coherencia de marca.
- Reemplazar las URLs `images.unsplash.com` por `/img/...` locales una vez generadas.
