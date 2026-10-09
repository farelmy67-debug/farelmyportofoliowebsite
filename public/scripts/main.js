const firstPage = document.getElementById("firstpage-screen");
const enterPortfolioBtn = document.getElementById("enter-portfolio");
const pageShell = document.querySelector(".page-shell");

function revealPortfolio() {
  if (!firstPage || !pageShell) return;
  if (firstPage.classList.contains("hidden")) return;

  firstPage.classList.add("hidden");
  document.body.classList.add("page-ready");
  pageShell.setAttribute("aria-hidden", "false");
}

if (enterPortfolioBtn) {
  enterPortfolioBtn.addEventListener("click", revealPortfolio);
}

if (pageShell) {
  pageShell.setAttribute("aria-hidden", "true");
}

const scheduleAutoReveal = () => {
  setTimeout(() => {
    revealPortfolio();
  }, 2600);
};

if (document.readyState === "complete") {
  scheduleAutoReveal();
} else {
  window.addEventListener("load", scheduleAutoReveal);
}

const ADMIN_CERTIFICATES = [
  { file: "01-Sertifikat BNSP Farel Maulana Yusuf.jpeg", label: "Sertifikat Kompetensi BNSP, Staf Administrasi Profesional \n BY LSP SMKN 13" },
  { file: "02-surat-keterangan-sudin-pendidikan.jpg", label: "Surat Keterangan Kerja Praktek, Sudin Pendidikan Wilayah I \n BY SUDIN PENDIDIKAN WIL 1" },
  { file: "03-piagam-sudin-parekraf.jpg", label: "Piagam Penghargaan, Sudin Pariwisata dan Ekonomi Kreatif \n BY SUDIN PARAWISATA dan EKONOMI KREATIF" },
  { file: "04-peringkat-kelas11-genap.jpg", label: "Peringkat 2, Kelas 11 OTKP, Ujian Sekolah Semester Genap \n BY SMKS KEBON JERUK JAKARTA" },
  { file: "05-peringkat-kelas11-des2024.jpg", label: "Peringkat 2, Kelas 11 OTKP, Ujian Sekolah Desember 2024 \n BY SMKS KEBON JERUK JAKARTA" },
  { file: "06-peringkat-kelas12-des2025.jpg", label: "Peringkat 2, Kelas 12 OTKP, Ujian Sekolah Desember 2025 \n BY SMKS KEBON JERUK JAKARTA" },
  { file: "07-peringkat-kelas12-mplb.jpg", label: "Peringkat 3, Kelas 12 Manajemen Perkantoran Layanan dan Bisnis \n  BY SMKS KEBON JERUK JAKARTA" },
  { file: "08-microsoft-word-jobstreet.jpg", label: "Microsoft Skills for Jobs, Microsoft Word \n BY JOBSTREET" },
  { file: "09-excel-untuk-admin.jpg", label: "Sertifikat Excel untuk Admin, Mircosoft Excel \n BY JOBSTREET CAREER HUB" },
  { file: "10-rumus-dasar-excel.jpg", label: "Sertifikat Jago Rumus Dasar Excel, Microsoft Excel \n BY JOBSTREET CAREER HUB" },
  { file: "11-kelas-persiapan-kerja.jpg", label: "Sertifikat Kelas Persiapan Kerja, JobReady \n BY JOBSTREET KARIRKU" },
  { file: "12-Sertifikat UKK Farel Maulana Yusuf.jpeg", label: "Sertifikat Kompetensi Manajemen Perkantoran, Ujian Kompetensi Keahlian \n BY PT INDONESIA KURIR CEPAT" }
];

const DATA_CERTIFICATES = [
  { file: "01-bootcamp-completion.jpg", label: "Certificate of Completion Bootcamp Data Science. \n BY INTELLIGO.ID" },
  { file: "02-performance-report.jpg", label: "Performance Report. \n BY INTELLIGO.ID" },
  { file: "03-data-analysis-fundamental.jpg", label: "Sertifikat Data Analysis Fundamental. \n BY MYSKILL" },
  { file: "04-data-visualization-excel.jpg", label: "Sertifikat Data Visualization with Excel. \n BY MYSKILL" },
  { file: "06-data-science-06.jpg", label: "Sertifikat Data Science Python Introduction For Data Analysis. \n BY MYSKILL" },
  { file: "05-tableau-workshop.jpg", label: "Sertifikat Workshop Tableau. \n BY ZENITH ACADEMY" },
];

