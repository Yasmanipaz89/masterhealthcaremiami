/* ===== Master Health Care Center LLC — site scripts ===== */
(function () {
  'use strict';

  /* Year */
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  /* Mobile nav */
  var navToggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('primary-nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ===== Language toggle (EN / ES) =====
     Elements carry data-en / data-es. We swap textContent.
     Placeholders use data-en-ph / data-es-ph. */
  var STORE_KEY = 'mhcc.lang';
  var btn = document.getElementById('lang-toggle');
  var label = document.getElementById('lang-label');

  function applyLang(lang) {
    var isES = lang === 'es';
    document.documentElement.lang = isES ? 'es' : 'en';

    document.querySelectorAll('[data-en]').forEach(function (el) {
      var val = isES ? el.getAttribute('data-es') : el.getAttribute('data-en');
      if (val != null) el.textContent = val;
    });
    document.querySelectorAll('[data-en-ph]').forEach(function (el) {
      var val = isES ? el.getAttribute('data-es-ph') : el.getAttribute('data-en-ph');
      if (val != null) el.setAttribute('placeholder', val);
    });

    // The toggle shows the OTHER language (what you can switch to)
    if (label) label.textContent = isES ? 'English' : 'Español';

    try { localStorage.setItem(STORE_KEY, lang); } catch (e) {}
  }

  var saved = 'en';
  try {
    saved = localStorage.getItem(STORE_KEY) ||
      ((navigator.language || 'en').toLowerCase().indexOf('es') === 0 ? 'es' : 'en');
  } catch (e) {}
  applyLang(saved);

  if (btn) {
    btn.addEventListener('click', function () {
      applyLang(document.documentElement.lang === 'es' ? 'en' : 'es');
    });
  }

  /* ===== Forms =====
     No backend yet: we open the user's email client with a prefilled,
     NON-sensitive message so the request reaches the office. Replace with a
     HIPAA-compliant form endpoint before production (see README). */
  var ADMIN_EMAIL = 'Adm.masterhealthcare@gmail.com';

  function handleForm(form, subjectEN, subjectES) {
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = form.querySelector('[data-status]');
      var isES = document.documentElement.lang === 'es';

      // basic required validation
      var missing = false;
      form.querySelectorAll('[required]').forEach(function (f) {
        if (!f.value.trim()) { missing = true; f.style.borderColor = '#d9534f'; }
        else { f.style.borderColor = ''; }
      });
      if (missing) {
        if (status) {
          status.hidden = false;
          status.className = 'form-status err';
          status.textContent = isES
            ? 'Por favor completa los campos obligatorios.'
            : 'Please complete the required fields.';
        }
        return;
      }

      // Build a plain-text body (fields are non-PHI lead info)
      var lines = [];
      var data = new FormData(form);
      data.forEach(function (v, k) {
        if (v && String(v).trim()) lines.push(k.replace(/_/g, ' ') + ': ' + v);
      });
      var subject = isES ? subjectES : subjectEN;
      var body = (isES
        ? 'Solicitud enviada desde el sitio web:\n\n'
        : 'Request submitted from the website:\n\n') + lines.join('\n');

      var mailto = 'mailto:' + ADMIN_EMAIL +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);

      window.location.href = mailto;

      if (status) {
        status.hidden = false;
        status.className = 'form-status ok';
        status.textContent = isES
          ? '¡Gracias! Se abrió tu correo para enviar la solicitud. Si no se abrió, llámanos al 786-536-7816.'
          : 'Thank you! Your email opened to send the request. If it did not, please call us at 786-536-7816.';
      }
      form.reset();
    });
  }

  handleForm(
    document.getElementById('appointment-form'),
    'Appointment Request — Master Health Care Center',
    'Solicitud de Cita — Master Health Care Center'
  );
  handleForm(
    document.getElementById('referral-form'),
    'Patient Referral — Master Health Care Center',
    'Referido de Paciente — Master Health Care Center'
  );
})();
