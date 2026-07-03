
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("work-modal");

  const imageElement = modal.querySelector(".work-modal-image");
  const titleElement = modal.querySelector(".work-modal-title");
  const periodElement = modal.querySelector(".work-modal-period");
  const techElement = modal.querySelector(".work-modal-tech");
  const detailElement = modal.querySelector(".work-modal-detail");
  const processElement = modal.querySelector(".work-modal-process");
  const linkElement = modal.querySelector(".work-modal-link");

  const openModal = (trigger) => {
    imageElement.src = trigger.dataset.modalImage || "";
    titleElement.textContent = trigger.dataset.modalTitle || "";
    periodElement.textContent = trigger.dataset.modalPeriod || "";
    techElement.textContent = trigger.dataset.modalTech || "";
    detailElement.textContent = trigger.dataset.modalDetail || "";
    processElement.textContent = trigger.dataset.modalProcess || "";
    linkElement.href = trigger.dataset.modalLink || "#";
    linkElement.target = trigger.dataset.modalLinkTarget || "";

    modal.classList.remove("hidden");
  };

  const closeModal = () => {
    modal.classList.add("hidden");
  };

  document.addEventListener("click", (e) => {
    const trigger = e.target.closest(".js-work-modal-trigger");
    if (trigger) {
      e.preventDefault();
      openModal(trigger);
    }
  });
  document.addEventListener("click", (e) => {
    if (e.target.closest(".js-modal-close")) {
      closeModal();
    }
  });
});
