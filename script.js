
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

const renderIndexCards = (container, works) => {
  container.innerHTML = works.map((w, i) => `
    <article class="reveal relative border border-white/10 rounded-lg p-4 bg-white/10 hover:bg-white/15 hover:border-cyan-400/40 transition" style="transition-delay: ${Math.min(i, 6) * 90}ms">
      <h3>${w.title}</h3>
      <p>${w.summary}</p>
      <div class="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
        ${w.github ? `<a href="${w.github}" target="_blank" rel="noopener noreferrer" class="work-action-link" aria-label="GitHub リポジトリを開く">${githubIconSvg}</a>` : ""}
        <button type="button" class="work-action-button js-work-modal-trigger" aria-label="作品情報" data-work-id="${w.id}">${infoIconSvg}</button>
        <a href="${w.indexView.href}" ${w.indexView.target ? `target="${w.indexView.target}"` : ""} rel="noopener noreferrer" class="work-action-link" aria-label="${w.indexView.ariaLabel}">${viewIconSvg}</a>
      </div>
    </article>
  `).join("");
};

const renderListCards = (container, works) => {
  container.innerHTML = works.map((w, i) => `
    <article class="reveal relative border border-white/10 rounded-xl p-5 pr-16 bg-white/10 backdrop-blur-lg hover:bg-white/15 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-xl transition" style="transition-delay: ${Math.min(i, 6) * 90}ms">
      <h2 class="text-white text-lg font-semibold">${w.title}</h2>
      <p class="text-[#D9E2FF]/80 text-sm mt-2">${w.summary}</p>
      <div class="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
        ${w.github ? `<a href="${w.github}" target="_blank" rel="noopener noreferrer" class="hover:scale-110 hover:text-cyan-300 transition" aria-label="GitHub リポジトリを開く">${githubIconSvg}</a>` : ""}
        <button type="button" class="js-work-modal-trigger hover:scale-110 hover:text-cyan-300 transition" aria-label="作品情報" data-work-id="${w.id}">${infoIconSvg}</button>
        <a href="${w.listView.href}" ${w.listView.target ? `target="${w.listView.target}"` : ""} rel="noopener noreferrer" class="hover:scale-110 hover:text-cyan-300 transition" aria-label="${w.listView.ariaLabel}">${viewIconSvg}</a>
      </div>
    </article>
  `).join("");
};

document.addEventListener("DOMContentLoaded", async () => {
  const modal = document.getElementById("work-modal");
  if (!modal) return;

  const imageElement = modal.querySelector(".work-modal-image");
  const titleElement = modal.querySelector(".work-modal-title");
  const periodElement = modal.querySelector(".work-modal-period");
  const techElement = modal.querySelector(".work-modal-tech");
  const detailElement = modal.querySelector(".work-modal-detail");
  const processElement = modal.querySelector(".work-modal-process");
  const linkElement = modal.querySelector(".work-modal-link");

  const indexContainer = document.querySelector("#works-grid");
  const listContainer = document.querySelector("#works-list");
  const dataFile = indexContainer ? "select_works.json" : "works.json";

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

  const openModal = (work) => {
    imageElement.src = work.image || "";
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
  };

  document.addEventListener("click", (e) => {
    const trigger = e.target.closest(".js-work-modal-trigger");
    if (trigger) {
      e.preventDefault();
      const work = works.find((w) => w.id === trigger.dataset.workId);
      if (work) openModal(work);
    }
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