const MARKETING_CERTIFICATES = [
  { file: "01-paradaya-movement-sertifikat.jpg", label: "Sertifikat Pelatihan Digital Marketing & SEO Paradaya Movement. \n BY LAZNAS DEWAN DA'WAH" },
  { file: "02-dibimbing.jpg", label: "Sertifikat Digital Marketing. \n By DiBimbing" },
 ];

const DOCUMENTATION_GALLERY = {
  "teach-for-indonesia": [
    { src: "assets/dokumentasi/Dokumentasi Binus 1.jpeg", label: "Dokumentasi Pelatihan Bersama Dosen Binus" },
    { src: "assets/dokumentasi/Dokumentasi Binus 2.jpeg", label: "Dokumentasi Pelatihan Bersama Dosen Binus" },
    { src: "assets/dokumentasi/Dokumentasi Binus 3.jpeg", label: "Dokumentasi Pelatihan Bersama Dosen Binus" }
  ]
};

const AI_CERT_PATH = "assets/ai-automation/certificates/";
const AI_CERTIFICATES = [
  { file: "ai-cert-1.jpg", label: "Sertifikat AI Automation (placeholder)" },
  { file: "ai-cert-2.jpg", label: "Sertifikat Python for Automation (placeholder)" },
];

const OTHER_CERTIFICATES = [
  { file: "agama-islam-sd.jpg", label: "Sertifikat Agama Islam SD" },
  { file: "instinct-bahasa-indonesia.jpg", label: "Sertifikat Instinct Bahasa Indonesia" },
  { file: "instinct-bahasa-inggris.jpg", label: "Sertifikat Instinct Bahasa Inggris" },
  { file: "instinct-geografi.jpg", label: "Sertifikat Instinct Geografi" },
  { file: "instinct-sejarah.jpg", label: "Sertifikat Instinct Sejarah" },
  { file: "polyglot-english.jpg", label: "Sertifikat Polyglot English" },
  { file: "polyglot-german.jpg", label: "Sertifikat Polyglot German" },
  {
    file: "teach-for-indonesia.jpg",
    label: "Sertifikat Teach for Indonesia",
    showDocBtn: true,
    docText: "Lihat dokumentasi",
    docGalleryKey: "teach-for-indonesia"
  },
  { file: "toefl-central-course.jpg", label: "Sertifikat TOEFL Central Course" },
  { file: "zenleap-english.jpg", label: "Sertifikat ZenLeap English" }
];

const ADMIN_CERT_PATH = "assets/admin/certificates/";
const DATA_CERT_PATH = "assets/data-science/certificates/";
const MARKETING_CERT_PATH = "assets/digital-marketing/";
const OTHER_CERT_PATH = "assets/other-certificates/";

