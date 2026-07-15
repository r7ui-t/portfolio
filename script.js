
const githubIconSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 128 128" aria-hidden="true">
    <g fill="#FFFFFF"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"/><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"/></g>
  </svg>`;

const infoIconSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle work-icon work-info-icon" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
  </svg>`;

const viewIconSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-right-square work-icon work-link-icon" viewBox="0 0 16 16" aria-hidden="true">
    <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.854 3.146a.5.5 0 1 0-.708.708L9.243 9.95H6.475a.5.5 0 1 0 0 1h3.975a.5.5 0 0 0 .5-.5V6.475a.5.5 0 1 0-1 0v2.768z"/>
  </svg>`;

const calendarIconSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
  </svg>`;

const getFirstWorkImage = (work) => {
  if (Array.isArray(work.images) && work.images.length) return work.images[0];
  if (work.image) return work.image;
  if (Array.isArray(work.mobileImages) && work.mobileImages.length) return work.mobileImages[0];
  return work.mobileImage || "";
};

const renderIndexCards = (container, works) => {
  container.innerHTML = works.map((w, i) => `
    <article class="work-card js-work-card reveal border border-white/10 rounded-xl bg-white/10 hover:bg-white/15 hover:border-cyan-400/40 transition" style="transition-delay: ${Math.min(i, 6) * 90}ms" data-work-id="${w.id}" role="button" tabindex="0" aria-label="${w.title}の詳細を開く">
      <div class="work-card-media"><img src="${getFirstWorkImage(w)}" alt="${w.title}のプレビュー画像" loading="lazy"></div>
      <div class="work-card-body"><div class="work-card-header"><h3>${w.title}</h3></div><p>${w.summary}</p>
        <div class="work-card-footer"><span class="work-card-period">${calendarIconSvg}<span>${w.period || "制作期間未設定"}</span></span><div class="work-card-actions">
          ${w.github ? `<a href="${w.github}" target="_blank" rel="noopener noreferrer" class="work-action-link" aria-label="GitHub リポジトリを開く">${githubIconSvg}</a>` : ""}
          <a href="${w.indexView.href}" ${w.indexView.target ? `target="${w.indexView.target}"` : ""} rel="noopener noreferrer" class="work-action-link" aria-label="${w.indexView.ariaLabel}">${viewIconSvg}</a>
        </div></div>
      </div>
    </article>`).join("");
};

const renderListCards = (container, works) => {
  container.innerHTML = works.map((w) => `
    <article class="works-list-card js-work-card" data-work-id="${w.id}" role="button" tabindex="0" aria-label="${w.title}の詳細を開く">
      <div class="works-list-media"><img src="${getFirstWorkImage(w)}" alt="${w.title}のプレビュー画像" loading="lazy"></div>
      <div class="works-list-body"><h2 class="works-list-title">${w.title}</h2><p class="works-list-summary">${w.summary}</p>
        <div class="works-list-footer"><span class="works-list-period">${calendarIconSvg}<span>${w.period || "制作期間未設定"}</span></span><div class="works-list-actions">
          ${w.github ? `<a href="${w.github}" target="_blank" rel="noopener noreferrer" class="works-list-action" aria-label="GitHub リポジトリを開く">${githubIconSvg}</a>` : ""}
          <a href="${w.listView.href}" ${w.listView.target ? `target="${w.listView.target}"` : ""} rel="noopener noreferrer" class="works-list-action" aria-label="${w.listView.ariaLabel}">${viewIconSvg}</a>
        </div></div>
      </div>
    </article>`).join("");
};

