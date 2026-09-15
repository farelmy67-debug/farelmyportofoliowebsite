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
  { file: "01-Sertifikat BNSP Farel Maulana Yusuf.jpeg", label: "Sertifikat Kompetensi BNSP, Staf Administrasi Profesional" },
  { file: "02-surat-keterangan-sudin-pendidikan.jpg", label: "Surat Keterangan Kerja Praktek, Sudin Pendidikan Wilayah I" },
  { file: "03-piagam-sudin-parekraf.jpg", label: "Piagam Penghargaan, Sudin Pariwisata dan Ekonomi Kreatif" },
  { file: "04-peringkat-kelas11-genap.jpg", label: "Peringkat 2, Kelas 11 OTKP, Ujian Sekolah Semester Genap" },
  { file: "05-peringkat-kelas11-des2024.jpg", label: "Peringkat 2, Kelas 11 OTKP, Ujian Sekolah Desember 2024" },
  { file: "06-peringkat-kelas12-des2025.jpg", label: "Peringkat 2, Kelas 12 OTKP, Ujian Sekolah Desember 2025" },
  { file: "07-peringkat-kelas12-mplb.jpg", label: "Peringkat 3, Kelas 12 Manajemen Perkantoran Layanan dan Bisnis" },
  { file: "08-microsoft-word-jobstreet.jpg", label: "Microsoft Skills for Jobs, Microsoft Word" },
  { file: "09-excel-untuk-admin.jpg", label: "Sertifikat Excel untuk Admin, Jobstreet Career Hub" },
  { file: "10-rumus-dasar-excel.jpg", label: "Sertifikat Jago Rumus Dasar Excel, Jobstreet Career Hub" },
  { file: "11-kelas-persiapan-kerja.jpg", label: "Sertifikat Kelas Persiapan Kerja, Jobstreet KarirKu" },
  { file: "12-Sertifikat UKK Farel Maulana Yusuf.jpeg", label: "Sertifikat Kompetensi Manajemen Perkantoran, PT Indonesia Kurir Cepat" }
];

const DATA_CERTIFICATES = [
  { file: "01-bootcamp-completion.jpg", label: "Certificate of Completion, Bootcamp Data Science Intelligo.ID" },
  { file: "02-performance-report.jpg", label: "Performance Report, Intelligo.ID" },
  { file: "03-data-analysis-fundamental.jpg", label: "Sertifikat Data Analysis Fundamental, MySkill" },
  { file: "04-data-visualization-excel.jpg", label: "Sertifikat Data Visualization with Excel, MySkill" },
  { file: "06-data-science-06.jpg", label: "Sertifikat Data Science Python Introduction For Data Analysis" },
  { file: "05-tableau-workshop.jpg", label: "Sertifikat Workshop Tableau, Zenith Academy" },
];

const MARKETING_CERTIFICATES = [
  { file: "01-paradaya-movement-sertifikat.jpg", label: "Sertifikat Pelatihan Digital Marketing & SEO, Paradaya Movement" },
  { file: "02-proxsis-internship-surat.jpg", label: "Surat Keterangan Digital Marketing SEO Internship, PT Proxsis Mark" },
  { file: "03-dibimbing.jpg", label: "Sertifikat diBimbing" },
  { file: "04-loveable-ai-myskill.jpg", label: "Sertifikat Lovable AI MySkill" },
  { file: "05-web-english.jpg", label: "Sertifikat Web English" }
];

const DOCUMENTATION_GALLERY = {
  "teach-for-indonesia": [
    { src: "assets/dokumentasi/Dokumentasi Binus 1.jpeg", label: "Dokumentasi Binus 1" },
    { src: "assets/dokumentasi/Dokumentasi Binus 2.jpeg", label: "Dokumentasi Binus 2" },
    { src: "assets/dokumentasi/Dokumentasi Binus 3.jpeg", label: "Dokumentasi Binus 3" }
  ]
};

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
// RATING & REVIEW SYSTEM
// =========================================================
const STORAGE_KEY = "portfolio_ratings";
let currentRating = 0;

function loadRatings() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    console.error("Error loading ratings:", e);
    return [];
  }
}