// =========================================================
// RENDER GRID KREDENSIAL
// Mencoba memuat tiap gambar, kalau gagal (file belum ada)
// tampilkan placeholder rapi, tidak akan error atau merusak layout
// =========================================================
function renderCredentialGrid(containerId, certList, basePath) {
  const container = document.getElementById(containerId);
  if (!container) return;

  certList.forEach((cert) => {
    const card = document.createElement("div");
    card.className = "credential-card";

    const preview = document.createElement("div");
    preview.className = "credential-preview";

    const img = new Image();
    img.src = basePath + cert.file;
    img.alt = cert.label;

    img.onload = () => {
      preview.appendChild(img);

      const openPreview = () => openLightbox(img.src, cert.label);

      if (cert.showDocBtn) {
        card.addEventListener("click", (event) => {
          if (event.target.closest(".credential-doc-btn")) return;
          openPreview();
        });
      } else {
        card.addEventListener("click", openPreview);
      }
    };

    img.onerror = () => {
      preview.textContent = "Sertifikat segera ditambahkan";
      card.classList.add("placeholder-card");
    };

    const label = document.createElement("div");
    label.className = "credential-label";
    label.textContent = cert.label;

    if (cert.showDocBtn) {
      const docButton = document.createElement("button");
      docButton.type = "button";
      docButton.className = "credential-doc-btn";
      docButton.textContent = cert.docText || "Lihat dokumentasi";
      docButton.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (cert.docGalleryKey && DOCUMENTATION_GALLERY[cert.docGalleryKey]) {
          openDocumentationGallery(DOCUMENTATION_GALLERY[cert.docGalleryKey]);
          return;
        }

        const docUrl = cert.docUrl || (basePath + cert.file);
        window.open(docUrl, "_blank", "noopener,noreferrer");
      });
      card.appendChild(preview);
      card.appendChild(label);
      card.appendChild(docButton);
    } else {
      card.appendChild(preview);
      card.appendChild(label);
    }

    container.appendChild(card);
  });
}

renderCredentialGrid("admin-certificates", ADMIN_CERTIFICATES, ADMIN_CERT_PATH);
renderCredentialGrid("data-certificates", DATA_CERTIFICATES, DATA_CERT_PATH);
renderCredentialGrid("marketing-credentials", MARKETING_CERTIFICATES, MARKETING_CERT_PATH);
renderCredentialGrid("ai-certificates", AI_CERTIFICATES, AI_CERT_PATH);
renderCredentialGrid("other-certificates", OTHER_CERTIFICATES, OTHER_CERT_PATH);

const moreAboutBtn = document.querySelector(".more-about-btn");
const moreAboutPanel = document.getElementById("more-about-panel");

if (moreAboutBtn && moreAboutPanel) {
  moreAboutBtn.addEventListener("click", () => {
    const willShow = moreAboutPanel.hasAttribute("hidden");
    moreAboutPanel.toggleAttribute("hidden", !willShow);
    moreAboutBtn.setAttribute("aria-expanded", String(willShow));
    moreAboutBtn.textContent = willShow ? "Hide details" : "More about me";
  });
}

// =========================================================
// LIGHTBOX (untuk memperbesar sertifikat)
// =========================================================
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");
const lightboxClose = document.getElementById("lightbox-close");

const docModal = document.getElementById("doc-modal");
const docModalImage = document.getElementById("doc-modal-image");
const docModalCaption = document.getElementById("doc-modal-caption");
const docNextBtn = document.getElementById("doc-next");
const docPrevBtn = document.getElementById("doc-prev");
const docModalClose = document.getElementById("doc-modal-close");

let docGalleryItems = [];
let docGalleryIndex = 0;

function openLightbox(src, caption) {
  lightboxImage.src = src;
  lightboxImage.alt = caption;
  lightboxCaption.textContent = caption;
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
}

function openDocumentationGallery(items) {
  if (!items || !items.length) return;

  docGalleryItems = items;
  docGalleryIndex = 0;
  renderDocumentationSlide();
  docModal.classList.add("is-open");
  docModal.setAttribute("aria-hidden", "false");
}

function renderDocumentationSlide() {
  if (!docGalleryItems.length) return;

  const current = docGalleryItems[docGalleryIndex];
  docModalImage.src = current.src;
  docModalImage.alt = current.label;
  docModalCaption.textContent = `${current.label} (${docGalleryIndex + 1}/${docGalleryItems.length})`;
}

function showNextDocumentation() {
  if (!docGalleryItems.length) return;
  docGalleryIndex = (docGalleryIndex + 1) % docGalleryItems.length;
  renderDocumentationSlide();
}

function showPrevDocumentation() {
  if (!docGalleryItems.length) return;
  docGalleryIndex = (docGalleryIndex - 1 + docGalleryItems.length) % docGalleryItems.length;
  renderDocumentationSlide();
}

