const escapeHtml = (value = "") => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const getWorkImages = (work) => {
  if (Array.isArray(work.images) && work.images.length > 0) return work.images;
  if (work.image) return [work.image];
  if (Array.isArray(work.mobileImages) && work.mobileImages.length > 0) return work.mobileImages;
  if (work.mobileImage) return [work.mobileImage];
  return [];
};

const renderProjectLinks = (links) => {
  if (!Array.isArray(links)) return "";

  const linkMarkup = links
    .filter((link) =>
      link
      && typeof link.label === "string"
      && link.label.trim() !== ""
      && typeof link.href === "string"
      && link.href.trim() !== "")
    .map((link) => {
      const opensNewTab = link.target === "_blank";
      const targetAttributes = opensNewTab
        ? ' target="_blank" rel="noopener noreferrer"'
        : "";

      return `
        <a class="project-link" href="${escapeHtml(link.href)}"${targetAttributes}>
          <span>${escapeHtml(link.label)}</span><span aria-hidden="true">↗</span>
        </a>`;
    })
    .join("");

  return linkMarkup
    ? `<div class="project-actions">${linkMarkup}</div>`
    : "";
};

const renderCaseStudy = (caseStudy) => {
  if (!caseStudy || typeof caseStudy !== "object") return "";

  const entries = [
    ["課題", caseStudy.challenge],
    ["判断", caseStudy.decision],
    ["結果", caseStudy.result],
  ].filter(([, value]) => typeof value === "string" && value.trim() !== "");

  if (entries.length === 0) return "";

  return `
    <dl class="project-case-study" aria-label="ケーススタディ">
      ${entries.map(([label, value]) => `
        <div>
          <dt>${label}</dt>
          <dd>${escapeHtml(value)}</dd>
        </div>`).join("")}
    </dl>`;
};

const renderProject = (work) => {
  const images = getWorkImages(work);
  const hasMultipleImages = images.length > 1;
  const imageMarkup = images.length > 0
    ? images.map((src, imageIndex) => `
        <img
          src="${escapeHtml(src)}"
          alt="${escapeHtml(work.title)}の画面 ${imageIndex + 1}"
          data-gallery-image="${imageIndex}"
          loading="lazy"
        >`).join("")
    : `<p class="error-message">画像は登録されていません。</p>`;

  const linksMarkup = renderProjectLinks(work.links);

  return `
    <article class="project project--${escapeHtml(work.id.toLowerCase())}${hasMultipleImages ? " project--multiple-images" : ""}">
      <header class="project-head">
        <h3 class="project-title">${escapeHtml(work.title)}</h3>
        <p class="project-period">${escapeHtml(work.period || "期間未設定")}</p>
      </header>

      <div class="project-stage">
        <div class="project-gallery-shell">
          <figure
            class="project-gallery"
            ${hasMultipleImages ? `data-gallery tabindex="0" aria-label="${escapeHtml(work.title)}の画像。左右キーまたはスワイプで切り替えられます"` : ""}
          >
            ${imageMarkup}
          </figure>
          ${hasMultipleImages ? `
            <div class="gallery-toolbar">
              <button type="button" class="gallery-button" data-gallery-direction="-1" aria-label="前の画像" disabled>←</button>
              <p class="gallery-status" aria-live="polite"><span data-gallery-current>1</span> / ${images.length}</p>
              <button type="button" class="gallery-button" data-gallery-direction="1" aria-label="次の画像">→</button>
            </div>` : ""}
        </div>
      </div>

      <div class="project-info">
        <p class="project-summary">${escapeHtml(work.summary)}</p>

        <dl class="project-meta">
          <div>
            <dt>Technology</dt>
            <dd>${escapeHtml(work.tech)}</dd>
          </div>
          <div>
            <dt>Overview</dt>
            <dd>${escapeHtml(work.detail)}</dd>
          </div>
        </dl>

        ${renderCaseStudy(work.caseStudy)}

        <details class="project-details">
          <summary>制作過程を読む</summary>
          <p class="project-process">${escapeHtml(work.process)}</p>
        </details>

        ${linksMarkup}
      </div>
    </article>`;
};

const setupGalleries = () => {
  document.querySelectorAll("[data-gallery]").forEach((gallery) => {
    const images = [...gallery.querySelectorAll("[data-gallery-image]")];
    const shell = gallery.closest(".project-gallery-shell");
    const currentLabel = shell?.querySelector("[data-gallery-current]");
    const previousButton = shell?.querySelector('[data-gallery-direction="-1"]');
    const nextButton = shell?.querySelector('[data-gallery-direction="1"]');
    if (images.length <= 1 || !currentLabel || !previousButton || !nextButton) return;

    let currentIndex = 0;
    let scrollFrame = 0;

    const updateControls = (index) => {
      currentIndex = Math.max(0, Math.min(index, images.length - 1));
      currentLabel.textContent = String(currentIndex + 1);
      previousButton.disabled = currentIndex === 0;
      nextButton.disabled = currentIndex === images.length - 1;
    };

    const moveToImage = (index, behavior = "smooth") => {
      const nextIndex = Math.max(0, Math.min(index, images.length - 1));
      gallery.scrollTo({
        left: gallery.clientWidth * nextIndex,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : behavior,
      });
      updateControls(nextIndex);
    };

    previousButton.addEventListener("click", () => moveToImage(currentIndex - 1));
    nextButton.addEventListener("click", () => moveToImage(currentIndex + 1));

    gallery.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      moveToImage(currentIndex + (event.key === "ArrowRight" ? 1 : -1));
    });

    gallery.addEventListener("scroll", () => {
      window.cancelAnimationFrame(scrollFrame);
      scrollFrame = window.requestAnimationFrame(() => {
        const visibleIndex = Math.round(gallery.scrollLeft / Math.max(gallery.clientWidth, 1));
        updateControls(visibleIndex);
      });
    }, { passive: true });

    window.addEventListener("resize", () => moveToImage(currentIndex, "auto"));
  });
};

const loadWorks = async () => {
  const worksList = document.getElementById("works-list");
  const workCount = document.getElementById("work-count");
  if (!worksList) return;

  try {
    const response = await fetch("data/works.json");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const works = await response.json();
    worksList.innerHTML = works.map(renderProject).join("");
    if (workCount) workCount.textContent = String(works.length);
    setupGalleries();
  } catch (error) {
    console.error("作品データの読み込みに失敗しました:", error);
    worksList.innerHTML = '<p class="error-message">作品を読み込めませんでした。時間をおいて再度お試しください。</p>';
  }
};

const setupEmailCopy = () => {
  const button = document.querySelector(".js-copy-email");
  if (!button) return;

  button.addEventListener("click", async () => {
    const email = button.dataset.copyText;
    if (!email) return;

    try {
      await navigator.clipboard.writeText(email);
      button.textContent = "コピー済み";
      button.classList.add("is-copied");
      button.setAttribute("aria-live", "polite");

      window.setTimeout(() => {
        button.textContent = "コピー";
        button.classList.remove("is-copied");
      }, 1800);
    } catch (error) {
      console.error("メールアドレスのコピーに失敗しました:", error);
      button.textContent = "コピー失敗";
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  setupEmailCopy();
  loadWorks();
});