document.addEventListener("DOMContentLoaded", async () => {
  document.querySelectorAll(".js-copy-email").forEach((button) => {
    button.addEventListener("click", async () => {
      const text = button.dataset.copyText;
      if (!text) return;
      try {
        await navigator.clipboard.writeText(text);
        button.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m5 12 4 4L19 6\"></path></svg>";
        button.setAttribute("aria-label", "メールアドレスをコピーしました");
        setTimeout(() => {
          button.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect x=\"9\" y=\"9\" width=\"11\" height=\"11\" rx=\"2\"></rect><path d=\"M15 9V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4\"></path></svg>";
          button.setAttribute("aria-label", "メールアドレスをコピー");
        }, 2000);
      } catch (err) {
        console.error("メールアドレスのコピーに失敗しました:", err);
      }
    });
  });

  const modal = document.getElementById("work-modal");
  if (!modal) return;

  const imageElement = modal.querySelector(".work-modal-image");
  const previousImageButton = modal.querySelector(".work-gallery-prev");
  const nextImageButton = modal.querySelector(".work-gallery-next");
  const imageCounter = modal.querySelector(".work-gallery-counter");
  const titleElement = modal.querySelector(".work-modal-title");
  const periodElement = modal.querySelector(".work-modal-period");
  const techElement = modal.querySelector(".work-modal-tech");
  const detailElement = modal.querySelector(".work-modal-detail");
  const processElement = modal.querySelector(".work-modal-process");
  const linkElement = modal.querySelector(".work-modal-link");

  const indexContainer = document.querySelector("#works-grid");
  const listContainer = document.querySelector("#works-list");
  const dataFile = indexContainer ? "data/select_works.json" : "data/works.json";

  let works = [];
  try {
    const response = await fetch(dataFile);
    works = await response.json();
  } catch (err) {
    console.error("作品データの読み込みに失敗しました:", err);
  }

  if (indexContainer) renderIndexCards(indexContainer, works);
  if (listContainer) renderListCards(listContainer, works);

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

  const getModalImages = (work) => {
    const isMobile = window.matchMedia("(max-width: 640px)").matches;
    const pcImages = Array.isArray(work.images) && work.images.length
      ? work.images
      : (work.image ? [work.image] : []);
    const mobileImages = Array.isArray(work.mobileImages) && work.mobileImages.length
      ? work.mobileImages
      : (work.mobileImage ? [work.mobileImage] : []);
    return isMobile && mobileImages.length ? mobileImages : pcImages;
  };

  let currentWork = null;
  let currentImageIndex = 0;
  let galleryAnimationTimer = null;
  let isGalleryAnimating = false;

  const updateGallery = () => {
    if (!currentWork) return;
    const images = getModalImages(currentWork);
    const hasImages = images.length > 0;
    const hasMultipleImages = images.length > 1;

    if (!hasImages) {
      imageElement.removeAttribute("src");
      imageElement.alt = "画像は登録されていません";
    } else {
      currentImageIndex = (currentImageIndex + images.length) % images.length;
      imageElement.src = images[currentImageIndex];
      imageElement.alt = `${currentWork.title || "作品"}の画像 ${currentImageIndex + 1}`;
    }

    previousImageButton.hidden = !hasMultipleImages;
    nextImageButton.hidden = !hasMultipleImages;
    imageCounter.hidden = !hasMultipleImages;
    imageCounter.textContent = hasMultipleImages
      ? `${currentImageIndex + 1} / ${images.length}`
      : "";
  };

  const changeGalleryImage = (direction) => {
    if (!currentWork || isGalleryAnimating) return;
    const images = getModalImages(currentWork);
    if (images.length <= 1) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      currentImageIndex += direction;
      updateGallery();
      return;
    }

    isGalleryAnimating = true;
    previousImageButton.disabled = true;
    nextImageButton.disabled = true;

    const exitClass = direction > 0 ? "is-sliding-out-left" : "is-sliding-out-right";
    const enterClass = direction > 0 ? "is-entering-from-right" : "is-entering-from-left";

    imageElement.classList.remove(
      "is-sliding-out-left",
      "is-sliding-out-right",
      "is-entering-from-left",
      "is-entering-from-right"
    );
    imageElement.classList.add(exitClass);

    clearTimeout(galleryAnimationTimer);
    galleryAnimationTimer = window.setTimeout(() => {
      currentImageIndex += direction;
      updateGallery();

      imageElement.classList.remove(exitClass);
      imageElement.classList.add(enterClass);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          imageElement.classList.remove(enterClass);
        });
      });

      galleryAnimationTimer = window.setTimeout(() => {
        isGalleryAnimating = false;
        previousImageButton.disabled = false;
        nextImageButton.disabled = false;
      }, 280);
    }, 220);
  };

  const openModal = (work) => {
    currentWork = work;
    currentImageIndex = 0;
    isGalleryAnimating = false;
    clearTimeout(galleryAnimationTimer);
    imageElement.classList.remove("is-sliding-out-left", "is-sliding-out-right", "is-entering-from-left", "is-entering-from-right");
    previousImageButton.disabled = false;
    nextImageButton.disabled = false;
    updateGallery();
    titleElement.textContent = work.title || "";
    periodElement.textContent = work.period || "";
    techElement.textContent = work.tech || "";
    detailElement.textContent = work.detail || "";
    processElement.textContent = work.process || "";
    linkElement.href = work.modalLink || "#";
    linkElement.target = work.modalLinkTarget || "";
    linkElement.dataset.action = work.modalLinkAction || "";
    modal.classList.remove("hidden");
  };

  const closeModal = () => {
    modal.classList.add("hidden");
    currentWork = null;
    isGalleryAnimating = false;
    clearTimeout(galleryAnimationTimer);
    imageElement.classList.remove("is-sliding-out-left", "is-sliding-out-right", "is-entering-from-left", "is-entering-from-right");
    previousImageButton.disabled = false;
    nextImageButton.disabled = false;
  };

  previousImageButton.addEventListener("click", () => changeGalleryImage(-1));
  nextImageButton.addEventListener("click", () => changeGalleryImage(1));

  window.matchMedia("(max-width: 640px)").addEventListener("change", () => {
    if (currentWork && !modal.classList.contains("hidden")) {
      currentImageIndex = 0;
      updateGallery();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!currentWork || modal.classList.contains("hidden")) return;
    if (event.key === "ArrowLeft") changeGalleryImage(-1);
    if (event.key === "ArrowRight") changeGalleryImage(1);
    if (event.key === "Escape") closeModal();
  });

  const openWorkFromCard = (card) => {
    const work = works.find((w) => w.id === card.dataset.workId);
    if (work) openModal(work);
  };
  document.addEventListener("click", (e) => {
    const card = e.target.closest(".js-work-card");
    if (!card || e.target.closest("a, button")) return;
    openWorkFromCard(card);
  });
  document.addEventListener("keydown", (e) => {
    const card = e.target.closest(".js-work-card");
    if (!card || e.target.closest("a, button")) return;
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openWorkFromCard(card); }
  });
  document.addEventListener("click", (e) => {
    if (e.target.closest(".js-modal-close")) {
      closeModal();
    }
  });
  document.addEventListener("click", (e) => {
    const link = e.target.closest(".work-modal-link");
    if (link && link.dataset.action === "scrollTop") {
      e.preventDefault();
      closeModal();
      const scrollContainer = document.querySelector(".site") || window;
      scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
});