function closeDocumentationGallery() {
  docModal.classList.remove("is-open");
  docModal.setAttribute("aria-hidden", "true");
}

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLightbox();
    closeDocumentationGallery();
  }

  if (docModal.classList.contains("is-open")) {
    if (event.key === "ArrowRight") showNextDocumentation();
    if (event.key === "ArrowLeft") showPrevDocumentation();
  }
});

docModalClose.addEventListener("click", closeDocumentationGallery);
docPrevBtn.addEventListener("click", showPrevDocumentation);
docNextBtn.addEventListener("click", showNextDocumentation);

// =========================================================
// MORPH TRANSITION (FLIP) UNTUK ROLE CARD
// =========================================================
const roleGrid = document.querySelector(".role-grid");
const roleCards = Array.from(document.querySelectorAll(".role-card"));
let activeRoleIndex = -1;

function openRoleCard(card) {
  if (!card) return;

  // Jika sudah open, jangan buka lagi
  if (card.classList.contains("is-open")) {
    return;
  }

  // Tutup card yang sebelumnya open
  const currentlyOpen = document.querySelector(".role-card.is-open");
  if (currentlyOpen && currentlyOpen !== card) {
    closeRoleCard(currentlyOpen, true);
  }

  // Buka card baru setelah delay untuk smooth transition
  setTimeout(() => {
    roleGrid.classList.add("is-dimmed");
    card.classList.add("is-open");
    document.body.classList.add("panel-open");
    activeRoleIndex = roleCards.indexOf(card);

    const roleId = card.dataset.role;
    if (roleId) {
      const currentState = window.history.state || {};
      if (!(currentState.rolePanelOpen && currentState.roleId === roleId)) {
        window.history.pushState({ rolePanelOpen: true, roleId }, "", "#" + roleId);
      }
    }

    const detailPanel = card.querySelector(".detail-panel");
    if (detailPanel) {
      // Paksa browser menghitung ulang layout/scrollHeight elemen ini
      // sebelum kita coba scroll atau pindah fokus ke dalamnya.
      // eslint-disable-next-line no-unused-expressions
      detailPanel.offsetHeight;
      detailPanel.scrollTop = 0;

      const focusPanel = () => detailPanel.focus({ preventScroll: true });
      detailPanel.addEventListener("transitionend", function onOpenTransitionEnd(event) {
        if (event.target !== detailPanel || event.propertyName !== "opacity") return;
        detailPanel.removeEventListener("transitionend", onOpenTransitionEnd);
        focusPanel();
      });
      // Fallback jaga-jaga kalau transitionend tidak terpicu (misal reduced-motion).
      setTimeout(focusPanel, 650);
    }

    animateCounters(card);
    animateBarChart(card);
  }, 0);
}

function closeRoleCard(card, fromHistory = false) {
  if (!card) return;

  roleGrid.classList.remove("is-dimmed");
  card.classList.remove("is-open");
  document.body.classList.remove("panel-open");

  if (activeRoleIndex === roleCards.indexOf(card)) {
    activeRoleIndex = -1;
  }

  if (!fromHistory && window.history.state && window.history.state.rolePanelOpen) {
    window.history.replaceState({ rolePanelOpen: false, roleId: null }, "", window.location.pathname);
  }
}

function moveRoleByOffset(offset) {
  if (!roleCards.length) return;

  const openCard = document.querySelector(".role-card.is-open");
  let currentIndex = activeRoleIndex;
  if (currentIndex === -1 && openCard) {
    currentIndex = roleCards.indexOf(openCard);
  }
  if (currentIndex === -1) {
    currentIndex = 0;
  }

  const nextIndex = (currentIndex + offset + roleCards.length) % roleCards.length;
  const targetCard = roleCards[nextIndex];

  if (openCard && openCard !== targetCard) {
    closeRoleCard(openCard, true);
  }

  setTimeout(() => {
    openRoleCard(targetCard);
  }, 90);
}