function saveRatings(ratings) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ratings));
  } catch (e) {
    console.error("Error saving ratings:", e);
  }
}

function renderRatingHistory() {
  const ratings = loadRatings();
  const historyList = document.getElementById("history-list");
  const totalRatings = document.getElementById("total-ratings");

  if (!historyList) return;

  totalRatings.textContent = ratings.length;

  if (ratings.length === 0) {
    historyList.innerHTML = '<p class="empty-state">Belum ada rating. Jadilah yang pertama!</p>';
    return;
  }

  historyList.innerHTML = "";

  ratings.reverse().forEach((rating) => {
    const card = document.createElement("div");
    card.className = "rating-card";

    const header = document.createElement("div");
    header.className = "rating-card-header";

    const author = document.createElement("div");
    author.className = "rating-author";
    author.textContent = rating.name || "Anonim";

    const stars = document.createElement("div");
    stars.className = "rating-stars";
    stars.textContent = "★".repeat(rating.rating);

    const date = document.createElement("div");
    date.className = "rating-date";
    const dateObj = new Date(rating.timestamp);
    date.textContent = dateObj.toLocaleDateString("id-ID", { year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });

    header.append(author, stars, date);

    const comment = document.createElement("p");
    comment.className = "rating-text";
    comment.textContent = rating.comment;

    card.append(header, comment);
    historyList.appendChild(card);
  });
}

function initRatingSystem() {
  const ratingForm = document.getElementById("rating-form");
  const starButtons = document.querySelectorAll(".star-rating .star");
  const ratingDisplay = document.getElementById("rating-display");
  const commentInput = document.getElementById("comment-input");
  const charCount = document.getElementById("char-count");
  const nameInput = document.getElementById("name-input");
  const submitBtn = document.querySelector(".submit-btn");

  if (!ratingForm) return;

  // Handle star rating
  starButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const value = parseInt(btn.dataset.value, 10);
      currentRating = value;

      // Update visual state
      starButtons.forEach((b) => {
        const bValue = parseInt(b.dataset.value, 10);
        b.classList.toggle("active", bValue <= value);
      });

      // Update display text
      ratingDisplay.textContent = `${value} dari 5 bintang`;
      ratingDisplay.classList.add("selected");
    });

    btn.addEventListener("mouseenter", () => {
      const value = parseInt(btn.dataset.value, 10);
      starButtons.forEach((b) => {
        const bValue = parseInt(b.dataset.value, 10);
        b.style.color = bValue <= value ? "var(--gold)" : "var(--text-muted)";
      });
    });
  });

  // Reset star hover on mouse leave
  document.getElementById("rating-stars").addEventListener("mouseleave", () => {
    starButtons.forEach((b) => {
      const bValue = parseInt(b.dataset.value, 10);
      if (bValue <= currentRating) {
        b.style.color = "var(--gold)";
      } else {
        b.style.color = "var(--text-muted)";
      }
    });
  });

  // Character counter for comment
  if (commentInput) {
    commentInput.addEventListener("input", () => {
      charCount.textContent = commentInput.value.length;
    });
  }

  // Form submission
  ratingForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (currentRating === 0) {
      alert("Silakan pilih rating bintang terlebih dahulu!");
      return;
    }

    const comment = commentInput.value.trim();
    const name = nameInput.value.trim() || "Anonim";

    if (!comment) {
      alert("Silakan tulis komentar!");
      return;
    }

    const newRating = {
      rating: currentRating,
      comment: comment,
      name: name,
      timestamp: new Date().toISOString()
    };

    const ratings = loadRatings();
    ratings.push(newRating);
    saveRatings(ratings);

    // Reset form
    currentRating = 0;
    ratingForm.reset();
    ratingDisplay.textContent = "";
    ratingDisplay.classList.remove("selected");
    charCount.textContent = "0";
    starButtons.forEach((b) => b.classList.remove("active"));

    // Update history display
    renderRatingHistory();

    // Show success message
    alert("Terima kasih atas rating dan komentarmu!");
  });

  // Initial render
  renderRatingHistory();
}

// Initialize rating system when page loads
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initRatingSystem);
} else {
  initRatingSystem();
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
