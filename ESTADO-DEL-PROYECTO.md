# 📋 Estado del proyecto — Master Health Care Center LLC

**Última actualización:** 21 de septiembre de 2026
**Sitio en vivo:** https://masterhealthcaremiami.com 🟢 (con HTTPS 🔒)

Este documento resume TODO lo hecho y lo que falta, para retomar fácil más adelante.

---

## ✅ LO QUE YA ESTÁ HECHO

### 1. Sitio web
- Web profesional **bilingüe (inglés/español)**, responsive (móvil + PC), con los colores del logo.
- Secciones: inicio, servicios, TMS, condiciones, banda "Recuperación es posible", nuevos pacientes, referidos, seguros, nosotros, equipo, contacto (con mapa y formularios), reseñas.
- **En vivo** en https://masterhealthcaremiami.com con candado HTTPS activo (http redirige a https).

### 2. Dominio
- **masterhealthcaremiami.com** — comprado en **Namecheap** (con privacidad WhoisGuard).
- DNS configurado en Namecheap → Advanced DNS → Host Records:
  - 4 registros **A** con Host `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
  - 1 registro **CNAME** → Host `www` → `yasmanipaz89.github.io.`
  - 1 registro **TXT** (verificación Google) → Host `@` → `google-site-verification=erzJEGY0tM-xq6oBOIiMitV7jM3tRwlO-mBamwBjejg`
  - (No tocar el TXT del correo `v=spf1...` que está en Mail Settings.)

### 3. Hosting / código
- Publicado GRATIS en **GitHub Pages**.
- Repositorio: **https://github.com/Yasmanipaz89/masterhealthcaremiami** (rama `master`).
- La carpeta local del proyecto está en el **Escritorio**: `Master Health Care Center`.

### 4. Google Search Console
- Propiedad de **Dominio** verificada (con el Gmail del negocio).
- **Sitemap enviado:** `https://masterhealthcaremiami.com/sitemap.xml`
- Google ya empezará a rastrear e indexar (aparecer en búsquedas tarda de días a ~2 semanas).

### 5. Google Business Profile
- El negocio **ya tenía perfil creado y verificado** (lo administra la cuenta del negocio).
- **Web enlazada** al perfil ✅
- **Horario corregido** a Lun–Vie 9:00 AM – 4:30 PM (igual en web y Google).

### 6. Reseñas
- **Enlace de reseña de Google:** https://g.page/r/CVt_mLTN2EIfEBM/review
- Botón **"Deja tu reseña en Google"** puesto en la web (contacto + footer).
- Mensaje bilingüe listo para pedir reseñas (ver sección abajo).

---

## 📇 DATOS OFICIALES (NAP) — usar idénticos en todos lados
- **Nombre:** Master Health Care Center LLC
- **Dirección:** 85 Grand Canal Dr, Suite 203, Miami, FL 33144
- **Teléfono:** 786-536-7816
- **Fax:** 786-550-2331
- **Email:** Adm.masterhealthcare@gmail.com (y masterhealthcare1710@gmail.com)
- **Horario:** Lunes a Viernes, 9:00 AM – 4:30 PM

---

## 🔑 ACCESOS IMPORTANTES (dónde entra cada cosa)
- **Dominio:** Namecheap (cuenta del negocio) → Domain List → masterhealthcaremiami.com → Manage → Advanced DNS
- **Código/hosting:** GitHub, cuenta **Yasmanipaz89** → repo `masterhealthcaremiami`
- **Google Search Console + Business Profile:** con el **Gmail del negocio** (el mismo para ambos)
- **Carpeta del proyecto:** Escritorio → `Master Health Care Center`

---

## ⏳ PENDIENTES (para continuar más adelante)

### Terminar el perfil de Google Business (sube el "Profile Strength")
- [ ] **Descripción** del negocio (texto con palabras clave — está listo, ver abajo)
- [ ] **Servicios** (Edit services): Psychiatric Evaluation, Medication Management, TMS Therapy, PSR, Individual/Group/Family Therapy, Telehealth
- [ ] **Fotos**: logo (`assets/img/logo.png`) + fachada/edificio + oficina
- [ ] Confirmar horario 4:30 PM y los 5 días en Google

### Conseguir reseñas
- [ ] Pedir a 5–10 pacientes/familiares de confianza para arrancar
- [ ] Responder cada reseña

### Mejoras de contenido en la web (requieren datos del negocio)
- [ ] **Seguros que aceptan** (Medicaid/Medicare/privados) — importante para captación y SEO
- [ ] **Proveedores reales** (nombres, credenciales, idiomas, bio, foto)
- [ ] **Fotos reales** de la clínica/equipo (reemplazar la de stock de la banda)

### Técnico / SEO (fase 2)
- [ ] **Formulario seguro HIPAA** (hoy el formulario abre el correo — no apto para datos médicos sensibles). Cambiar en `assets/js/main.js` (constante `ADMIN_EMAIL` / función `handleForm`).
- [ ] Versión `/es/` indexable (páginas en español reales, no solo el botón)
- [ ] Páginas dedicadas por servicio (ej. "TMS Therapy Miami") para rankear en más búsquedas
- [ ] Corregir directorio NPI/NPPES (aparecía tel 786-536-7819 erróneo)
- [ ] Registrarse en directorios: Psychology Today, Healthgrades, Zocdoc, Yelp (con el NAP idéntico)

---

## 🔄 CÓMO ACTUALIZAR LA WEB (para el futuro)
1. Editar los archivos en la carpeta del Escritorio `Master Health Care Center`.
2. Abrir una terminal en esa carpeta y ejecutar:
   ```
   git add -A
   git commit -m "descripción del cambio"
   git push
   ```
3. GitHub Pages redespliega solo en ~1 minuto → la web en vivo se actualiza.
   *(Claude Code también puede hacer estos cambios cuando se le pida.)*

---

## ✍️ CONTENIDO LISTO PARA USAR

### Descripción para Google Business Profile
```
Master Health Care Center LLC is a bilingual (English/Spanish) mental and behavioral health clinic in Miami, FL. We provide compassionate, individualized care including psychiatric evaluation, medication management, TMS therapy, psychosocial rehabilitation (PSR), and individual, group, and family therapy, plus telehealth appointments. Our team supports patients experiencing depression, anxiety, PTSD, bipolar disorder, ADHD, stress, trauma, and more. We work with each patient on a personalized treatment plan focused on recovery, independence, and quality of life. Now accepting new patients and referrals. Call 786-536-7816 to request an appointment.
```

### Mensaje para pedir reseñas (bilingüe, con enlace)
```
🇪🇸 ¡Hola! Gracias por confiar en Master Health Care Center. Si tuviste una
buena experiencia, ¿nos ayudarías con una reseña en Google? Toma menos de
1 minuto y ayuda a que más personas encuentren apoyo. 🙏
👉 https://g.page/r/CVt_mLTN2EIfEBM/review

🇺🇸 Hi! Thank you for trusting Master Health Care Center. If you had a good
experience, would you leave us a quick Google review? It takes less than a
minute and helps others find care. 🙏
👉 https://g.page/r/CVt_mLTN2EIfEBM/review
```

---

© 2026 Master Health Care Center LLC.