roleCards.forEach((card, index) => {
  const header = card.querySelector(".detail-header");
  if (header) {
    const navActions = document.createElement("div");
    navActions.className = "detail-header-actions";

    const prevBtn = document.createElement("button");
    prevBtn.type = "button";
    prevBtn.className = "panel-nav prev";
    prevBtn.textContent = "‹ Sebelumnya";
    prevBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      moveRoleByOffset(-1);
    });

    const backBtn = document.createElement("button");
    backBtn.type = "button";
    backBtn.className = "panel-back-btn";
    backBtn.textContent = "Kembali";
    backBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      closeRoleCard(card, false);
    });

    const nextBtn = document.createElement("button");
    nextBtn.type = "button";
    nextBtn.className = "panel-nav next";
    nextBtn.textContent = "Selanjutnya ›";
    nextBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      moveRoleByOffset(1);
    });

    navActions.append(prevBtn, backBtn, nextBtn);
    header.appendChild(navActions);
  }
  const openBtn = card.querySelector(".open-btn");
  const cardSurface = card.querySelector(".card-surface");
  const closeBtn = card.querySelector(".close-btn");

  const triggerOpen = (event) => {
    event.stopPropagation();
    openRoleCard(card);
  };

  openBtn.addEventListener("click", triggerOpen);
  cardSurface.addEventListener("click", triggerOpen);

  closeBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    closeRoleCard(card, false);
  });

  // keyboard: Enter atau Space pada card yang fokus akan membuka
  card.addEventListener("keydown", (event) => {
    if ((event.key === "Enter" || event.key === " ") && document.activeElement === card) {
      event.preventDefault();
      openRoleCard(card);
    }
  });

});

// =========================================================
// SCROLL KEYBOARD UNTUK DETAIL PANEL
// Dipasang di document (bukan di elemen panel) supaya tetap jalan
// walaupun fokus browser gagal pindah persis ke .detail-panel
// (misalnya fokus masih nyangkut di tombol yang barusan diklik).
// =========================================================
document.addEventListener("keydown", (event) => {
  const openCard = document.querySelector(".role-card.is-open");
  if (!openCard) return;

  const panel = openCard.querySelector(".detail-panel");
  if (!panel) return;

  // Kalau fokus sedang di elemen yang memang butuh panah/space sendiri
  // (input, textarea, select, tombol galeri), jangan ganggu.
  const target = event.target;
  const isFormControl =
    target instanceof Element &&
    target.matches("input, textarea, select, button.gallery-nav, [role='slider']");
  if (isFormControl) return;

  const smallStep = 80;
  const bigStep = panel.clientHeight * 0.9;

  switch (event.key) {
    case "ArrowDown":
      event.preventDefault();
      panel.scrollBy({ top: smallStep, behavior: "smooth" });
      break;
    case "ArrowUp":
      event.preventDefault();
      panel.scrollBy({ top: -smallStep, behavior: "smooth" });
      break;
    case "PageDown":
      event.preventDefault();
      panel.scrollBy({ top: bigStep, behavior: "smooth" });
      break;
    case "PageUp":
      event.preventDefault();
      panel.scrollBy({ top: -bigStep, behavior: "smooth" });
      break;
    case " ":
      event.preventDefault();
      panel.scrollBy({ top: event.shiftKey ? -bigStep : bigStep, behavior: "smooth" });
      break;
    case "Home":
      event.preventDefault();
      panel.scrollTo({ top: 0, behavior: "smooth" });
      break;
    case "End":
      event.preventDefault();
      panel.scrollTo({ top: panel.scrollHeight, behavior: "smooth" });
      break;
    default:
      break;
  }
});

window.addEventListener("popstate", () => {
  const openCard = document.querySelector(".role-card.is-open");
  if (openCard) {
    closeRoleCard(openCard, true);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    const openCard = document.querySelector(".role-card.is-open");
    if (openCard) closeRoleCard(openCard, false);
  }
});

const instagramBtn = document.getElementById("instagram-btn");
const instagramPopover = document.getElementById("instagram-popover");
const instagramPopoverClose = document.getElementById("instagram-popover-close");

