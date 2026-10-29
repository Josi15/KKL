(() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  const progressBar = $("#scrollProgress");
  const header = $("#siteHeader");
  const navToggle = $("#navToggle");
  const siteNav = $("#siteNav");
  const yearEl = $("#year");
  const backTop = $("#backTop");
  const lightbox = $("#lightbox");
  const lightboxImage = $("#lightboxImage");
  const lightboxCaption = $("#lightboxCaption");

  let activeFilter = "all";
  let carouselStates = new Map();

  function setYear() {
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  }

  function updateProgress() {
    const doc = document.documentElement;
    const scrollTop = doc.scrollTop || document.body.scrollTop;
    const height = doc.scrollHeight - doc.clientHeight;
    const pct = height > 0 ? (scrollTop / height) * 100 : 0;
    progressBar.style.width = `${pct}%`;
    progressBar.setAttribute("aria-valuenow", String(Math.round(pct)));
    header.classList.toggle("is-scrolled", scrollTop > 24);
  }

  function setupNav() {
    navToggle.addEventListener("click", () => {
      const open = !siteNav.classList.contains("is-open");
      siteNav.classList.toggle("is-open", open);
      navToggle.classList.toggle("is-open", open);
      navToggle.setAttribute("aria-expanded", String(open));
      document.body.classList.toggle("nav-open", open);
    });

    $$("[data-nav]").forEach((link) => {
      link.addEventListener("click", () => {
        siteNav.classList.remove("is-open");
        navToggle.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("nav-open");
      });
    });

    const sections = ["hero", "about", "highlights", "timeline", "gallery", "team"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          $$("[data-nav]").forEach((link) => {
            link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
          });
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
  }

  function renderStats() {
    const host = $("#heroStats");
    if (!host) return;
    host.innerHTML = siteData.stats
      .map(
        (stat) => `
        <div class="stat-item">
          <span class="stat-value">${stat.value}</span>
          <span class="stat-label">${stat.label}</span>
        </div>`
      )
      .join("");
  }

  function renderAbout() {
    const t = $("#aboutText"), c = $("#aboutChips");
    if (t) t.textContent = siteData.about.text;
    if (c) c.innerHTML = siteData.about.chips.map((x) => `<span class="chip">${x}</span>`).join("");
  }

  function renderHighlights() {
    const host = $("#highlightGrid");
    if (!host) return;
    host.innerHTML = siteData.highlights
      .map(
        (item, i) => `
        <article class="highlight-card reveal" style="--delay:${i * 80}ms">
          <span class="highlight-icon" aria-hidden="true">${item.icon || ""}</span><span class="highlight-index">${String(i + 1).padStart(2, "0")}</span>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>`
      )
      .join("");
  }

  function renderTimeline() {
    const host = $("#timelineList");
    if (!host) return;

    host.innerHTML = siteData.timeline
      .map((item, index) => {
        const tags = item.tags.map((tag) => `<span class="tag">#${tag}</span>`).join("");
<<<<<<< HEAD
        const images = item.images || [];
        const slides = images
          .map(
            (img, i) => `
            <figure class="carousel-slide${i === 0 ? " is-active" : ""}" data-slide="${i}">
              <img src="${encodeURI(img.src)}" alt="${img.alt}" loading="lazy" data-zoom>
=======
        const slides = item.images
          .map(
            (img, i) => `
            <figure class="carousel-slide${i === 0 ? " is-active" : ""}" data-slide="${i}">
              <img src="${img.src}" alt="${img.alt}" loading="lazy">
>>>>>>> e817f00c8d65d38f3ded65419343005dc8fb5987
            </figure>`
          )
          .join("");

        const dots =
<<<<<<< HEAD
          images.length > 1
            ? `<div class="carousel-dots">${images
=======
          item.images.length > 1
            ? `<div class="carousel-dots">${item.images
>>>>>>> e817f00c8d65d38f3ded65419343005dc8fb5987
                .map(
                  (_, i) =>
                    `<button type="button" class="carousel-dot${i === 0 ? " is-active" : ""}" data-dot="${i}" aria-label="Slide ${i + 1}"></button>`
                )
                .join("")}</div>`
            : "";

        const controls =
<<<<<<< HEAD
          images.length > 1
=======
          item.images.length > 1
>>>>>>> e817f00c8d65d38f3ded65419343005dc8fb5987
            ? `
            <div class="carousel-controls">
              <button type="button" class="carousel-btn" data-prev aria-label="Foto sebelumnya">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <button type="button" class="carousel-btn" data-next aria-label="Foto berikutnya">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            </div>`
            : "";

        return `
          <article class="timeline-item reveal" data-timeline-index="${index}">
            <div class="timeline-marker" aria-hidden="true"></div>
            <div class="timeline-card">
              <div class="timeline-meta">
                <span class="day-badge">${item.day}</span>
                <time datetime="${item.date}">${item.date}</time>
              </div>
              <h3>${item.title}</h3>
              <p class="timeline-place">📍 ${item.place || ""}</p>
              <p class="timeline-desc">${item.description}</p>
              ${item.fact ? `<p class="timeline-fact"><strong>Catatan:</strong> ${item.fact}</p>` : ""}
              <div class="tag-row">${tags}</div>
<<<<<<< HEAD
              ${
                images.length
                  ? `<div class="timeline-carousel" data-carousel="${index}">
                <div class="carousel-track">${slides}</div>
                ${controls}
                ${dots}
              </div>`
                  : ""
              }
=======
              <div class="timeline-carousel" data-carousel="${index}">
                <div class="carousel-track">${slides}</div>
                ${controls}
                ${dots}
              </div>
>>>>>>> e817f00c8d65d38f3ded65419343005dc8fb5987
            </div>
          </article>`;
      })
      .join("");

    $$("[data-carousel]", host).forEach((carousel) => {
      const index = Number(carousel.dataset.carousel);
      carouselStates.set(index, 0);
      setupCarousel(carousel, index);
    });
  }

  function applyOrientation(el, width, height) {
    if (!el || !width || !height) return;
    const portrait = height > width;
    el.classList.toggle("is-portrait", portrait);
    el.classList.toggle("is-landscape", !portrait);
  }

  function bindImageOrientation(img, target) {
    if (!img || !target) return;
    const sync = () => applyOrientation(target, img.naturalWidth, img.naturalHeight);
    if (img.complete && img.naturalWidth) {
      sync();
      return;
    }
    img.addEventListener("load", sync, { once: true });
  }

  function setupCarousel(carousel, index) {
    const slides = $$(".carousel-slide", carousel);
    const dots = $$(".carousel-dot", carousel);
    const prev = $("[data-prev]", carousel);
    const next = $("[data-next]", carousel);
    const total = slides.length;

    function syncActiveOrientation(current) {
      const activeImg = $("img", slides[current]);
      bindImageOrientation(activeImg, carousel);
      if (activeImg && activeImg.complete && activeImg.naturalWidth) {
        applyOrientation(carousel, activeImg.naturalWidth, activeImg.naturalHeight);
      }
    }

    function goTo(n) {
      const current = ((n % total) + total) % total;
      carouselStates.set(index, current);
      slides.forEach((slide, i) => slide.classList.toggle("is-active", i === current));
      dots.forEach((dot, i) => dot.classList.toggle("is-active", i === current));
      syncActiveOrientation(current);
    }

    if (prev) prev.addEventListener("click", () => goTo(carouselStates.get(index) - 1));
    if (next) next.addEventListener("click", () => goTo(carouselStates.get(index) + 1));
    dots.forEach((dot) => {
      dot.addEventListener("click", () => goTo(Number(dot.dataset.dot)));
    });

<<<<<<< HEAD
    if (total > 1) {
      let startX = null;
      carousel.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; }, { passive: true });
      carousel.addEventListener("touchend", (e) => {
        if (startX === null) return;
        const dx = e.changedTouches[0].clientX - startX;
        startX = null;
        if (Math.abs(dx) > 40) goTo(carouselStates.get(index) + (dx < 0 ? 1 : -1));
      });
    }

    carousel.addEventListener("click", (e) => {
      const img = e.target.closest("img[data-zoom]");
      if (img) openLightbox({ src: img.getAttribute("src"), caption: img.alt });
    });

=======
>>>>>>> e817f00c8d65d38f3ded65419343005dc8fb5987
    syncActiveOrientation(0);
  }

  function renderFilters() {
    const host = $("#galleryFilters");
    if (!host) return;

    host.innerHTML = siteData.galleryFilters
      .map(
        (filter) => `
        <button
          type="button"
          class="filter-btn${filter.id === activeFilter ? " is-active" : ""}"
          data-filter="${filter.id}"
          role="tab"
          aria-selected="${filter.id === activeFilter}"
        >${filter.label}</button>`
      )
      .join("");

    host.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-filter]");
      if (!btn) return;
      activeFilter = btn.dataset.filter;
      $$(".filter-btn", host).forEach((el) => {
        const on = el.dataset.filter === activeFilter;
        el.classList.toggle("is-active", on);
        el.setAttribute("aria-selected", String(on));
      });
      renderGallery();
    });
  }

  function renderGallery() {
    const host = $("#galleryGrid");
    if (!host) return;

    const items =
      activeFilter === "all"
        ? siteData.gallery
        : siteData.gallery.filter((item) => item.category === activeFilter);

    host.innerHTML = items
      .map(
        (item, i) => `
        <button
          type="button"
          class="gallery-item reveal"
          style="--delay:${(i % 6) * 60}ms"
          data-gallery-id="${item.id}"
          aria-label="${item.caption}"
        >
<<<<<<< HEAD
          <img src="${encodeURI(item.src)}" alt="${item.caption}" loading="lazy">
=======
          <img src="${item.src}" alt="${item.caption}" loading="lazy">
>>>>>>> e817f00c8d65d38f3ded65419343005dc8fb5987
          <span class="gallery-caption">${item.caption}</span>
        </button>`
      )
      .join("");

    $$(".gallery-item", host).forEach((item) => {
      bindImageOrientation($("img", item), item);
    });

    observeReveals(host);
  }

  function openLightbox(item) {
    const panel = $(".lightbox-panel", lightbox);
<<<<<<< HEAD
    lightboxImage.src = encodeURI(decodeURI(item.src));
=======
    lightboxImage.src = item.src;
>>>>>>> e817f00c8d65d38f3ded65419343005dc8fb5987
    lightboxImage.alt = item.caption;
    lightboxCaption.textContent = item.caption;
    panel.classList.remove("is-portrait", "is-landscape");
    bindImageOrientation(lightboxImage, panel);
    lightbox.hidden = false;
    requestAnimationFrame(() => lightbox.classList.add("is-open"));
    document.body.classList.add("lightbox-open");
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    document.body.classList.remove("lightbox-open");
    setTimeout(() => {
      lightbox.hidden = true;
      lightboxImage.src = "";
    }, 280);
  }

  function setupLightbox() {
    $("#galleryGrid").addEventListener("click", (e) => {
      const btn = e.target.closest("[data-gallery-id]");
      if (!btn) return;
      const item = siteData.gallery.find((g) => g.id === btn.dataset.galleryId);
      if (item) openLightbox(item);
    });

    lightbox.addEventListener("click", (e) => {
      if (e.target.closest("[data-close-lightbox]")) closeLightbox();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
    });
  }

  function renderTeam() {
    const host = $("#teamGrid");
    if (!host) return;

    host.innerHTML = siteData.team
      .map(
        (member, i) => `
        <article class="team-card reveal" style="--delay:${i * 70}ms">
          <div class="team-avatar" aria-hidden="true">${member.name.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase()}</div>
          <h3>${member.name}</h3>
          <p class="team-nim">${member.nim}</p>
          <p class="team-role">${member.role}</p>
          <p class="team-note">${member.note}</p>
          <div class="team-links">
            <a href="${member.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="${member.instagram}" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </article>`
      )
      .join("");
  }

  function observeReveals(root = document) {
    const els = $$(".reveal", root).filter((el) => !el.dataset.observed);
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach((el) => {
      el.dataset.observed = "1";
      io.observe(el);
    });
  }

  function setupBackTop() {
    backTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  function init() {
    setYear();
    renderStats();
    renderAbout();
    renderHighlights();
    renderTimeline();
    renderFilters();
    renderGallery();
    renderTeam();
    setupNav();
    setupLightbox();
    setupBackTop();
    observeReveals();
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
