// --- i18n Dictionary ---
const I18N = {
  id: {
    "meta.title": "nxcloud — PC kamu jadi origin server, tanpa ribet",
    "meta.desc": "Jadikan PC Windows/Linux origin server dengan domain HTTPS sendiri. Satu perintah, tanpa port forwarding, tanpa IP publik, tanpa dependency.",
    "nav.features": "Fitur",
    "nav.how": "Cara Kerja",
    "nav.start": "Mulai",
    "nav.sponsor": "Sponsor",
    "hero.badge": "MIT License · Zero dependency · Open source",
    "hero.t1": "PC kamu jadi",
    "hero.t2": "origin server",
    "hero.t3": "Domain HTTPS sendiri, satu perintah.",
    "hero.desc": "nxcloud menjalankan server Node.js lokal dan mengeksposnya ke internet lewat <strong>Cloudflare Tunnel</strong> — tanpa port forwarding, tanpa IP publik, tanpa VPS.",
    "hero.cta1": "Mulai Sekarang",
    "hero.cta2": "Lihat di GitHub",
    "stat.1": "dependency runtime",
    "stat.2": "file .exe standalone",
    "stat.3": "platform (Windows + Linux)",
    "stat.4": "hostname per tunnel",
    "fit.title": "Kenapa nxcloud?",
    "fit.sub": "Dibangun dari pengalaman nyata — bukan teori.",
    "fit.1t": "Zero dependency runtime",
    "fit.1d": "100% JavaScript murni. Tidak ada <code>npm install</code>, tidak ada <code>node_modules</code>. CLI jalan langsung begitu clone.",
    "fit.2t": "Single executable",
    "fit.2d": "<code>npm run build:exe</code> menghasilkan <code>nxcloud.exe</code> standalone (Node SEA). Distribusi cukup 1 file + cloudflared.",
    "fit.3t": "Tahan banting",
    "fit.3d": "Tunnel tetap jalan meski <code>cloudflared login</code> rusak (bug upstream). DNS record dibuat via REST API Cloudflare — jalur alternatif yang selamat.",
    "fit.4t": "Multi-domain, satu tunnel",
    "fit.4d": "Kelola banyak hostname → banyak service lokal dari satu tunnel. <code>nxcloud route add blog 3000</code> — CNAME + ingress otomatis.",
    "fit.5t": "Mini process manager",
    "fit.5d": "PID management, health check, graceful shutdown, <code>stop/restart</code> dari CLI. Server yang mengelola dirinya sendiri.",
    "fit.6t": "Secure by default",
    "fit.6d": "Bind ke <code>127.0.0.1</code>, bukan <code>0.0.0.0</code>. Satu-satunya pintu ke internet adalah tunnel yang kamu kontrol.",
    "how.title": "Cara kerjanya",
    "how.sub": "Traffic mengalir dari internet ke PC kamu lewat jalur terenkripsi Cloudflare.",
    "how.n1": "Internet",
    "how.n2": "Cloudflare",
    "how.n3": "Tunnel",
    "how.n3s": "(QUIC, outbound)",
    "how.n4": "App lokal",
    "how.note": "Tidak ada port yang dibuka di router. cloudflared membuat koneksi <em>outbound</em> ke Cloudflare — router, firewall, dan CGNAT tidak jadi masalah.",
    "st.title": "Mulai dalam 2 menit",
    "st.sub": "Node.js 18+ dan cloudflared. Itu saja.",
    "st.1t": "Install cloudflared",
    "st.2t": "Clone &amp; jalankan",
    "st.3t": "Hubungkan domain kamu",
    "st.3c": "# → https://app.domainkamu.id siap dipakai",
    "foot.link1": "GitHub Proyek",
    "foot.link2": "Organisasi GitHub",
    "foot.link3": "Menjadi Sponsor",
    "foot.copy": "© 2026 nxcloud — Nusantara eXtreme Development Object Model. Dirilis di bawah lisensi MIT."
  },
  en: {
    "meta.title": "nxcloud — Turn your PC into an origin server, effortlessly",
    "meta.desc": "Turn your Windows/Linux PC into an origin server with your own HTTPS domain. One command, no port forwarding, no public IP, no dependencies.",
    "nav.features": "Features",
    "nav.how": "How It Works",
    "nav.start": "Get Started",
    "nav.sponsor": "Sponsor",
    "hero.badge": "MIT License · Zero dependency · Open source",
    "hero.t1": "Your PC becomes an",
    "hero.t2": "origin server",
    "hero.t3": "Your own HTTPS domain, one command.",
    "hero.desc": "nxcloud runs a local Node.js server and exposes it to the internet via <strong>Cloudflare Tunnel</strong> — no port forwarding, no public IP, no VPS.",
    "hero.cta1": "Get Started",
    "hero.cta2": "View on GitHub",
    "stat.1": "runtime dependencies",
    "stat.2": "standalone .exe file",
    "stat.3": "platforms (Windows + Linux)",
    "stat.4": "hostnames per tunnel",
    "fit.title": "Why nxcloud?",
    "fit.sub": "Built from real-world experience — not theory.",
    "fit.1t": "Zero dependency runtime",
    "fit.1d": "Pure JavaScript, 100%. No <code>npm install</code>, no <code>node_modules</code>. The CLI runs as soon as you clone.",
    "fit.2t": "Single executable",
    "fit.2d": "<code>npm run build:exe</code> produces a standalone <code>nxcloud.exe</code> (Node SEA). Ship just 1 file + cloudflared.",
    "fit.3t": "Battle-tested",
    "fit.3d": "The tunnel keeps running even when <code>cloudflared login</code> is broken (upstream bug). DNS records are created via the Cloudflare REST API — a resilient fallback path.",
    "fit.4t": "Multi-domain, one tunnel",
    "fit.4d": "Manage many hostnames → many local services from a single tunnel. <code>nxcloud route add blog 3000</code> — CNAME + ingress done automatically.",
    "fit.5t": "Mini process manager",
    "fit.5d": "PID management, health checks, graceful shutdown, CLI <code>stop/restart</code>. A server that manages itself.",
    "fit.6t": "Secure by default",
    "fit.6d": "Binds to <code>127.0.0.1</code>, not <code>0.0.0.0</code>. The only door to the internet is a tunnel you control.",
    "how.title": "How it works",
    "how.sub": "Traffic flows from the internet to your PC through Cloudflare's encrypted path.",
    "how.n1": "Internet",
    "how.n2": "Cloudflare",
    "how.n3": "Tunnel",
    "how.n3s": "(QUIC, outbound)",
    "how.n4": "Local app",
    "how.note": "No ports opened on your router. cloudflared makes an <em>outbound</em> connection to Cloudflare — router, firewall, and CGNAT are never a problem.",
    "st.title": "Start in 2 minutes",
    "st.sub": "Node.js 18+ and cloudflared. That's it.",
    "st.1t": "Install cloudflared",
    "st.2t": "Clone &amp; run",
    "st.3t": "Connect your domain",
    "st.3c": "# → https://app.yourdomain.id is ready to use",
    "foot.link1": "Project GitHub",
    "foot.link2": "GitHub Organization",
    "foot.link3": "Become a Sponsor",
    "foot.copy": "© 2026 nxcloud — Nusantara eXtreme Development Object Model. Released under the MIT license."
  }
};