if (instagramBtn && instagramPopover) {
  function toggleInstagramPopover(show) {
    instagramPopover.hidden = !show;
    instagramBtn.setAttribute("aria-expanded", String(show));
  }

  instagramBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    const isOpen = !instagramPopover.hidden;
    toggleInstagramPopover(!isOpen);
  });

  if (instagramPopoverClose) {
    instagramPopoverClose.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleInstagramPopover(false);
    });
  }

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!instagramPopover.hidden && target !== instagramBtn && !instagramPopover.contains(target)) {
      toggleInstagramPopover(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !instagramPopover.hidden) {
      toggleInstagramPopover(false);
    }
  });
}

// =========================================================
// COUNTER ANIMASI (count-up)
// =========================================================
function animateCounters(card) {
  const counters = card.querySelectorAll(".counter-card .count");
  counters.forEach((counter) => {
    if (counter.dataset.animated === "true") return;
    const target = parseInt(counter.closest(".counter-card").dataset.target, 10);
    const duration = 900;
    const startTime = performance.now();

    function step(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      counter.textContent = Math.round(eased * target);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        counter.dataset.animated = "true";
      }
    }
    requestAnimationFrame(step);
  });
}

// =========================================================
// BAR CHART ANIMASI (Data Science)
// =========================================================
function animateBarChart(card) {
  const bars = card.querySelectorAll(".bar-fill");
  bars.forEach((bar, index) => {
    if (bar.dataset.animated === "true") return;
    const value = bar.closest(".bar-row").dataset.value;
    setTimeout(() => {
      bar.style.width = value + "%";
      bar.dataset.animated = "true";
    }, index * 90);
  });
}

// =========================================================
// GALLERY SLIDER (Digital Marketing)
// =========================================================
function setupGallery() {
  const track = document.getElementById("marketing-gallery");
  if (!track) return;

  const slides = Array.from(track.querySelectorAll(".gallery-slide"));
  const prevBtn = document.querySelector(".gallery-nav.prev");
  const nextBtn = document.querySelector(".gallery-nav.next");
  const dotsContainer = document.getElementById("marketing-gallery-dots");
  let currentIndex = 0;

  slides.forEach((slide, index) => {
    const img = slide.querySelector("img");
    img.addEventListener("error", () => slide.classList.add("missing-image"));

    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("aria-label", "Foto ke-" + (index + 1));
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  function goToSlide(index) {
    currentIndex = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    dotsContainer.querySelectorAll("button").forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });
  }

  prevBtn.addEventListener("click", () => goToSlide(currentIndex - 1));
  nextBtn.addEventListener("click", () => goToSlide(currentIndex + 1));
}

setupGallery();

// =========================================================
// MISSING IMAGE HANDLER UNTUK FOTO UTAMA CARD
// =========================================================
document.querySelectorAll(".card-media img").forEach((img) => {
  img.addEventListener("error", () => {
    img.closest(".card-media").classList.add("missing-image");
  });
});

// =========================================================
// INTERSECTION OBSERVER UNTUK SCROLL-TRIGGERED ANIMATIONS
// =========================================================
function initScrollAnimations() {
  if (!("IntersectionObserver" in window)) return;

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Trigger animations untuk elemen yang baru terlihat
        entry.target.style.animationPlayState = "running";
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe sections dan cards yang punya animation
  document.querySelectorAll(
    ".hero, .role-grid, .role-card, .side-roles, .side-role, .credential-section, .site-footer"
  ).forEach((el) => {
    observer.observe(el);
  });
}

// Initialize scroll animations saat DOM siap
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initScrollAnimations);
} else {
  initScrollAnimations();
}


