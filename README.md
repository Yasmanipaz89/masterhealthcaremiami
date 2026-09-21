# Master Health Care Center LLC — Sitio web

Sitio web bilingüe (inglés / español) para **Master Health Care Center LLC**, clínica de
salud mental y conductual en Miami, FL. Enfocado en **captación de pacientes** y **referidos**,
optimizado para posicionamiento en Google (SEO local).

## Contenido de la carpeta

```
Master Health Care Center/
├── index.html            # Página principal (una sola página, con secciones)
├── robots.txt            # Permite indexación + apunta al sitemap
├── sitemap.xml           # Mapa del sitio para Google
├── site.webmanifest      # Metadatos para móvil / PWA
├── README.md             # Este archivo
└── assets/
    ├── css/styles.css    # Diseño con los colores del logo (navy #313745, azul #3E87B2, gris #AAB4BE)
    ├── js/main.js         # Menú móvil, cambio EN/ES, formularios
    └── img/logo.png       # Logo de la empresa
```

## Ver el sitio en tu computadora

Solo haz **doble clic en `index.html`** — abre en el navegador sin instalar nada.

## Datos de la empresa (ya integrados)

- **Dirección:** 85 Grand Canal Dr, Suite 203, Miami, FL 33144
- **Teléfono:** 786-536-7816 · **Fax:** 786-550-2331
- **Email:** Adm.masterhealthcare@gmail.com (y masterhealthcare1710@gmail.com)
- **Horario configurado:** Lun–Vie 9:00 AM – 5:00 PM  *(confirmar el real)*

---

## ⚠️ ANTES DE PUBLICAR — confirmar con el cliente

Según lo que indicaste, **hay que confirmar qué servicios está realmente autorizado y
preparado a ofrecer Master Health Care Center LLC** antes de anunciarlos. La web incluye
todos los del borrador; si alguno NO aplica, se quita:

- [ ] Psychiatric Evaluation
- [ ] Medication Management
- [ ] **TMS Therapy** (equipo/servicio real disponible?)
- [ ] PSR (Psychosocial Rehabilitation)
- [ ] Individual / Group / Family Therapy
- [ ] Telehealth
- [ ] Care Coordination

Otros pendientes de confirmar:
- [ ] **Horario real** de oficina
- [ ] **Seguros aceptados** (Medicaid / Medicare / privados) — importante para SEO y captación
- [ ] **Proveedores** reales (nombres, credenciales, idiomas, bio y foto)
- [ ] ¿Usar el **dominio** `masterhealthcarecenter.com` u otro? (ver más abajo)
- [ ] Coordenadas GPS exactas del `geo` en el schema (ahora son aproximadas)

## ⚠️ Privacidad / HIPAA (importante)

Los formularios **NO deben transmitir información médica sensible**. Hoy funcionan como
"solicitud de contacto" (abren el correo del usuario con datos no sensibles: nombre, teléfono,
seguro, servicio de interés). **Antes de producción**, reemplazar el envío por un
**formulario con backend seguro / compatible con HIPAA** (p. ej. Jotform HIPAA, Formstack,
IntakeQ, o un endpoint propio con BAA). El código está aislado en `assets/js/main.js`
(constante `ADMIN_EMAIL` y función `handleForm`) para cambiarlo en un solo lugar.

---

## Plan de posicionamiento en Google (SEO)

### Ya incluido en el código
- Título y meta-descripción optimizados con palabras clave locales.
- **Datos estructurados** `MedicalClinic` (schema.org JSON-LD): dirección, teléfono, horario,
  idiomas, servicios → habilita resultados enriquecidos y SEO local.
- `robots.txt` + `sitemap.xml`.
- Etiquetas Open Graph / Twitter (para cuando se comparta en redes/WhatsApp).
- `hreflang` EN/ES preparado.
- HTML semántico, rápido, **responsive** (móvil), accesible.

### Pasos para SALIR EN GOOGLE (hacer después de publicar)
1. **Comprar dominio** (ej. `masterhealthcarecenter.com`) y **publicar** el sitio
   (Netlify, Vercel, Hostinger o GoDaddy — gratis/barato). Actualizar todas las URLs
   `https://www.masterhealthcarecenter.com/` en `index.html`, `sitemap.xml`, `robots.txt`.
2. **Google Business Profile** (lo más importante para una clínica local):
   crear/reclamar el perfil en https://business.google.com con la dirección, teléfono,
   horario, fotos y servicios. Esto es lo que más rápido trae pacientes cerca de Miami.
3. **Google Search Console** (https://search.google.com/search-console):
   verificar el dominio y enviar el `sitemap.xml`.
4. **Reseñas de Google**: pedir reseñas a pacientes satisfechos (impulsa el ranking local).
5. **Directorios de salud** (citas NAP consistentes): Psychology Today, Healthgrades,
   Zocdoc, Yelp — con el MISMO nombre/dirección/teléfono.
6. **Contenido / blog** (fase 2): páginas dedicadas por servicio y por palabra clave
   (ej. "TMS Therapy Miami", "Terapia en español Miami", "Psychiatric Evaluation Miami").
   Google posiciona mejor una página específica por tema que una sola general.

### Palabras clave objetivo (Miami, bilingüe)
- mental health Miami / salud mental Miami
- TMS therapy Miami
- psychiatric evaluation Miami / evaluación psiquiátrica Miami
- Spanish speaking psychiatrist Miami / psiquiatra que habla español
- medication management Miami · PSR Miami · telehealth psychiatry Florida

---

## Fase 2 sugerida (mejoras)
- Páginas separadas por servicio (mejor SEO): `/tms`, `/psr`, `/psychiatric-evaluation`, etc.
- Versión `/es/` real (páginas en español indexables, no solo el toggle).
- Formulario seguro HIPAA con backend.
- Fotos profesionales / video en el hero.
- Testimonios (solo cuando sean apropiados y **autorizados**).
- Perfiles reales del equipo clínico.

© 2026 Master Health Care Center LLC.