function setLang(lang) {
  if (!I18N[lang]) lang = "id";
  document.documentElement.lang = lang;
  localStorage.setItem("nxcloud-lang", lang);

  document.querySelectorAll("[data-lang-btn]").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.langBtn === lang);
  });

  const dict = I18N[lang];

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.innerHTML = dict[key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.getAttribute("data-i18n-html");
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-attr]").forEach(el => {
    const rules = el.getAttribute("data-i18n-attr").split(",");
    rules.forEach(rule => {
      const parts = rule.split("|");
      if (parts.length === 2 && dict[parts[1]]) {
        el.setAttribute(parts[0], dict[parts[1]]);
      }
    });
  });

  if (dict["meta.title"]) document.title = dict["meta.title"];
}

// Scroll Animations & Dynamic Navbar
function handleScroll() {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }

  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
}

// Smooth anchor offset (fixed navbar)
function bindAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    });
  });
}

// Initialization
document.addEventListener("DOMContentLoaded", () => {
  if (typeof lucide !== "undefined") lucide.createIcons();

  document.querySelectorAll("[data-lang-btn]").forEach(btn => {
    btn.addEventListener("click", () => setLang(btn.dataset.langBtn));
  });

  const savedLang = localStorage.getItem("nxcloud-lang");
  if (savedLang) {
    setLang(savedLang);
  } else {
    const browserLang = navigator.language.slice(0, 2).toLowerCase();
    setLang(browserLang === "id" ? "id" : "en");
  }

  bindAnchors();
  bindCopyButtons();

  window.addEventListener('scroll', handleScroll);
  handleScroll();
});

// Copy-to-clipboard pada tombol [data-copy]
function bindCopyButtons() {
  document.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', () => {
      const pre = btn.parentElement.querySelector('pre');
      if (!pre) return;
      const text = pre.innerText;
      const done = () => {
        btn.classList.add('copied');
        const icon = btn.querySelector('svg, i');
        if (icon && typeof lucide !== 'undefined') {
          btn.innerHTML = '<i data-lucide="check"></i>';
          lucide.createIcons({ nodes: [btn] });
        }
        setTimeout(() => {
          btn.classList.remove('copied');
          if (icon && typeof lucide !== 'undefined') {
            btn.innerHTML = '<i data-lucide="copy"></i>';
            lucide.createIcons({ nodes: [btn] });
          }
        }, 1600);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
      } else {
        fallbackCopy(text, done);
      }
    });
  });
}

function fallbackCopy(text, done) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand('copy'); done(); } catch (e) { /* noop */ }
  document.body.removeChild(ta);
}