// =========================================================
// PROJECTS & WORKS + TAB SWITCHER (semua role utama)
// =========================================================
const ROLE_PROJECTS = {
  admin: [
    { title: "Digitalisasi Arsip Dinas", tags: ["Google Sheets", "Kearsipan"], desc: "Menyusun ulang indeks arsip fisik ke spreadsheet terstruktur sehingga pencarian dokumen jauh lebih cepat.", url: "" },
    { title: "Alur Buku Tamu Digital", tags: ["Google Forms", "Layanan"], desc: "Merancang formulir penerimaan tamu digital untuk mempercepat pencatatan dan rekap harian.", url: "" },
  ],
  data: [
    { title: "Final Project Bootcamp", tags: ["Python", "XGBoost", "SHAP"], desc: "Model prediksi dengan pendekatan CRISP-DM, dilengkapi interpretasi fitur menggunakan SHAP. Skor final project 90.", url: "" },
    { title: "Dashboard Tableau", tags: ["Tableau", "Visualisasi"], desc: "Dashboard interaktif untuk membantu pengambilan keputusan berbasis data.", url: "" },
  ],
  marketing: [
    { title: "Riset Kompetitif LAZNAS", tags: ["SimilarWeb", "Google Trends"], desc: "Analisis presence digital LAZNAS Dewan Da'wah dibanding BAZNAS dan Rumah Zakat, dipakai sebagai dasar perbaikan strategi.", url: "" },
    { title: "Kampanye JKN Future Shield", tags: ["Copywriting", "Meta Ads"], desc: "Konten dan dukungan iklan untuk kampanye deteksi fraud BPJS Kesehatan di Healthkathon 2026.", url: "" },
  ],
    "ai-automation": [
    {
      title: "Workflow Otomasi n8n",
      image: "/assets/project/final_project_workflow_image.png",
      tags: ["n8n", "groq API"],
      desc: "Alur otomatis yang menghubungkan beberapa layanan untuk memangkas pekerjaan manual berulang.",
      url: "https://github.com/farelmy67-debug/FMY-FINAL-PROJECT.git"
    },
    {
      title: "Retrival Augmented Generation",
      image: "/assets/project/mini_project_rag_image.png",
      tags: ["Python", "LangChain", "Streamlit"],
      desc: "Asisten Chat Bot AI Dengan Tema PPKD JB dimana miliki knowledge sekitar PPKD JB yang bersifat umum atau public dan internal.",
      url: "https://github.com/farelmy67-debug/RAG_PROJECTFMY.git"
    },
  ],
};

function renderProjects() {
  document.querySelectorAll(".project-grid[data-projects]").forEach((grid) => {
    const list = ROLE_PROJECTS[grid.dataset.projects] || [];
    grid.innerHTML = "";
    list.forEach((p) => {
      const card = document.createElement("article");
      card.className = "project-card";
      const thumb = document.createElement("div");
      thumb.className = "project-thumb";
      if (p.image) {
        const img = new Image();
        img.src = p.image; img.alt = p.title;
        img.onerror = () => img.remove();
        thumb.appendChild(img);
      } else {
        thumb.innerHTML = '<span>' + p.title.charAt(0) + '</span>';
      }
      const body = document.createElement("div");
      body.className = "project-body";
      const h = document.createElement("h5"); h.textContent = p.title;
      const tags = document.createElement("div"); tags.className = "tag-list small";
      p.tags.forEach((t) => { const s = document.createElement("span"); s.textContent = t; tags.appendChild(s); });
      const d = document.createElement("p"); d.textContent = p.desc;
      body.append(h, tags, d);
      if (p.url) {
        const a = document.createElement("a");
        a.className = "project-link"; a.href = p.url; a.target = "_blank"; a.rel = "noopener noreferrer";
        a.textContent = "Kunjungi Proyek ↗";
        body.appendChild(a);
      }
      card.append(thumb, body);
      grid.appendChild(card);
    });
  });
}

function setupPanelTabs() {
  document.querySelectorAll(".panel-tabs").forEach((tabs) => {
    const panel = tabs.closest(".detail-panel");
    const buttons = tabs.querySelectorAll("[data-tab]");
    const select = (name) => {
      buttons.forEach((b) => {
        const on = b.dataset.tab === name;
        b.classList.toggle("active", on);
        b.setAttribute("aria-selected", on ? "true" : "false");
      });
      panel.querySelectorAll("[data-pane]").forEach((pane) => {
        pane.hidden = pane.dataset.pane !== name;
      });
    };
    buttons.forEach((b) => b.addEventListener("click", (e) => { e.stopPropagation(); select(b.dataset.tab); }));
    select("projects");
  });
}

renderProjects();
setupPanelTabs();
